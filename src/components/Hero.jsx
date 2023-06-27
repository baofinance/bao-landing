import Link from 'next/link'
import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { AppScreen } from '@/components/AppScreen'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoChainlink from '@/images/logos/chainlink.svg'
import logoBalancer from '@/images/logos/balancer.svg'
import logoLiquity from '@/images/logos/liquity.svg'
import logoAura from '@/images/logos/aura.svg'
import logoCurve from '@/images/logos/curve.svg'
import logoStakeDAO from '@/images/logos/stake-dao.svg'
import logoBProtocol from '@/images/logos/b-protocol.svg'
import logoSaddle from '@/images/logos/saddle.svg'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e53164" />
            <stop offset="1" stopColor="#e53164" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e53164" />
            <stop offset="1" stopColor="#e53164" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#e5316480" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#e53164"
        stroke="#e53164"
      />
    </svg>
  )
}

function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <Image
          src="/images/app-bstbl.png"
          width={1080}
          height={1920}
          alt="mobile app"
        />
      </AppScreen.Body>
    </AppScreen>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <div>
              <h1 className="mr-2 inline-block stroke-white font-bakbak text-4xl uppercase tracking-tight">
                Deliciously
              </h1>
              <h1 className="mr-2 inline-block font-bakbak text-4xl uppercase tracking-tight text-baoRed">
                Wrapped
              </h1>
              <h1 className="mr-2 inline-block font-bakbak text-4xl uppercase tracking-tight text-baoWhite">
                Finance
              </h1>
            </div>
            <p className="mt-6 text-lg text-baoWhite">
              We are building omnichain, decentralized and secure synthetic
              liquidity, tokens and markets. Accessible to all. Stoppable by
              no-one.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Button
                href="https://app.bao.finance"
                variant="transparent"
                color="white"
              >
                <span>Launch App</span>
              </Button>
              <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                variant="transparent"
                color="white"
              >
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Watch the video</span>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-baoWhite lg:text-left">
              We only work with the most innovative teams
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 grid max-w-xl grid-cols-4 flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {[
                ['Chainlink', logoChainlink, 'https://chain.link'],
                ['Balancer', logoBalancer, 'https://balancer.fi'],
                ['Liquity', logoLiquity, 'https://liquity.fi'],
                ['Aura', logoAura, 'https://aura.finance'],
                ['Curve', logoCurve, 'https://curve.fi'],
                ['StakeDAO', logoStakeDAO, 'https://stakedao.org'],
                ['BProtocol', logoBProtocol, 'https://bprotocol.org'],
                ['Saddle', logoSaddle, 'https://saddle.finance'],
              ].map(([name, logo, href]) => (
                <li key={name} className={clsx('flex')}>
                  <Image
                    src={logo}
                    alt={name}
                    className="h-8 w-8"
                    unoptimized
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ProtocolLink({ children, ...props }) {
  return (
    <Button
      as={Link}
      className="block !bg-transparent text-base leading-7 tracking-tight text-baoWhite"
      {...props}
    >
      {children}
    </Button>
  )
}
