import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '../Button'

const integrations = [
  {
    name: 'Aura',
    logo: '/images/logos/Aura.avif',
    description:
      'Aura Finance enhances liquidity provision and rewards for BAO token holders.',
  },
  {
    name: 'Balancer',
    logo: '/images/logos/Balncer.png',
    description:
      'Balancer integration allows for efficient liquidity provision and trading of BAO tokens.',
  },
  {
    name: 'Chainlink',
    logo: '/images/logos/chainlink.jpg',
    description:
      'Chainlink oracles provide reliable and decentralized price feeds for BAO derivatives.',
  },
  {
    name: 'Immunefi',
    logo: '/images/logos/immunefi.jpg',
    description:
      'Immunefi partnership enhances security through bug bounty programs.',
  },
  {
    name: 'Lido',
    logo: '/images/logos/lido.jpg',
    description:
      'stETH was chosen by our community to be integrated as collateral for our derivatives after passing risk assessments with flying colors.',
  },
  {
    name: 'Liquity',
    logo: '/images/logos/liquity.jpg',
    description:
      'LUSD from Liquity is the gold standard for decentralized stablecoins and as a result was chosen by our community to be integrated as derivative backing collateral.',
  },
  {
    name: 'Paladin',
    logo: '/images/logos/paladin.jpg',
    description:
      'Paladin provides a marketplace to boost rewards for Bao liquidity providers.',
  },
  {
    name: 'Rocket Pool',
    logo: '/images/logos/rocketpool.jpg',
    description:
      'rETH was chosen by our community to be integrated as collateral for our derivatives after passing risk assessments with flying colors.',
  },
  {
    name: 'Safe',
    logo: '/images/logos/safe.jpg',
    description:
      'Safe (formerly Gnosis Safe) provides secure multi-signature wallet functionality for BAO.',
  },
  {
    name: 'StakeDAO',
    logo: '/images/logos/stakedao.jpg',
    description:
      'StakeDAO collaboration provides additional yield strategies for BAO token holders.',
  },
]

const DISCORD_INVITE_LINK = 'https://discord.gg/BW3P62vJXT'

export function Integrations() {
  const [hoveredIntegration, setHoveredIntegration] = useState(integrations[0])

  const getLogoScale = (name: string) => {
    const zoomOutMoreLogos = ['Balancer', 'StakeDAO']
    const zoomOutLogos = ['Aura', 'Safe', 'Lido']

    if (zoomOutMoreLogos.includes(name)) {
      return 'scale-110'
    } else if (zoomOutLogos.includes(name)) {
      return 'scale-125'
    } else {
      return 'scale-150'
    }
  }

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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoWhite">
          INTEGRATED
        </h2>
        <div className="mb-12 text-center">
          <div className="inline-block bg-baoPink px-4 py-2">
            <p className="text-center font-bakbak text-[clamp(16px,1.8vw,22px)] uppercase text-baoWhite">
              WITH THE BEST
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-8 flex flex-wrap justify-center gap-8">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className={`flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ${
                  hoveredIntegration.name === integration.name
                    ? 'scale-110'
                    : 'hover:scale-105'
                }`}
                onMouseEnter={() => setHoveredIntegration(integration)}
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-baoWhite">
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    layout="fill"
                    objectFit="cover"
                    className={getLogoScale(integration.name)}
                  />
                </div>
                <p className="mt-2 text-center text-sm">{integration.name}</p>
              </div>
            ))}
          </div>
          <div className="relative flex flex-col rounded-lg bg-baoBlack p-8 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-4 font-bakbak text-2xl font-bold text-baoWhite">
              {hoveredIntegration.name}
            </h3>
            <p className="mb-8 text-lg text-baoWhite">
              {hoveredIntegration.description}
            </p>
            <Button
              variant="solid"
              color="baoPink"
              href="#"
              className="self-center text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Add the tagline and "Integrate Your Project" button */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-xl font-semibold text-baoWhite">
            Join us building a better future
          </p>
          <Button
            variant="solid"
            color="baoPink"
            href={DISCORD_INVITE_LINK}
            className="text-lg"
          >
            Integrate Your Project
          </Button>
        </div>
      </div>

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

export default Integrations
