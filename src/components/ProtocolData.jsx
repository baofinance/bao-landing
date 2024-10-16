import { getDisplayBalance } from '../utils/numberFormat'
import { useEffect, useState } from 'react'
import { BigNumber } from 'ethers'
import { useQuery } from '@tanstack/react-query'

export const ProtocolData = () => {
  const {
    data: price,
    data: tvl,
    data: mcap,
  } = useQuery(
    [],
    async () => {
      const _price = await fetch(
        `https://bao-price-api.herokuapp.com/api/price?id=bao-finance-v2`
      )
      const price = await _price.json()
      if (!price) throw new Error(`Can't get BAO price.`)
      const _tvl = await fetch(`https://api.llama.fi/tvl/bao-finance/`)
      const tvl = await _tvl.json()
      if (!tvl) throw new Error(`Can't get TVL.`)
      const _mcap = await fetch(
        `https://api.coingecko.com/api/v3/coins/bao-finance?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      )
      const mcap = await _mcap.json()
      if (!mcap) throw new Error(`Can't get BAO market cap.`)

      return (
        price.price['bao-finance-v2'].usd,
        parseFloat(tvl),
        mcap['total_supply'],
        mcap['market_data']['market_cap']['usd']
      )
    },
    {
      retry: true,
      retryDelay: 1000 * 60,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 120,
      refetchOnReconnect: false,
      refetchInterval: 1000 * 60 * 5,
      keepPreviousData: true,
      placeholderData: BigNumber.from(0),
    }
  )

  console.log(tvl, price, mcap)
  return (
    <section
      id="join-us-on-discord"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="grid grid-cols-4 gap-16 px-6 py-6">
        <div className="col-span-1 break-words text-center">
          <p className="text-baoRed font-bakbak text-lg">Total Value Locked</p>
          <p className="inline-block font-bakbak !text-2xl leading-5 text-baoWhite">
            ${tvl ? getDisplayBalance(tvl) : '-'}
          </p>
        </div>
        <div className="col-span-1 break-words text-center">
          <p className="text-baoRed font-bakbak text-lg">Total Holders</p>
          <p className="inline-block font-bakbak !text-2xl leading-5 text-baoWhite">
            16K
          </p>
        </div>
        <div className="col-span-1 break-words text-center">
          <p className="text-baoRed font-bakbak text-lg">BAO Price</p>
          <p className="inline-block font-bakbak !text-2xl leading-5 text-baoWhite">
            ${price ? getDisplayBalance(price) : '-'}
          </p>
        </div>
        <div className="col-span-1 break-words text-center">
          <p className="text-baoRed font-bakbak text-lg">Market Cap</p>
          <p className="inline-block font-bakbak !text-2xl leading-5 text-baoWhite">
            ${mcap ? getDisplayBalance(mcap) : '-'}
          </p>
        </div>
      </div>
    </section>
  )
}
