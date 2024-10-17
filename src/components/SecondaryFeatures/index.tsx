import React from 'react'
import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUsers,
  faHandshake,
  faSeedling,
  faNetworkWired,
} from '@fortawesome/pro-regular-svg-icons'
import { DiscordLink } from '../DiscordLink'
import { SnapshotLink } from '../SnapshotLink'
import { XLink } from '../XLink'
import { DeBankLink } from '../DeBankLink'

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
      "Anyone can contribute to Bao's success. All of the core team were regular community members at one time. We are focused on mass participation from anyone who supports our mission.",
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
      className="relative overflow-hidden bg-baoWhite py-24 text-baoBlack"
    >
      {/* Wave container */}
      <div className="absolute inset-0 h-full w-full">
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
              d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave-slower"
            ></path>
          </svg>
        </div>

        {/* Middle wave */}
        <div className="absolute inset-x-0 bottom-0 h-3/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.15"
              d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,202.7C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>

        {/* Top wave (lightest) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.1"
              d="M0,288L48,277.3C96,267,192,245,288,234.7C384,224,480,224,576,234.7C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
      </div>

      <Container>
        <div className="relative z-10 text-center">
          <h2 className="mb-4 font-bakbak text-[clamp(30px,8vw,100px)] font-bold uppercase leading-none">
            We need you
          </h2>
          <div className="flex justify-center">
            <div className="my-4 inline-block bg-baoPink px-8 py-2">
              <p className="whitespace-nowrap text-[clamp(14px,1.5vw,20px)] font-bold uppercase text-baoWhite">
                Calling all rebels, builders and dreamers
              </p>
            </div>
          </div>
          <p className="mx-auto my-8 max-w-3xl text-[clamp(14px,1.5vw,22px)]">
            Get involved with Bao Finance&apos;s governance! Join our community
            on Discord for discussions and updates. Vote on key proposals on
            Snapshot and stay informed on X. Your participation is crucial.
          </p>
          <div className="mb-14 flex justify-center gap-4">
            <DiscordLink />
            <SnapshotLink />
            <XLink />
            <DeBankLink />
          </div>
        </div>
        <ul className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <li
              key={feature.name}
              className="bg-opacity-97 relative flex flex-col items-center rounded-lg bg-baoBlack p-8 pt-16 text-center text-baoWhite transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-baoPink/15"
            >
              <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-baoPink">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-3xl text-baoWhite"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold">{feature.name}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>

      <style jsx>{`
        @keyframes waveAnimation {
          0% {
            d: path(
              M0,
              288L48,
              277.3C96,
              267,
              192,
              245,
              288,
              234.7C384,
              224,
              480,
              224,
              576,
              234.7C672,
              245,
              768,
              267,
              864,
              261.3C960,
              256,
              1056,
              224,
              1152,
              213.3C1248,
              203,
              1344,
              213,
              1392,
              218.7L1440,
              224L1440,
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
              256L48,
              245.3C96,
              235,
              192,
              213,
              288,
              202.7C384,
              192,
              480,
              192,
              576,
              202.7C672,
              213,
              768,
              235,
              864,
              229.3C960,
              224,
              1056,
              192,
              1152,
              181.3C1248,
              171,
              1344,
              181,
              1392,
              186.7L1440,
              192L1440,
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
              288L48,
              277.3C96,
              267,
              192,
              245,
              288,
              234.7C384,
              224,
              480,
              224,
              576,
              234.7C672,
              245,
              768,
              267,
              864,
              261.3C960,
              256,
              1056,
              224,
              1152,
              213.3C1248,
              203,
              1344,
              213,
              1392,
              218.7L1440,
              224L1440,
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
          animation: waveAnimation 18s ease-in-out infinite;
        }
        .animate-wave-slower {
          animation: waveAnimation 21s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
