import React from 'react'
import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUsers,
  faHandshake,
  faSeedling,
  faNetworkWired,
} from '@fortawesome/pro-regular-svg-icons'
import { DiscordLink } from './DiscordLink'
import { SnapshotLink } from './SnapshotLink'
import { XLink } from './XLink'
import { DeBankLink } from './DeBankLink'
import styles from './SecondaryFeatures.module.css'
import { TwinklingBackground } from './TwinklingBackground'

const features = [
  {
    name: 'Community Funded',
    description:
      'During our distribution phase, Bao raised funds from over 200 DeFi communities, freeing us from the shackles of Venture Capitalists primarily interested in extracting value.',
    icon: faHandshake,
  },
  {
    name: 'Community Run',
    description:
      'We are run by our community, which controls all aspects of the project, from its core team and products to revenue distribution and tokenomics.',
    icon: faUsers,
  },
  {
    name: 'Grassroots',
    description:
      'Anyone can contribute to Bao&apos;s success. All of the core team were regular community members at one time. We are focused on mass participation from anyone who supports our mission.',
    icon: faSeedling,
  },
  {
    name: 'Decentralization Maximalist',
    description:
      'Our products are designed with decentralization in mind. Without central points of failure, we are more resilient, censorship resistant, transparent, accessable, and adaptable.',
    icon: faNetworkWired,
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Decentralized"
      className={styles.secondaryFeatures}
    >
      <TwinklingBackground
        color="rgba(30, 32, 34, 0.1)"
        squareSize={20}
        coverage={0.4}
      />
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>Join the rebeloution</h2>
          <div className={styles.banner}>
            <p className={styles.bannerText}>
              We need dreamers, we need builders.
            </p>
          </div>
          <p className={styles.subheading}>
            Get involved with Bao Finance's governance! Join our community on
            Discord for discussions and updates. Vote on key proposals on
            Snapshot and stay informed on X. Your participation is crucial.
          </p>
          <div className={styles.links}>
            <DiscordLink color="white" />
            <SnapshotLink color="white" />
            <XLink color="white" />
            <DeBankLink color="white" />
          </div>
        </div>
        <ul className={styles.featureList}>
          {features.map((feature) => (
            <li key={feature.name} className={styles.featureItem}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={feature.icon} className={styles.icon} />
              </div>
              <h3 className={styles.featureTitle}>{feature.name}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
