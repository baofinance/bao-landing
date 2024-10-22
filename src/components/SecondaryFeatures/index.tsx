import React from 'react'
import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandshake,
  faSeedling,
  faNetworkWired,
  faLock,
  faCoins,
} from '@fortawesome/pro-regular-svg-icons'
import { DiscordLink } from '../DiscordLink'
import { SnapshotLink } from '../SnapshotLink'
import { XLink } from '../XLink'
import { DeBankLink } from '../DeBankLink'
import { Button } from '../Button'
import Image from 'next/image'

const features = [
  {
    name: 'Community Funded',
    description:
      'During our distribution phase, Bao raised funds from over 200 DeFi communities, freeing us from the shackles of Venture Capitalists primarily interested in extracting value.',
    icon: faHandshake,
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
      'Our products are designed with decentralization in mind. Without central points of failure, we are more resilient, censorship resistant, transparent, accessible, and adaptable.',
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
              d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,128C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="animate-wave-slower"
            ></path>
          </svg>
        </div>

        {/* Middle wave */}
        <div className="absolute inset-x-0 bottom-0 h-4/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.15"
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>

        {/* Top wave (lightest) */}
        <div className="absolute inset-x-0 bottom-0 h-3/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.1"
              d="M0,288L60,277.3C120,267,240,245,360,234.7C480,224,600,224,720,234.7C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
      </div>

      <Container>
        <div className="relative z-10 text-center">
          <h2 className="mb-4 text-center font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoBlack">
            JOIN THE DUMPLING REVOLUTION
          </h2>
          <p className="mb-12 text-center font-bakbak text-[clamp(16px,1.8vw,22px)] uppercase text-baoBlack">
            Calling all rebels, builders and dreamers
          </p>

          {/* Community, Grassroots, Decentralization boxes */}
          <ul className="relative z-10 mb-14 mt-16 grid gap-8 sm:grid-cols-3">
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

          {/* BAO Token Section with pulsing background and spotlight effect */}
          <div className="relative mb-14">
            <div className="relative overflow-hidden rounded-lg bg-baoPink/90 p-8 text-baoWhite outline outline-4 outline-baoBlack">
              {/* Spotlight effect */}
              <div className="spotlight-effect absolute inset-0"></div>

              {/* Pulsing background */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid h-full w-full grid-cols-5 gap-4">
                  {[...Array(25)].map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src="/images/logos/logo-white-outline.svg"
                        alt="BAO Logo Pattern"
                        width={70}
                        height={70}
                        className="animate-pulse-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-8 inline-block bg-baoWhite/95 px-8 py-2">
                  <h3 className="text-center font-bakbak text-[clamp(18px,2.5vw,24px)] font-bold uppercase text-baoBlack">
                    THE BAO TOKEN
                  </h3>
                </div>
                <p className="mb-6 text-center">
                  The BAO token is at the heart of our ecosystem, empowering
                  community-driven governance and decision-making.
                </p>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="flex flex-col items-center rounded-lg bg-baoWhite/90 p-6 text-baoBlack">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="mb-4 text-4xl text-baoPink"
                    />
                    <h4 className="mb-2 text-xl font-bold">veBAO Governance</h4>
                    <p className="text-center">
                      Lock your BAO tokens to receive veBAO, granting you voting
                      rights and control over the project. veBAO holders propose
                      and vote on governance decisions, controlling everything
                      from team members to revenue usage, tokenomics, roadmap,
                      and product launches.
                    </p>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-baoWhite/90 p-6 text-baoBlack">
                    <FontAwesomeIcon
                      icon={faCoins}
                      className="mb-4 text-4xl text-baoPink"
                    />
                    <h4 className="mb-2 text-xl font-bold">
                      Earn Liquidity Rewards
                    </h4>
                    <p className="text-center">
                      Provide liquidity in our Balancer 80/20 pools to earn AURA
                      and BAL tokens. Participate in our liquidity mining
                      program and earn additional rewards while supporting the
                      BAO ecosystem.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <div className="grid w-full max-w-[600px] grid-cols-2 gap-4">
                    <Button
                      href="https://info.bao.finance/docs/protocol/ecosystem-dynamics/vebao"
                      variant="solid"
                      color="baoWhite"
                      className="text-lg"
                    >
                      Learn More
                    </Button>
                    <Button
                      href="https://app.baofinance.io/swap"
                      variant="solid"
                      color="baoBlack"
                      className="text-lg"
                    >
                      Buy BAO
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-14 flex justify-center gap-4">
            <DiscordLink />
            <SnapshotLink />
            <XLink />
            <DeBankLink />
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes spotlightAnimation {
          0%,
          100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
        }
        .spotlight-effect {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 50%
          );
          background-size: 200% 200%;
          animation: spotlightAnimation 15s ease-in-out infinite;
        }
        @keyframes pulseOpacity {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-opacity {
          animation: pulseOpacity 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
