import Typography from '@/components/Typography'
import { getDisplayBalance } from '@/utils/numberFormat'
import { useQuery } from '@tanstack/react-query'
import { BigNumber } from 'ethers'
import Image from 'next/future/image'
import React from 'react'

const Vaults: React.FC = () => {
	return (
		<>
			<div className='m-auto mb-8 mt-4 grid w-full grid-cols-6'>
				<div className='col-span-3 m-auto mt-20'>
					<Typography variant='hero' className='stroke-white text-7xl !leading-[4rem]'>
						DELICIOUSLY
					</Typography>
					<Typography variant='hero' className='-mt-2 text-7xl !leading-[4rem] text-baoRed'>
						WRAPPED
					</Typography>
					<Typography variant='hero' className='-mt-2 text-7xl !leading-[4rem]'>
						FINANCE
					</Typography>
					<Typography variant='p' className='w-10/12'>
						Bao is a community-run, open-source project pioneering the realm of decentralized, synthetic tokens and markets. Like a
						delectable dumpling, Bao wraps existing assets into innovative wrapper tokens powered by automated strategies. With Chainlink
						oracles, we leverage real-time, accurate data, enabling the creation of robust assets and opening doors to permissionless
						derivatives. With Bao, we are crafting a new era of finance where anyone can participate in a world of liquidity, financial data
						ownership, and boundless possibilities. Join us on this delicious journey to democratize data and reshape the future of finance.
					</Typography>
				</div>
				<div className='col-span-3'>
					<Image src='/images/landing.png' width={600} height={600} alt='bao' />
				</div>
			</div>
			<ProtocolData />
			<div className='grid w-full grid-cols-6'>
				<div className='col-span-3 m-auto'>
					<Image src='/images/nodenetwork.png' width={600} height={600} alt='bao' className='mt-6' />
				</div>
				<div className='col-span-3 m-auto mt-20 p-8'>
					<Typography variant='h3' className='mr-2 inline font-bakbak text-baoRed'>
						DEMOCRATIZING
					</Typography>
					<Typography variant='h3' className='-mt-2 mr-2 inline font-bakbak'>
						ECONOMIC
					</Typography>
					<Typography variant='h3' className='-mt-2 inline font-bakbak'>
						DATA
					</Typography>
					<Typography variant='p'>
						Bao empowers users by democratizing data in the realm of decentralized finance. By leveraging Chainlink oracles, Bao brings
						real-time, accurate data on-chain, ensuring transparency and reliability. This enables anyone to access and utilize financial
						data, making informed decisions and participating in markets that were once exclusive. Bao{`'`}s commitment to data
						democratization paves the way for a more inclusive and accessible financial landscape.
					</Typography>
				</div>
			</div>

			<div className='grid w-full grid-cols-4'>
				<div className='glassmorphic-card col-span-1 ml-0 h-[240px] w-[200px]'></div>
				<div className='glassmorphic-card col-span-1 m-auto h-[240px] w-[200px]'></div>
				<div className='glassmorphic-card col-span-1 m-auto h-[240px] w-[200px]'></div>
				<div className='glassmorphic-card col-span-1 m-auto mr-0 h-[240px] w-[200px]'></div>
			</div>

			<div className='grid w-full grid-cols-6'>
				<div className='col-span-4 m-auto p-8'>
					<Typography variant='h3' className='mr-2 inline font-bakbak'>
						DISCOVER
					</Typography>
					<Typography variant='h3' className='-mt-2 mr-2 inline font-bakbak'>
						BAO
					</Typography>
					<Typography variant='h3' className='mr-2 inline font-bakbak text-baoRed'>
						BASKETS
					</Typography>
					<Typography variant='p'>
						Bao Baskets are your gateway to diversified exposure in the world of decentralized finance. Powered by automated strategies, Bao
						Baskets put your assets to work, generating yield through lending, yield farming, and other innovative methods. With regular
						rebalancing based on yield optimization, Bao Baskets compound rewards, providing an efficient and convenient way to participate
						in DeFi{`'`}s vibrant ecosystem. Experience the power of diversification with Bao Baskets today!
					</Typography>
				</div>
				<div className='col-span-2 m-auto'>
					<Image src='/images/basket.png' width={600} height={600} alt='bao' className='mt-6' />
				</div>
			</div>

			<div className='grid w-full grid-cols-6'>
				<div className='col-span-2 m-auto h-fit'>
					<Image src='/images/generator.png' width={600} height={600} alt='bao' className='mt-6' />
				</div>
				<div className='col-span-4 m-auto p-8'>
					<Typography variant='h3' className='mr-2 inline font-bakbak text-baoRed'>
						UNLOCK
					</Typography>
					<Typography variant='h3' className='-mt-2 mr-2 inline font-bakbak'>
						YOUR
					</Typography>
					<Typography variant='h3' className='mr-2 inline font-bakbak'>
						COLLATERAL
					</Typography>
					<Typography variant='p'>
						Bao Vaults open the doors to a world of lending, borrowing, and minting synthetic assets within the decentralized finance
						landscape. Securely deposit your collateral assets, such as ETH, bSTBL, and bETH, to access a range of borrowing and minting
						opportunities. Whether you want to mint stablecoins like baoUSD or create custom synthetics, Bao Vaults provide a flexible and
						user-friendly platform. Monitor your debt health, manage your positions, and seize opportunities in this dynamic ecosystem. Join
						Bao Vaults today and unlock the potential of collateralized finance!
					</Typography>
				</div>
			</div>
		</>
	)
}

export default Vaults

const ProtocolData = () => {
	const {
		data: price,
		data: tvl,
		data: mcap,
	} = useQuery(
		[],
		async () => {
			const _price = await fetch(`https://bao-price-api.herokuapp.com/api/price?id=bao-finance-v2`)
			const price = await _price.json()
			if (!price) throw new Error(`Can't get BAO price.`)
			const _tvl = await fetch(`https://api.llama.fi/tvl/bao-finance/`)
			const tvl = await _tvl.json()
			if (!tvl) throw new Error(`Can't get TVL'.`)
			const _mcap = await fetch(
				`https://api.coingecko.com/api/v3/coins/bao-finance?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
			)
			const mcap = await _mcap.json()
			if (!mcap) throw new Error(`Can't get BAO market cap.`)

			return price.price['bao-finance-v2'].usd, parseFloat(tvl), mcap['total_supply'], mcap['market_data']['market_cap']['usd']
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
		},
	)

	return (
		<div className='glassmorphic-card grid grid-cols-4 gap-16 px-4 py-6'>
			<div className='col-span-1 break-words text-center'>
				<Typography variant='lg' className='font-bakbak text-baoRed'>
					Total Value Locked
				</Typography>
				<Typography className='inline-block font-bakbak !text-3xl leading-5'>${tvl ? getDisplayBalance(tvl) : '-'}</Typography>
			</div>
			<div className='col-span-1 break-words text-center'>
				<Typography variant='lg' className='font-bakbak text-baoRed'>
					Total Holders
				</Typography>
				<Typography className='inline-block font-bakbak !text-3xl leading-5'>16K</Typography>
			</div>
			<div className='col-span-1 break-words text-center'>
				<Typography variant='lg' className='font-bakbak text-baoRed'>
					BAO Price
				</Typography>
				<Typography className='inline-block font-bakbak !text-3xl leading-5'>${price ? getDisplayBalance(price) : '-'}</Typography>
			</div>
			<div className='col-span-1 break-words text-center'>
				<Typography variant='lg' className='font-bakbak text-baoRed'>
					Market Cap
				</Typography>
				<Typography className='inline-block font-bakbak !text-3xl leading-5'>${mcap ? getDisplayBalance(mcap) : '-'}</Typography>
			</div>
		</div>
	)
}
