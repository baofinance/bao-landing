import React from 'react'
import Image from 'next/image'
import { Button } from '../Button'

const integrations = [
  { name: 'Balancer', logo: '/integrations/balancer.svg' },
  { name: 'Chainlink', logo: '/integrations/chainlink.svg' },
  { name: 'The Graph', logo: '/integrations/the-graph.svg' },
  { name: 'Immunefi', logo: '/integrations/immunefi.svg' },
  { name: 'Lido', logo: '/integrations/lido.svg' },
  { name: 'Liquity', logo: '/integrations/liquity.svg' },
  { name: 'Paladin', logo: '/integrations/paladin.svg' },
  { name: 'Rocket Pool', logo: '/integrations/rocket-pool.svg' },
  { name: 'StakeDAO', logo: '/integrations/stakedao.svg' },
  { name: 'Uniswap', logo: '/integrations/uniswap.svg' },
]

export function Integrations() {
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
        <h2 className="mb-12 text-center font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoWhite">
          ♥ INTEGRATED WITH THE BEST ♥
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-16 w-32">
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="mt-2 text-center text-sm">{integration.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="mb-8 text-xl font-semibold">
            Rocket Pool integration offers decentralized Ethereum staking,
            expanding the range of staking options available to Bao users.
          </p>
          <Button variant="solid" color="baoPink" href="#" className="text-lg">
            Work with BAO
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
