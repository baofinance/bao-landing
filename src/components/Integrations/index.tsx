import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '../Button'

const DISCORD_INVITE_LINK = 'https://discord.gg/BW3P62vJXT'

const partners = [
  {
    name: 'Balancer',
    logo: '/images/logos/Balancer.webp',
    description:
      'Bao uses Balancer for liquidity provision and AMM functionality, allowing users to trade baoUSD and baoETH efficiently.',
  },
  {
    name: 'Chainlink',
    logo: '/images/logos/chainlink.webp',
    description:
      "Chainlink oracles are used to provide accurate and tamper-proof price feeds for Bao's tokenized derivatives.",
  },
  {
    name: 'The Graph',
    logo: '/images/logos/Graph.webp',
    description:
      'The Graph is used to index and query blockchain data, providing efficient access to Bao protocol information.',
  },
  {
    name: 'Immunefi',
    logo: '/images/logos/immunefi.svg',
    description:
      'Immunefi provides a bug bounty platform to help secure the Bao protocol and protect user funds.',
  },
  {
    name: 'Lido',
    logo: '/images/logos/Lido_DAO.webp',
    description:
      'Lido collaboration provides liquid staking solutions, enhancing staking opportunities for Bao users.',
  },
  {
    name: 'Liquity',
    logo: '/images/logos/Liquity.webp',
    description:
      'Liquity provides a decentralized borrowing protocol that Bao integrates with for additional stability and liquidity options.',
  },
  {
    name: 'Paladin',
    logo: '/images/logos/paladin.webp',
    description:
      'Paladin integration offers advanced options for governance token lending and borrowing within the Bao ecosystem.',
  },
  {
    name: 'Rocket Pool',
    logo: '/images/logos/rocketPool.webp',
    description:
      'Rocket Pool integration offers decentralized Ethereum staking, expanding the range of staking options available to Bao users.',
  },
  {
    name: 'StakeDAO',
    logo: '/images/logos/stakedao.webp',
    description:
      'StakeDAO collaboration enhances yield farming opportunities and governance for Bao users.',
  },
  {
    name: 'Uniswap',
    logo: '/images/logos/uniswap.webp',
    description:
      "Uniswap provides additional liquidity and trading options for BAO tokens and Bao's synthetic assets.",
  },
]

export function Integrations() {
  const [activePartner, setActivePartner] = useState(partners[0])

  return (
    <section className="relative overflow-hidden bg-baoWhite py-24 text-baoBlack">
      {/* Bottom wave (darkest) */}
      <div className="absolute inset-x-0 bottom-0 h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#e23a52"
            fillOpacity="0.2"
            d="M0,32L48,53.3C96,75,192,117,288,138.7C384,160,480,160,576,138.7C672,117,768,75,864,64C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave-slower"
          ></path>
        </svg>
      </div>

      {/* Middle wave */}
      <div className="absolute inset-x-0 bottom-0 h-5/6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#e23a52"
            fillOpacity="0.15"
            d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,117.3C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave-slow"
          ></path>
        </svg>
      </div>

      {/* Top wave (lightest) */}
      <div className="absolute inset-x-0 bottom-0 h-3/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#e23a52"
            fillOpacity="0.1"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,133.3C672,128,768,160,864,165.3C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <h2 className="mb-12 text-center font-bakbak text-[clamp(30px,6vw,80px)] font-bold leading-tight">
          <span className="align-middle text-[0.5em] text-baoPink">♥</span>{' '}
          INTEGRATED WITH THE BEST{' '}
          <span className="align-middle text-[0.5em] text-baoPink">♥</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex cursor-pointer items-center justify-center bg-baoBlack bg-opacity-10 p-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
                onMouseEnter={() => setActivePartner(partner)}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={100}
                  height={100}
                  className="h-auto max-w-full"
                  onError={(e) => {
                    e.currentTarget.src = '/images/logos/placeholder.svg'
                    e.currentTarget.alt = `${partner.name} logo (placeholder)`
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div
              className="bg-baoBlack p-8 text-baoWhite"
              style={{ minHeight: '300px' }}
            >
              <h3 className="mb-4 font-bakbak text-3xl">
                {activePartner.name}
              </h3>
              <p className="text-base leading-relaxed">
                {activePartner.description}
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <Button
                variant="solid"
                color="baoPink"
                href={DISCORD_INVITE_LINK}
                className="text-xl"
              >
                Work with BAO
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes waveAnimation {
          0% {
            d: path(
              M0,
              160L48,
              170.7C96,
              181,
              192,
              203,
              288,
              192C384,
              181,
              480,
              139,
              576,
              133.3C672,
              128,
              768,
              160,
              864,
              165.3C960,
              171,
              1056,
              149,
              1152,
              144C1248,
              139,
              1344,
              149,
              1392,
              154.7L1440,
              160L1440,
              320L1392,
              320C1344,
              320,
              1248,
              320,
              1152,
              320C1056,
              320,
              960,
              320,
              864,
              320C768,
              320,
              672,
              320,
              576,
              320C480,
              320,
              384,
              320,
              288,
              320C192,
              320,
              96,
              320,
              48,
              320L0,
              320Z
            );
          }
          50% {
            d: path(
              M0,
              128L48,
              138.7C96,
              149,
              192,
              171,
              288,
              160C384,
              149,
              480,
              107,
              576,
              101.3C672,
              96,
              768,
              128,
              864,
              133.3C960,
              139,
              1056,
              117,
              1152,
              112C1248,
              107,
              1344,
              117,
              1392,
              122.7L1440,
              128L1440,
              320L1392,
              320C1344,
              320,
              1248,
              320,
              1152,
              320C1056,
              320,
              960,
              320,
              864,
              320C768,
              320,
              672,
              320,
              576,
              320C480,
              320,
              384,
              320,
              288,
              320C192,
              320,
              96,
              320,
              48,
              320L0,
              320Z
            );
          }
          100% {
            d: path(
              M0,
              160L48,
              170.7C96,
              181,
              192,
              203,
              288,
              192C384,
              181,
              480,
              139,
              576,
              133.3C672,
              128,
              768,
              160,
              864,
              165.3C960,
              171,
              1056,
              149,
              1152,
              144C1248,
              139,
              1344,
              149,
              1392,
              154.7L1440,
              160L1440,
              320L1392,
              320C1344,
              320,
              1248,
              320,
              1152,
              320C1056,
              320,
              960,
              320,
              864,
              320C768,
              320,
              672,
              320,
              576,
              320C480,
              320,
              384,
              320,
              288,
              320C192,
              320,
              96,
              320,
              48,
              320L0,
              320Z
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

export default Integrations
