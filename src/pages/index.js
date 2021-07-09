import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Button } from '../components/button'
import Wizard from '../components/wizard'
import ProtocolData from '../components/protocolData'
import { useDarkMode } from '../contexts/Application'
import { CardBGImage, CardFade, CardNoise, StyledExternalLink, StyledLeftLink, StyledRightLink } from '../components/utils'
import FloatingImage from '../components/floatingImage'
import RoadMap from '../components/roadMap'
import baobasket from '../images/baobasket.svg'
import AccordionItem from '../components/accordionItem'

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

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  /* margin: 3rem 0 4rem 0; */
  margin: 0 auto;
  margin-bottom: 6rem;
  @media (max-width: 960px) {
    margin: 0 auto;

    /* margin: 3rem 0 1rem 0; */
    /* margin-bottom: 4rem; */
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 104px;
  margin: 4rem auto;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'GT Haptik Regular';
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 58px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 52px;
  }
`

const StyledBodySubTitle = styled.h2`
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBannerImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 260px;
  max-width: 720px;
  background-color: none;
  margin-top: 1rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
  }
`

const StyledProductImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 150px;
  max-width: 150px;
  border: 1px solid rgb(226, 214, 207);
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 640px) {
    min-width: 120px;
    max-width: 120px;
  }
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
  margin: 0rem;
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

const StyledHeroImage = styled(Img)`
  width: 75vw;
  height: 360px;
  /* max-width: 960px; */
  background-color: none;
  border-radius: 12px;
  margin-top: 1rem;
  @media (max-width: 960px) {
    width: auto;
    height: 360px;
  }
`

const StyledImgSection = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 6rem 0 1rem 0;
  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
    p {
      max-width: 450px;
    }
    h1 {
      max-width: 450px;
    }
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 450px;
  }
  h1 {
    max-width: 450px;
    line-height: 1.3;
  }
  h2 {
    max-width: 450px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`

const MiniNewInfo = styled(Link)`
  transform: rotate(-2deg) scale(0.98);
  color: ${({ theme }) => theme.textColor};
  display: inline-block;
  height: 500px;
  transition: transform 0.3s ease;
  will-change: transform;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  :hover {
    transform: rotate(-1deg);
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
  @media (max-width: 960px) {
    position: relative;
    max-width: 450px;
    width: 100%;
    height: 100%;
    margin: 4rem 0;
    transform: rotate(-2deg);
  }
`

const NewPill = styled.span`
  float: left;
  color: ${({ theme }) => theme.invertedTextColor};
  background: ${({ theme }) => theme.newPill};
  padding: 0.15rem 0.75rem;
  border-radius: 0.5em;
  text-align: center;
  margin: 0;
  margin-right: 1rem;
  font-weight: 400;
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
    grid-template-columns: repeat(12,minmax(0,1fr));
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
  letter-spacing: -.025em;
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
margin-top: .75rem;
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

const StyledLeftItemRow = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 100%;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-left: 12px;
    }

  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
    justify-content: left;
  }
`

const StyledRight = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
  margin-top: 6rem;
  margin-bottom: -4rem;
  align-content: end;
  justify-items: end;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(12,minmax(0,1fr));
    grid-gap: 2rem;
    gap: 2rem;
    display: grid;
    padding: 2rem;
    margin-top: 6rem;
  }
`
const StyledRightImage = styled.div`
  position: absolute;
  right: 0px;
  width: 600px;
  padding: 50px;
  bottom: 0px;
  z-index: -1;
`

const StyledRightTitle = styled.div`
  display: flex;
  flex-direction: column;
  will-change: transform;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;
  grid-area: c;
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
    text-align: right;
}
@media (min-width: 1024px) {
  text-align: right;
  display: flex;
}
`

const StyledRightSubTitle = styled.h1`
  font-weight: 600;
  margin-top: 1.5rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  font-family: 'Kaushan Script';
  letter-spacing: -.025em;
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
    text-align: right;
  }
  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 1;
  }
`
const StyledRightSubText = styled.h2`
margin-top: .75rem;
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

const StyledRightItemRow = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 100%;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-left: 12px;
    }

  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
    justify-content: right;
  }
`

const IndexPage = props => {
  const isDark = useDarkMode()

  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    newYear: file(relativePath: { eq: "newyear.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    baoroadmap: file(relativePath: { eq: "baoroadmap.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    swap: file(relativePath: { eq: "swap.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    info: file(relativePath: { eq: "info.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    socks: file(relativePath: { eq: "socks.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sybil: file(relativePath: { eq: "sybil.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tokenlists: file(relativePath: { eq: "tokenlists.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mainnetfarms: file(relativePath: { eq: "mainnetfarms.png" }) {
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
    reddit: file(relativePath: { eq: "reddit.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
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
    thin: file(relativePath: { eq: "thin.png" }) {
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
    polygonfranchise: file(relativePath: { eq: "polygonfranchise.png" }) {
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
      <BGCard>
        <CardNoise />
        <CardBGImage isDark={isDark} />
        <CardFade />
      </BGCard>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'Like SNX and Aave, but use LP tokens for collateral.'}
      />
      <StyledLeft>
        <StyledLeftTitle>
          <StyledLeftSubTitle>Deliciously wrapped finance!</StyledLeftSubTitle>
          <StyledLeftSubText>
            Bao (包) stands for a treasure or package. Something wonderful that is wrapped up in another layer. Bao buns, or in Chinese Baozi (包子) are delicious wrapped dumplings.
            These bao buns are the tradition of taking something good that exists, and wrapping it up into being a new treasure.
            Bao Finance aims to do this by being a new protocol that adds features to existing DeFi systems.
          </StyledLeftSubText>
        </StyledLeftTitle>
      </StyledLeft>
      <FloatingImage />
      <StyledBody>
        <ProtocolData />
        <EcosystemSection data={data} props={props} />
        <RoadmapSection data={data} props={props} />
        <VisionSection data={data} props={props} />
        <FaqSection data={data} props={props} />
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
  margin-top: 5rem;
  font-weight: 600;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  font-family: 'Kaushan Script';
  letter-spacing: -.025em;
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

const RoadmapSection = props => {
  return (
    <>
      <StyledSectionTitle>Roadmap</StyledSectionTitle>
      <StyledBodySubText>
        Bao Finance is an open-source, fully community run project. Our native token, BAO, acts as a governance 
        token that puts control in the hands of our community, otherwise know as the BaoDao. 
      </StyledBodySubText>
      <RoadMap />
    </>
  )
}

const EcosystemSection = props => {
  return (
    <>
          <StyledSectionTitle>Crosschain DeFi Ecosystem</StyledSectionTitle>
      <StyledBodySubText>
      Bao is creating a multinetwork suite of applications that will provide services to DeFi users regardless 
      of their preferred chains. We’ve already deployed our main project and franchised versions of it on xDai, 
      Binance Smart Chain, and soon Polygon; with more planned in the future. 
      </StyledBodySubText>
      <StyledItemRow>
        <StyledExternalLink href={'https://mainnet.bao.finance'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.baoswap.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://xdai.bao.finance'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.xdaifarms.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://baoswap.xyz'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.mainnetfarms.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://pandaswap.xyz'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.pandaswap.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://sybil.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.polygonfranchise.childImageSharp.fluid} />
        </StyledExternalLink>
      </StyledItemRow>
    </>
  )
}

const VisionSection = props => {
  return (
    <>
<StyledSectionTitle>The Bao Vision of Finance</StyledSectionTitle>
<StyledBodyParagraph>
<p>Traditional finance doesn’t work. For too long it’s been serving the wealthy suits while erecting barriers of entry for everyone 
else. They own the data, restrict the tools, and change the rules to always be in their favor. It’s time to not only give that power 
back to the people, but to create even more powerful tools that the old cumbersome system could never dream of.</p>

<p>At Bao Finance, we’re building a community composed of brilliant minds all seeking control of their own finances and building a new 
system that works for everyone. Synthetic assets allow us to create financial instruments and markets never seen before. If the data 
exists, so too can a marketplace for it - the possibilities are endless.</p>

<p>It all comes down to data. Most people aren’t aware that financial data is what makes institutions so powerful and why you can’t do what 
they do. This is why synthetics will matter. If you can get liquidity in any discrete quantifiable event, what have you created? The world’s 
most accurate financial data system. Financial data is used within insurance, lending, hedge funds, risk mitigation, banking, yield, mortgages, 
credit scores, etc.</p>

<p>Incentivised synthetics allow you to start building an open financial data market. Once you have synthetics, you own the financial data 
stream to anything because you can incentivise liquidity to make it more accurate. With this financial data stream you can start any DeFi 
business you want on top of it, or package and sell the data for others to build on. You become the foundation for the future of finance.</p>

<p>We’re not looking for speculative investors, pump and dumpers, or idle participants. Our goal is to attract people who truly want to take 
the future of their personal finances into their own hands.</p>
</StyledBodyParagraph>
  </>
  )
}

const FaqSection = props => {
  return (
    <>
    <section className="faq-one">
      <div className="container">
        <div className="block-title text-center">
          <StyledSectionTitle>FAQ</StyledSectionTitle>
        </div>
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="What are synthetics?"
            content="Synthetic assets are an important part of a decentralized 
            ecosystem. They allow decentralized infrastructure to offer assets 
            that track the price of any system."
            status={true}
          />
          <AccordionItem
            title="How do they work?"
            content="Most people do not understand synthetics. They think that 
            derivatives are only good for synthetic stocks. They just want to buy 
            stocks like $APPL or $GME on the blockchain 24/7. While that is a good 
            part of synthetics, it is just replicating our existing market on the 
            blockchain. What is far more powerful and exciting is that with synthetics 
            we can do something new. With synthetics you can turn any quantifiable 
            discrete event into a financial feed that people can buy and sell. "
            status={false}
          />
          <AccordionItem
            title="What's the difference between soft and hard synthetics?"
            content="We use the terms soft synthetics and hard synthetics to refer 
            to two different types of synthetic asset. Soft synthetics are indexes. 
            Well known indexes in the space currently are DPI, Indexed.Finance and PieDao.
            Hard synthetics are synthetics assets that links price to data. That data 
            could itself be a price, like $TSLA stock price, the price of 1 once of gold, 
            or something more exotic like the number of goals Neymar Jr scores, rainfall 
            levels or crime rates etc. The value of the synthetic asset is backed by 
            collateral. in Bao's case, we will be focusing on allowing the use of LP tokens 
            as that collateral."
            status={false}
          />
          <AccordionItem
            title="How does Bao do synthetics differently?"
            content="Right now existing protocols for synthetics require you to put your assets 
            into a base token in order to collateralise the creation of your synthetic asset, 
            taking on risk and losing your exposure to the underlying assets of your choice.
            Instead of this, we are allowing users to use their LP tokens to create synthetic 
            assets, so they will still have their exposure to the underlying assets and the LP 
            fees from that trade pair. Despite these inefficiencies the market for synthetics on 
            Ethereum is already >$1B marketcap and >$1B TVL. We believe BAO will increase that 
            dramatically by making it practical to partake in synthetic asset creation."
            status={false}
          />
        </div>
      </div>
    </section>
    </>
  )
}

const ProductSection = props => {
  return (
    <>
      <StyledSectionTitle>Balancing, Automation, and Options</StyledSectionTitle>
      <StyledBodySubText>
      Our community wants to build innovative products on top of this cutting-edge technology and create 
      serious competition for the established giants – together. Goodbye Big Banks. <br />
      Hello BaoBanks. 
</StyledBodySubText>

<StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
  <Wizard />
</StyledSectionFlex>
  </>
  )
}