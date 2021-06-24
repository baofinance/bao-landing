import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../styles/verticaltimeline.css';
import Bao from '../images/bao.inline.svg'
import styled from 'styled-components'

const StyledBao = styled(Bao)`
  margin: 0;
  width: 32px;
  height: 32px;
  margin-right: 0.35rem;
  margin-top: -4px;
  transform: rotate(0deg);
  transition: transform 0.2s linear;
  :hover {
    transform: rotate(-10deg);
  }
`

const RoadmapHeader = styled.h3`
color: #50251c;
margin: 0;
`

const RoadmapSubHeader = styled.h4`
color: #ce6509;
margin: 0;
`

const RoadmapDesc = styled.p`
color: #50251c;
`


const RoadMap = () => {
  return (

    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
      >
        <RoadmapHeader>Bao.Finance Launches</RoadmapHeader>
        <RoadmapSubHeader>Ethereum Mainnet</RoadmapSubHeader>
        <RoadmapDesc>
          Bao.Finance launches on Ethereum Mainnet.
      </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Q4 2020"
      >
        <RoadmapHeader>Phase 1 of Token Distribution</RoadmapHeader>
        <RoadmapSubHeader>Yield Farming Begins</RoadmapSubHeader>
        <RoadmapDesc>
          During the yield farming phase, users will earn rewards each block for staking their LP tokens in the Bao.Finance farming protocol.
          During this one year period we will distribute 800 billion bao.
          BAO has a broad distribution, rewarding over 200 market assets creating the most diverse yield farming distribution in history so that everyone can participate with minimal risk of monopolies.
      </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Q1 2021"
      >
        <RoadmapHeader>xDai Migration, BaoSwap & Co</RoadmapHeader>
        <RoadmapSubHeader>L2 Deployment & Franchise Announcement</RoadmapSubHeader>
        <RoadmapDesc>
          BaoSwap launches on xDai sidechain along with the ability to yield farm with BaoSwap or Sushiswap LP tokens.
          Bao.Finance franchises announced. Alphas realeased for PandaSwap on BSC and YetiSwap on AVAX, with plans for additional franchises in the future.
      </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Q2 2021"
      >
        <RoadmapHeader>Bao Baskets & Soft Synthetics</RoadmapHeader>
        <RoadmapSubHeader>Soft Synthetics Launch on xDai</RoadmapSubHeader>
        <RoadmapDesc>
          Bao Baskets will provide us balancer tooling for future synthetics, but we’ll also use this opportunity to launch “Soft Synthetics”.
          Bao Baskets will be configured pools of assets where users are able to get balanced exposure to a “basket“ of assets by holding one LP token.
          This will be futher incentivized with yield farming opportunities.
      </RoadmapDesc>
        <RoadmapDesc>
          Additional Bao franchises will launch on other EVM compatiable chains.
          Franchises provide an opportunity to capture new liquidity and value for the Bao ecosystem without adding extra overhead and without competing with our partners.
          Bao’s xDAI ecosystem will still be our primary and top priority.
      </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Q3 2021"
      >
        <RoadmapHeader>Full Synthetics</RoadmapHeader>
        <RoadmapSubHeader>Full Synthetics Launch</RoadmapSubHeader>
        <RoadmapDesc>
          Full Synthetics launch on xDai based BaoSwap LP tokens, Ethereum Mainnet based on Sushiswap LP tokens, and other EVM compatiable networks based on their respective LP tokens.
      </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date=""
      /* icon={<StyledBao />} */
      >
        <RoadmapHeader>Future Plans</RoadmapHeader>
        <RoadmapSubHeader>Planned Features</RoadmapSubHeader>
        <RoadmapDesc>
          Margin trading and limit orders based on staked LP tokens.
      </RoadmapDesc>
        <RoadmapDesc>
          Lending pools using LP tokens as colateral.
      </RoadmapDesc>
        <RoadmapDesc>
          Options/Perpetual Futures based on staked LP tokens.
      </RoadmapDesc>
        <RoadmapDesc>
          Auto-balancer systems so users can balance their synthetic assets, futures, and LP tokens.
      </RoadmapDesc>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default RoadMap;