import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { client } from '../apollo/client'
import { GLOBAL_QUERY } from '../apollo/queries'

const StyledSectionFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  z-index: 99999;
  justify-content: space-between;
  font-family: Poppins,sans-serif;
  
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-left: 0;
    margin-top: 0rem;
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 640px) {
    display: none;
  }
  h1,
  h2 {
    max-width: 650px;
  }
  p {
    max-width: 650px;
  }
`

const BigNumbers = styled(StyledSectionFlex)`
  font-size: 18px;
  flex-direction: column
  @media (max-width: 960px) {
    font-size: 32px;
  }
  --tw-space-x-reverse: 0;
    margin-right: calc(5rem*var(--tw-space-x-reverse));
    margin-left: calc(5rem*(1 - var(--tw-space-x-reverse)));
`

export const GET_BLOCK = gql`
  query blocks($timestamp: Int!) {
    blocks(first: 1, orderBy: timestamp, orderDirection: asc, where: { timestamp_gt: $timestamp }) {
      id
      number
      timestamp
    }
  }
`

export const ETH_PRICE = block => {
  const queryString = block
    ? `
    query bundles {
      bundles(where: { id: ${1} } block: {number: ${block}}) {
        id
        ethPrice
      }
    }
  `
    : ` query bundles {
      bundles(where: { id: ${1} }) {
        id
        ethPrice
      }
    }
  `
  return gql(queryString)
}

const ProtocolData = () => {
  const { data: globalData } = useQuery(GLOBAL_QUERY, { pollInterval: 10000, client: client })

  // hardcode at 1B in case of data failure
  const price = globalData ? globalData?.baoToken?.price : 0.0008
  const tvl = globalData ? globalData?.baoToken?.holders : 100000000
  const mc = globalData ? globalData?.uniswapFactory?.txCount : 29000000
  const holders = globalData ? globalData?.baoToken?.holders : 16000


  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short'
    // maximumSignificantDigits: 5
  }).format(price)

  const formattedTVL = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short'
    // maximumSignificantDigits: 5
  }).format(tvl)

  const formattedMC = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short'
    // maximumSignificantDigits: 5
  }).format(mc)

  const formattedHolders = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
    // maximumSignificantDigits: 5
  }).format(holders)

  return (
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', margin: 0, position: 'fixed', bottom: 0, paddingTop: '1.25rem', paddingBottom: '1.25rem', backgroundColor: '#efeae7',  border: '1px solid rgb(226, 214, 207)',
      overflow: 'hidden' }}>
        <BigNumbers>
        <div style={{ whitespace: 'nowrap' }}>
            <span style={{ fontWeight: 600, fontFamily: 'Kaushan Script' }}>BAO: </span><span style={{ fontWeight: 200 }}>{formattedPrice}</span>
          </div>
        </BigNumbers>
        <BigNumbers>
          <div style={{ whitespace: 'nowrap' }}>
            <span style={{ fontWeight: 600, fontFamily: 'Kaushan Script' }}>Total Value Locked: </span><span style={{ fontWeight: 200 }}>{formattedTVL}</span><span style={{ opacity: '0.5' }}>+</span>
          </div>
        </BigNumbers>
        <BigNumbers>
        <div style={{ whitespace: 'nowrap' }}>
            <span style={{ fontWeight: 600, fontFamily: 'Kaushan Script' }}>Market Cap: </span><span style={{ fontWeight: 200 }}>{formattedMC}</span><span style={{ opacity: '0.5' }}>+</span>
          </div>
        </BigNumbers>
        <BigNumbers>
        <div style={{ whitespace: 'nowrap' }}>
          <span style={{ fontWeight: 600, fontFamily: 'Kaushan Script' }}>Token Holders: </span><span style={{ fontWeight: 200 }}>{formattedHolders}</span><span style={{ opacity: '0.5' }}>+</span>
        </div>
        </BigNumbers>
      </div>
        )
}

export default ProtocolData
