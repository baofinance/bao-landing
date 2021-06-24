import gql from 'graphql-tag'

export const GLOBAL_QUERY = gql`
  {
    uniswapFactory(id: "0x374cb8c27130e2c9e04f44303f3c8351b9de61c1") {
      totalVolumeUSD
      totalLiquidityUSD
      pairCount
      txCount
    }
  }
`
