import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import '../styles/verticaltimeline.css'
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
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>Deploy Bao Markets</RoadmapHeader>
        <RoadmapSubHeader>Hard Synthetics</RoadmapSubHeader>
        <RoadmapDesc>
          Our intial deployment of Bao Markets will feature our first hard synth, baoUSD, a multi-collateralized
          stablecoin.
        </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>Deploy Bao Baskets</RoadmapHeader>
        <RoadmapSubHeader>Soft Synthetics</RoadmapSubHeader>
        <RoadmapDesc>
          Bao Baskets will be similar to our Polly Nests, but will feature the gas saving feature from PieDAO, the oven!
        </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>Bao Baskets as Collateral for baoUSD</RoadmapHeader>
        <RoadmapSubHeader>Product Synergy</RoadmapSubHeader>
        <RoadmapDesc>
          Using Bao Baskets as collateral for baoUSD, and future synthetics, allows users to leverage yield bearing
          assets as collateral to mint synthetics.
        </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>Token Migration</RoadmapHeader>
        <RoadmapSubHeader>BAOv2</RoadmapSubHeader>
        <RoadmapDesc>
          We will migrate to a new token contract to alleviate some of the issues that our v1 contract presented.
        </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>veBAO and Staking</RoadmapHeader>
        <RoadmapSubHeader>Improved Distribution Model and Rewards</RoadmapSubHeader>
        <RoadmapDesc>
          veBAO will introduce a new rewards mechanic that will incentivize users to lock their tokens for extended
          periods of time. All rewards will go through veBAO.
        </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>Basket Strategies</RoadmapHeader>
        <RoadmapSubHeader>New Strategies and Integrations</RoadmapSubHeader>
        <RoadmapDesc>
          We will focus on developing new strategies and integrations for our Bao Baskets so that we can maximize yield
          and diversify exposure.
        </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>Improve Hard Synths</RoadmapHeader>
        <RoadmapSubHeader>New Synth and More Collateral Types</RoadmapSubHeader>
        <RoadmapDesc>Develop a new syntehtic for Bao Markets as well as introduce more collateral types.</RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>Improved Governance</RoadmapHeader>
        <RoadmapSubHeader>On-chain Governance</RoadmapSubHeader>
        <RoadmapDesc>
          Implement Governance Bravo. Governance Bravo is the governance system developed and used by Compound Protocol.
        </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>Deploy Hard Synths on Polly</RoadmapHeader>
        <RoadmapSubHeader>Polygon Franchise</RoadmapSubHeader>
        <RoadmapDesc>Deploy our hard synth market to our Polly franchise on Polygon.</RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>Phase 1 of Permissionless Baskets</RoadmapHeader>
        <RoadmapSubHeader>Build Your Own Basket</RoadmapSubHeader>
        <RoadmapDesc>
          Our soft synths, Baskets and Nests, will become a permissionless platform over time. Users will have the
          ability to create their own Basket compositions, as well as choose custom strategies for them. Phase 1 will
          allow users to create their own Baskets and choose from a predetermined list of strategies.
        </RoadmapDesc>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <RoadmapHeader>Bao Labs</RoadmapHeader>
        <RoadmapSubHeader>New Galaxy</RoadmapSubHeader>
        <RoadmapDesc>
          Bao Labs will be a galaxy with the sole function of researching and developing new synthetic assets for our
          Bao Markets.
        </RoadmapDesc>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default RoadMap
