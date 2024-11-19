import React from 'react'
import Image from 'next/image'
import {
  FaShieldAlt,
  FaLock,
  FaBalanceScale,
  FaChartLine,
} from 'react-icons/fa'
import { Container } from '../Container'
import { faShieldCheck } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const securityFeatures = [
  {
    icon: FaShieldAlt,
    title: 'Audits',
    description: (
      <div className="flex flex-col items-center gap-4">
        <p>
          Our contracts are built on battle-tested foundations from industry
          leaders like Compound, Inverse, and Curve. Each implementation is
          thoroughly reviewed by the Immunefi white hat community, ensuring the
          highest standards of security through continuous monitoring and
          auditing.
        </p>
        <div className="flex items-center gap-4">
          <Image
            src="/images/logos/immunefi.svg"
            alt="Immunefi Logo"
            width={120}
            height={24}
            className="invert"
          />
        </div>
      </div>
    ),
  },
  {
    icon: FaLock,
    title: 'Collateral',
    description:
      'Bao only allows ETH and ETH-backed tokens with the highest decentralization standards. Approved backing assets include ETH, wstETH, rETH, and LUSD. All new collaterals undergo a rigorous risk assessment process.',
  },
  {
    icon: FaBalanceScale,
    title: 'Decentralization',
    description:
      'While there are some centralized aspects initially, with multi-sigs controlling various parameters, we are actively working on removing trust and will not stop until the protocol is completely trustless.',
  },
  {
    icon: FaChartLine,
    title: 'Pegging',
    description:
      'baoUSD and baoETH maintain strong pegs through various mechanisms including variable borrow rates, Liquidity Balancers, and redeemability (coming soon with the Minter).',
  },
]

export function Security() {
  return (
    <section className="relative overflow-hidden bg-baoBlack py-24 text-baoWhite">
      {/* Animated waves background */}
      <div className="absolute inset-0 h-full w-full">
        {/* Top wave (darkest) */}
        <div className="absolute inset-x-0 top-0 h-2/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.08"
              d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,128C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              className="animate-wave-slower"
            ></path>
          </svg>
        </div>

        {/* Middle wave */}
        <div className="absolute inset-x-0 top-0 h-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.05"
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>

        {/* Bottom wave (lightest) */}
        <div className="absolute inset-x-0 top-0 h-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.03"
              d="M0,288L60,277.3C120,267,240,245,360,234.7C480,224,600,224,720,234.7C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
      </div>

      <Container>
        <div className="relative z-10 text-center">
          <h2 className="mb-4 text-center font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoWhite">
            SECURE
          </h2>
          <div className="mb-8 inline-block bg-baoPink px-4 py-2">
            <p className="font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoWhite">
              BY DESIGN
            </p>
          </div>

          {/* Updated grid layout to make boxes wider */}
          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center rounded-lg bg-baoBlack p-8 text-center shadow-lg outline outline-1 outline-baoWhite/20"
              >
                <feature.icon className="mb-4 text-4xl text-baoPink" />
                <h3 className="mb-4 text-xl font-bold">{feature.title}</h3>
                <div className="text-sm opacity-80">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes waveAnimation {
          0% {
            d: path(
              M0,
              288L60,
              277.3C120,
              267,
              240,
              245,
              360,
              234.7C480,
              224,
              600,
              224,
              720,
              234.7C840,
              245,
              960,
              267,
              1080,
              261.3C1200,
              256,
              1320,
              224,
              1380,
              208L1440,
              192L1440,
              0L1380,
              0C1320,
              0,
              1200,
              0,
              1080,
              0C960,
              0,
              840,
              0,
              720,
              0C600,
              0,
              480,
              0,
              360,
              0C240,
              0,
              120,
              0,
              60,
              0L0,
              0Z
            );
          }
          50% {
            d: path(
              M0,
              256L60,
              245.3C120,
              235,
              240,
              213,
              360,
              202.7C480,
              192,
              600,
              192,
              720,
              202.7C840,
              213,
              960,
              235,
              1080,
              229.3C1200,
              224,
              1320,
              192,
              1380,
              176L1440,
              160L1440,
              0L1380,
              0C1320,
              0,
              1200,
              0,
              1080,
              0C960,
              0,
              840,
              0,
              720,
              0C600,
              0,
              480,
              0,
              360,
              0C240,
              0,
              120,
              0,
              60,
              0L0,
              0Z
            );
          }
          100% {
            d: path(
              M0,
              288L60,
              277.3C120,
              267,
              240,
              245,
              360,
              234.7C480,
              224,
              600,
              224,
              720,
              234.7C840,
              245,
              960,
              267,
              1080,
              261.3C1200,
              256,
              1320,
              224,
              1380,
              208L1440,
              192L1440,
              0L1380,
              0C1320,
              0,
              1200,
              0,
              1080,
              0C960,
              0,
              840,
              0,
              720,
              0C600,
              0,
              480,
              0,
              360,
              0C240,
              0,
              120,
              0,
              60,
              0L0,
              0Z
            );
          }
        }
        .animate-wave {
          animation: waveAnimation 15s ease-in-out infinite;
        }
        .animate-wave-slow {
          animation: waveAnimation 20s ease-in-out infinite;
        }
        .animate-wave-slower {
          animation: waveAnimation 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Security
