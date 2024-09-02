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
    name: 'SAFE Multisig',
    description:
      'Trust: The DAO of Bao operates based on the framework of a roadmap, the roadmap is passed as a proposal yearly and agreed upon by the community. Every Bao community member can opt to create a proposal.',
    icon: AutomatedIcon,
  },
  {
    name: 'Immunefi Bug Bounty Program',
    description:
      'Secure: Immunefi is a bug bounty and security services platform that protects crypto projects from Web3 bugs. This platform facilitates network hosting, bug triaging, and program management in the blockchain. It also offers smart contract projects that help to review code, disclose vulnerabilities, secures projects against malicious exploits, and preserves against undetermined attacks. Bao has been part of the Immunefi bug bounty program since 2021.',
    icon: CustomizableIcon,
  },
  {
    name: 'Github repositories',
    description:
      "Transparency: All of Bao's products once deployed are publicly available on our repository.",
    icon: YieldIcon,
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

export function Security() {
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
              Security and Trust
            </h1>
          </div>
          <p className="mt-2 text-lg text-baoWhite/80">
          Security is shaping the design of our products and governance. We look for decentralized assets as collaterals, use Best Practice in the development process, deploy audited smart contracts after extensive testing and run a bug bounty program on Immunefi. Every important decision is provided as BIP to the BAO community for approval. Our documentation is always kept up to date and we constantly monitor our products.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
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
