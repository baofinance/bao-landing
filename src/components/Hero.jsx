import 'node_modules/react-modal-video/scss/modal-video.scss'
import { AppScreen } from '@/components/AppScreen'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { useId, useState } from 'react'
import ModalVideo from 'react-modal-video'
import { LinkIcon } from '@heroicons/react/24/outline'
import { Logo } from './Logo'
import { DiscordLink } from './DiscordLink'
import { SnapshotLink } from './SnapshotLink'
import { XLink } from './XLink'

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
          src="/images/app-baousd.png"
          width={1080}
          height={1920}
          alt="mobile app"
        />
      </AppScreen.Body>
    </AppScreen>
  )
}

export function Hero() {
  const [isOpen, setOpen] = useState(false)

  const background = {
    backgroundColor: '#1E2022',
    opacity: 1,
    backgroundImage: `linear-gradient(#2d2d2d 1px, transparent 1px), linear-gradient(to right, #2d2d2d 1px, #1E2022 1px)`,
    backgroundSize: '20px 20px',
  }

  return (
    <div className="relative overflow-hidden py-6 sm:py-8 lg:pb-12 xl:pb-14">
      <div
        className="absolute left-0 top-0 h-full w-screen"
        style={background}
      />
      <Container>
        <div>
          <div className="relative mt-[8rem] flex place-items-end md:mt-[12rem] lg:space-x-12 lg:space-y-20">
            <div className="relative z-10 max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <div className="flex flex-col place-content-start place-items-start space-y-3">
                <div className="flex place-items-end space-x-8">
                  <div className="flex place-items-center space-x-3">
                    <Logo width={43} height={43} />
                    <h1 className="mr-2 inline-block font-bakbak text-3xl tracking-tight text-baoWhite">
                      BAO FINANCE
                    </h1>
                  </div>
                </div>
                <p className="mt-2 text-3xl font-bold leading-10 text-baoWhite/90 lg:text-6xl lg:font-semibold">
                  Powering the next generation of permissionless on-chain
                  derivitives and infrastructure.
                </p>
                <p className="mt-2 text-lg text-baoWhite/80 lg:text-xl">
                  With extremely competetive borrowing rates.
                </p>
              </div>
              <div className="mt-[5rem] flex flex-wrap place-items-center gap-x-6 gap-y-4">
                <div>
                  <h1 className="mr-2 inline-block text-4xl font-medium leading-3 tracking-tight text-baoWhite">
                    16K
                  </h1>
                  <p className="mt-2 text-xl leading-4 text-baoWhite/70">
                    $BAO Holders
                  </p>
                </div>
                <div className="mx-2 h-[40px] w-[1px] bg-baoWhite opacity-50" />
                <div>
                  <h1 className="mr-2 inline-block text-4xl font-medium leading-3 tracking-tight text-baoWhite">
                    $300M+
                  </h1>
                  <p className="mt-2 text-xl leading-4 text-baoWhite/70">
                    DeBank TVF
                  </p>
                </div>

                <Button
                  href="https://app.baofinance.io"
                  variant="transparent"
                  color="white"
                  className="!text-lg backdrop-blur-sm"
                >
                  <span>Launch App</span>
                </Button>
                <Button
                  variant="transparent"
                  color="white"
                  className="place-items-center !text-lg backdrop-blur-sm"
                >
                  <LinkIcon className="mr-2.5 h-6 w-6 flex-none" />
                  <Link href="https://docs.bao.finance/">Learn More</Link>
                </Button>
              </div>
            </div>
            {/* <div className="mt-8 flex space-x-3">
              <DiscordLink color="white" />
              <SnapshotLink color="white" />
              <XLink color="white" />
            </div> */}
            {/* <div className="relative lg:col-span-7 lg:mt-0 xl:col-span-6">
              <p className="text-center font-semibold text-baoWhite lg:text-left">
                Partnered with
              </p>
              <ul Snapshot votes, DeBank 
                role="list"
                className="mx-auto mt-8 grid max-w-xl grid-cols-4 flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
              >
                {[
                  ['Chainlink', logoChainlink],
                  ['Balancer', logoBalancer],
                  ['Liquity', logoLiquity],
                  ['Aura', logoAura],
                  ['Curve', logoCurve],
                  ['StakeDAO', logoStakeDAO],
                  ['BProtocol', logoBProtocol],
                  ['Paladin', logoPaladin],
                ].map(([name, logo, href]) => (
                  <li key={name} className={clsx('flex')}>
                    <Imagehttps://etherscan.io/address/0x0e7518b332f469a6a2f59e690f225cef5157cca9
                      src={logo}
                      alt={name}
                      className="h-12 w-12"
                      unoptimized
                    />
                  </li>
                ))}
              </ul>
            </div> */}
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
