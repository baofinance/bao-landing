import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLineUp,
  faDroplet,
  faMoneyBill,
  faRobot,
  faScaleBalanced,
  faTools,
  faUserGroup,
} from '@fortawesome/pro-regular-svg-icons'
import { DiscordLink } from './DiscordLink'
import { SnapshotLink } from './SnapshotLink'
import { XLink } from './XLink'
import { DeBankLink } from './DeBankLink'
import styles from './SecondaryFeatures.module.css'

const features = [
  {
    name: 'Community Funded',
    description:
      'During our distribution phase, Bao raised funds from over 200 DeFi communities, freeing us from the shackles of Venture Capitalists primarily interested in extracting value.',
    icon: AutomatedIcon,
  },
  {
    name: 'Community Run',
    description:
      'We are run by our community, which controls all aspects of the project, from its core team and products to revenue distribution and tokenomics.',
    icon: CustomizableIcon,
  },
  {
    name: 'Grassroots',
    description:
      'Anyone can contribute to Bao&apos;s success. All of the core team were regular community members at one time. We are focused on mass participation from anyone who supports our mission.',
    icon: YieldIcon,
  },
  {
    name: 'Decentralization Maximalist',
    description:
      'Our products are designed with decentralization in mind. Without central points of failure, we are more resilient, censorship resistant, transparent, accessable, and adaptable.',
    icon: LiquidityIcon,
  },
]

function AutomatedIcon(props) {
  return (
    <div className={styles.iconWrapper}>
      <FontAwesomeIcon icon={faMoneyBill} color="#e53164" />
    </div>
  )
}

function CustomizableIcon(props) {
  return (
    <div className={styles.iconWrapper}>
      <FontAwesomeIcon icon={faTools} color="#e53164" />
    </div>
  )
}

function YieldIcon(props) {
  return (
    <div className={styles.iconWrapper}>
      <FontAwesomeIcon icon={faChartLineUp} color="#e53164" />
    </div>
  )
}

function LiquidityIcon(props) {
  return (
    <div className={styles.iconWrapper}>
      <FontAwesomeIcon icon={faDroplet} color="#e53164" />
    </div>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Decentralized"
      className={styles.secondaryFeatures}
    >
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>Join the rebeloution</h2>
          <div className={styles.banner}>
            <p className={styles.bannerText}>Dream and build with us!</p>
          </div>
          <p className={styles.subheading}>
            Get involved with Bao Finance&apos;s governance! Join our community
            on Discord for discussions and updates. Vote on key proposals on
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
              <feature.icon className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>{feature.name}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
