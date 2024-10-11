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
      <Container>
        <div className="relative z-10 text-center">
          <h2 className="mb-4 font-bakbak text-[clamp(30px,8vw,100px)] font-bold uppercase leading-none">
            Join the revolution
          </h2>
          <div className="mx-auto my-4 w-fit rounded-sm bg-baoPink px-4 py-2">
            <p className="text-[clamp(14px,1.5vw,20px)] font-bold uppercase text-baoWhite">
              We need dreamers, we need builders.
            </p>
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
    </section>
  )
}
