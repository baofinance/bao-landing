import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import BG from '../components/bg'
import FloatingImage from '../components/floatingImage'
import ProtocolData from '../components/protocolData'
import SEO from '../components/seo'
import Wizard from '../components/wizard'
import baobasket from '../images/baobasket.svg'
import immunefi from '../images/immunefi.png'
import Layout from '../layouts'

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  /* max-width: 1200px; */
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.heroBG};
  background-size: contain;
  opacity: 0.2;
  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
    max-height: 1220px;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 12rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 2rem;
    padding-bottom: 8rem;
  }
`

const StyledBodySubText = styled.h3`
  max-width: 960px;
  text-align: center;
  line-height: 160%;
  font-size: 1.25rem;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBodyParagraph = styled.h3`
  max-width: 960px;
  text-align: left;
  line-height: 160%;
  font-size: 1.25rem;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledProductImage = styled(Img)`
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 20px;
`

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }

  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
    max-width: 450px;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const StyledItemRow = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1.5rem;
  width: 100%;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
  }
`

const StyledLeft = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  margin-top: 6rem;
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-gap: 2rem;
    gap: 2rem;
    display: grid;
    padding: 2rem;
    margin-top: 6rem;
  }
`

const StyledLeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  will-change: transform;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;
}
@media (min-width: 640px) {
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
  @media (min-width: 768px) {
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
}
@media (min-width: 1024px) {
  grid-column: span 6/span 6;
  text-align: left;
  display: flex;
}
`

const StyledLeftSubTitle = styled.h1`
  font-weight: 600;
  margin-top: 1.5rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  font-family: 'Kaushan Script';
  letter-spacing: -0.025em;
  text-align: center;
  @media (min-width: 640px) {
    margin-top: 1.25rem;
    line-height: 1;
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    margin-top: 1.5rem;
    font-size: 3rem;
    line-height: 1;
    text-align: left;
  }
  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 1;
  }
`
const StyledLeftSubText = styled.h2`
  margin-top: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  @media (min-width: 640px) {
    margin-top: 1.125rem;
    font-size: 1.2rem;
    line-height: 1.75rem;
    text-align: center;
  }
  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: left;
  }
  @media (min-width: 1280px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`

const StyledRightImage = styled.div`
  position: absolute;
  right: 0px;
  width: 600px;
  padding: 50px;
  bottom: 0px;
  z-index: -1;
  @media (max-width: 1919px) {
        display: none;
    }
  }
`

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      baomainnet: file(relativePath: { eq: "baomainnet.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      xdaifarms: file(relativePath: { eq: "xdaifarms.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baoswap: file(relativePath: { eq: "baoswap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pandaswap: file(relativePath: { eq: "pandaswap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pollyfinance: file(relativePath: { eq: "pollyfinance.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BGCard></BGCard>
      <SEO title="Home" path={props.location.pathname} description={'Deliciously wrapped finance!'} />
      <StyledLeft>
        <StyledLeftTitle>
          <StyledLeftSubTitle>Deliciously wrapped finance!</StyledLeftSubTitle>
          <StyledLeftSubText>
            Bao is a community-run, open-source project creating new decentralized, synthetic tokens and markets. Bao
            (包) stands for a treasure or package. Something extraordinary exists in another layer. Bao buns, or Baozi
            (包子) in Chinese, are delicious wrapped dumplings. These bao buns are the tradition of taking something
            good that exists and wrapping it up into a new treasure. Bao aims to do this by building new features on top
            of existing DeFi systems.
          </StyledLeftSubText>
        </StyledLeftTitle>
      </StyledLeft>
      <FloatingImage />
      <StyledBody>
        <ProtocolData />
        <VisionSection data={data} props={props} />
        <SecuritySection data={data} props={props} />
        <ProductSection data={data} props={props} />
        <StyledRightImage>
          <img src={baobasket}></img>
        </StyledRightImage>
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage

const StyledSectionTitle = styled.h1`
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  margin-top: 3rem;
  font-weight: 600;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  font-family: 'Kaushan Script';
  letter-spacing: -0.025em;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 4rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 4rem;
    text-align: left;
  }
`

const VisionSection = props => {
  return (
    <>
      <div style={{ marginTop: '3rem' }}></div>
      <StyledSectionTitle>The Bao Vision</StyledSectionTitle>
      <StyledBodyParagraph>
        <p>
          Traditional finance doesn’t work. For too long it’s been serving the wealthy suits while erecting barriers of
          entry for everyone else. They own the data, restrict the tools, and change the rules to always be in their
          favor. It’s time to not only give that power back to the people, but to create even more powerful tools that
          the old cumbersome system could never dream of.
        </p>

        <p>
          At Bao Finance, we’re building a community composed of brilliant minds all seeking control of their own
          finances and building a new system that works for everyone. Synthetic assets allow us to create financial
          instruments and markets never seen before. If the data exists, so too can a marketplace for it - the
          possibilities are endless.
        </p>

        <p>
          It all comes down to data. Most people aren’t aware that financial data is what makes institutions so powerful
          and why you can’t do what they do. This is why synthetics will matter. If you can get liquidity in any
          discrete quantifiable event, what have you created? The world’s most accurate financial data system. Financial
          data is used within insurance, lending, hedge funds, risk mitigation, banking, yield, mortgages, credit
          scores, etc.
        </p>

        <p>
          Incentivised synthetics allow you to start building an open financial data market. Once you have synthetics,
          you own the financial data stream to anything because you can incentivise liquidity to make it more accurate.
          With this financial data stream you can start any DeFi business you want on top of it, or package and sell the
          data for others to build on. You become the foundation for the future of finance.
        </p>
      </StyledBodyParagraph>
    </>
  )
}

const ProductSection = props => {
  return (
    <>
      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
        <Wizard />
      </StyledSectionFlex>
    </>
  )
}

const SecuritySection = props => {
  return (
    <>
      <div style={{ marginTop: '3rem' }}></div>
      <a href="https://www.immunefi.com/bounty/baofinance" target="_blank" rel="noreferrer">
        <img src={immunefi} height="250px" />
      </a>
    </>
  )
}
