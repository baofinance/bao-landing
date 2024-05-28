import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLineUp,
  faDroplet,
  faRobot,
  faScaleBalanced,
  faTools,
  faUserGroup
} from '@fortawesome/pro-regular-svg-icons'

const features = [
  {
    name: 'Automated Strategies',
    description:
      'Bao products leverage sophisticated automated strategies to generate optimal yield, ensuring efficient deployment of your assets.',
    icon: AutomatedIcon
  },
  {
    name: 'Innovative Synthetics',
    description:
      'Bao products feature advanced synthetic assets that mirror underlying asset performance, allowing users to diversify portfolios and hedge risks without holding actual assets. Enjoy reliable, tech-driven exposure to various markets.',
    icon: BalanceIcon
  },
  {
    name: 'Customizable Options',
    description:
      'Vaults provide users with the flexibility to mint and trade synthetics, tailoring their exposure to specific data points or price movements.',
    icon: CustomizableIcon
  },
  {
    name: 'Yield Maximization',
    description:
      'Through innovative strategies, Bao products maximize yield by compounding rewards and leveraging opportunities across various protocols.',
    icon: YieldIcon
  },
  {
    name: 'Governance Participation',
    description:
      'Bao token holders gain the ability to participate in the governance process, shaping the future of the platform and influencing key decisions.',
    icon: GovernanceIcon
  },
  {
    name: 'Enhanced Liquidity',
    description:
      'Bao products aim to provide increased liquidity to the market, allowing users to access and trade assets more efficiently and effectively.',
    icon: LiquidityIcon
  }
]

function AutomatedIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <FontAwesomeIcon height={32} width={32} icon={faRobot} color="#e53164" />
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
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl sm:text-center">
          <h1 className="mr-2 inline-block font-bakbak text-4xl tracking-tight text-baoWhite">
            Unleashing Innovation.
          </h1>
          <p className="mt-2 text-lg text-baoWhite/80">
            Our community wants to build innovative products on top of the
            network's cutting-edge technology and create serious competition for
            the established giants – together.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map(feature => (
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
