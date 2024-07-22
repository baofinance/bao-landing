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

const features = [
  {
    name: 'VC Free',
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
      "Anyone can contribute to Bao's success. All of the core team were regular community members at one time. We are focused on mass participation from anyone who supports our mission.",
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
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <FontAwesomeIcon
        height={32}
        width={32}
        icon={faMoneyBill}
        color="#e53164"
      />
      <circle cx={16} cy={16} r={16} className="fill-baoRed/20" />
    </svg>
  )
}

function BalanceIcon(props) {
  return (
    <>
      <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
        <FontAwesomeIcon
          height={32}
          width={32}
          icon={faScaleBalanced}
          color="#e53164"
        />
        <circle cx={16} cy={16} r={16} className="fill-baoRed/20" />
      </svg>
    </>
  )
}

function CustomizableIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <FontAwesomeIcon height={32} width={32} icon={faTools} color="#e53164" />
      <circle cx={16} cy={16} r={16} className="fill-baoRed/20" />
    </svg>
  )
}

function YieldIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <FontAwesomeIcon
        height={32}
        width={32}
        icon={faChartLineUp}
        color="#e53164"
      />
      <circle cx={16} cy={16} r={16} className="fill-baoRed/20" />
    </svg>
  )
}

function GovernanceIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <FontAwesomeIcon icon={faUserGroup} color="#e53164" />
      <circle cx={16} cy={16} r={16} className="fill-baoRed/20" />
    </svg>
  )
}

function LiquidityIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <FontAwesomeIcon
        height={32}
        width={32}
        color="#e53164"
        icon={faDroplet}
      />
      <circle cx={16} cy={16} r={16} className="fill-baoRed/20" />
    </svg>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Decentralized"
      className="py-12"
    >
      <Container>
        <div className="">
          <h1 className="inline-block font-bakbak text-xl tracking-tight text-baoRed"></h1>
          <div className=" max-w-3xl">
            <h1 className="inline-block font-bakbak text-6xl tracking-tight text-baoWhite">
              BAO Governance
            </h1>
          </div>
          <p className="mt-2 text-lg text-baoWhite/80">
            Get involved with Bao Finance's governance! Join our community on
            Discord for discussions and updates. Vote on key proposals on
            Snapshot and stay informed on X. Your participation is crucial.
          </p>
          <div className="flex flex-wrap gap-2 lg:mt-4">
            <DiscordLink color="white" />
            <SnapshotLink color="white" />
            <XLink color="white" />
            <DeBankLink color="white" />
          </div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 md:gap-y-10 lg:max-w-none lg:grid-cols-2"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-bakbak text-lg text-baoWhite">
                {feature.name}
              </h3>
              <p className="mt-2 text-baoWhite/80">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
