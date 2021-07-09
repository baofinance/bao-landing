import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'

const StyledSectionFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
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

const Numbers = styled(StyledSectionFlex)`
  @media (max-width: 960px) {
    /* display: none; */
  }
`

const BigNumbers = styled(StyledSectionFlex)`
  font-size: 28px;
  font-weight: 700;
  flex-direction: column;
  
  @media (max-width: 960px) {
    font-size: 32px;
  }
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
  const [tvl, setTvl] = useState()
  const [price, setPrice] = useState()

  useEffect(async () => {
    const tvl = await (await fetch('https://api.llama.fi/tvl/bao-finance/', { method: 'GET' })).json()
    setTvl(parseFloat(tvl))

    const price = await (await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bao-finance&vs_currencies=usd',
      { method: 'GET' }
    )).json()
    setPrice(price['bao-finance'].usd)
  }, [])

  const formatPrice = str =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      compactDisplay: 'short'
      // maximumSignificantDigits: 5
    }).format(str)

  return (
    <section className="fact-one">
      <div className="container">
        <div className="row">
          <Numbers id="about" style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
              <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                <div className="fact-one__single">
                  <div className="fact-one__inner">
                    <BigNumbers>
                      <span>
                        {tvl ? formatPrice(tvl) : '...'}
                      </span>
                      <p style={{ fontSize: '14px' }}>TVL</p>
                    </BigNumbers>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                <div className="fact-one__single">
                  <div className="fact-one__inner">
              <BigNumbers>
                <span>
                  4
                </span>
                <p style={{ fontSize: '14px' }}>Chains</p>
              </BigNumbers>
              </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                <div className="fact-one__single">
                  <div className="fact-one__inner">
              <BigNumbers>
                <span>
                  {price ? formatPrice(price) : '...'}
                </span>
                <p style={{ fontSize: '14px' }}>BAO Price</p>
              </BigNumbers>
              </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                <div className="fact-one__single">
                  <div className="fact-one__inner">
              <BigNumbers>
                <span>
                  200
                </span>
                <p style={{ fontSize: '14px' }}>Market Cap</p>
              </BigNumbers>
              </div>
                </div>
              </div>
            </div>
          </Numbers>
        </div>
      </div>
    </section>
  )
}

export default ProtocolData