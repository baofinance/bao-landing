import 'node_modules/react-modal-video/scss/modal-video.scss'
import { AppScreen } from '@/components/AppScreen'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { useId, useState } from 'react'
import { LinkIcon } from '@heroicons/react/24/outline'

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

export function ActiveVaults() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="relative overflow-hidden bg-gray-900 py-[5rem]">
      <Container>
        <div>
          <div className="relative space-y-10">
            <div className="relative z-10 flex flex-col gap-8 xl:flex-row">
              <div className=" flex-1 space-y-5 rounded-2xl bg-gray-800 p-6">
                <div className="flex place-items-center space-x-3">
                  <Image src="/tokens/baoUSD.png" width={32} height={32} />
                  <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-3 tracking-tight text-baoWhite">
                    baoUSD
                  </h1>
                </div>
                <p className="text-md mt-2 leading-7 text-baoWhite/80">
                  baoUSD is a stablecoin backed by Lido's wrapped staked ETH
                  (wstETH), ETH, and BAO Baskets. This diverse backing keeps its
                  price stable and secure. With transparency and reliability,
                  baoUSD is perfect for everyday use.
                </p>
              </div>
              <div className=" flex-1 space-y-5 rounded-2xl bg-gray-800 p-6">
                <div className="flex place-items-center space-x-3">
                  <Image src="/tokens/baoETH.png" width={32} height={32} />
                  <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-3 tracking-tight text-baoWhite">
                    baoETH
                  </h1>
                </div>
                <p className="text-md mt-2 leading-7 text-baoWhite/80">
                  baoETH is backed by Lido's wrapped staked ETH (wstETH), ETH,
                  and BAO Baskets. This diverse backing provides stability and
                  security, making baoETH a solid and dependable alternative to
                  regular ETH.
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button
                href="https://app.baofinance.io"
                variant="transparent"
                color="white"
                className="backdrop-blur-sm"
              >
                <span>Mint</span>
              </Button>
              <Button
                href="https://app.baofinance.io"
                variant="transparent"
                color="white"
                className="backdrop-blur-sm"
              >
                <span>Swap</span>
              </Button>
              <Button
                href="https://app.baofinance.io"
                variant="transparent"
                color="white"
                className="backdrop-blur-sm"
              >
                <span>Lend</span>
              </Button>
              <Button
                href="https://app.baofinance.io"
                variant="transparent"
                color="white"
                className="backdrop-blur-sm"
              >
                <span>Vaults</span>
              </Button>
            </div>

            <div className="mx-auto !pt-12">
              <div className="relative mb-10 flex">
                <Image
                  src="/platforms/Aura.webp"
                  className="absolute left-0 rounded-full outline outline-1 outline-baoWhite/60"
                  width={32}
                  height={32}
                />
                <Image
                  src="/platforms/Balancer.png"
                  className="absolute left-4 rounded-full outline outline-1 outline-baoWhite/60"
                  width={32}
                  height={32}
                />
                <Image
                  src="/platforms/cowSwap.png"
                  className="absolute left-9 rounded-full outline outline-1 outline-baoWhite/60"
                  width={32}
                  height={32}
                />
                <Image
                  src="/platforms/StakeDAO.png"
                  className="absolute left-[3.4rem] rounded-full outline outline-1 outline-baoWhite/60"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex place-items-center space-x-3">
                <h1 className="mr-2 inline-block font-bakbak text-4xl tracking-tight text-baoWhite">
                  Maximize Your Yield
                </h1>
                <Link href="https://app.baofinance.io/earn">
                  <LinkIcon className="h-5 w-5 flex-none text-baoWhite" />
                </Link>
              </div>
              <p className="mt-2 text-lg text-baoWhite/80">
                You can find and engage with Bao Finance on platforms like
                Balancer, Aura, Curve, and StakeDAO. These platforms host
                various liquidity pools and staking opportunities for Bao
                Finance tokens, such as baoUSD and baoETH. By partnering with
                these leading DeFi platforms, Bao Finance ensures that its
                innovative financial tools are widely accessible, allowing users
                to seamlessly integrate and benefit from its ecosystem across
                the decentralized finance landscape.
              </p>
              <div className="mt-12">
                <h1 className="mr-2 inline-block font-bakbak text-4xl tracking-tight text-baoWhite">
                  Featured Pools
                </h1>
                <div className="relative z-10 mt-5 flex flex-col gap-8 xl:flex-row">
                  <Link
                    href="https://app.aura.finance/#/1/pool/215"
                    target="_none"
                    className="flex-1 space-y-5 rounded-2xl bg-gray-800 p-6 outline outline-1 outline-purple-300 duration-100 hover:opacity-80"
                  >
                    <div className="flex place-content-between">
                      <div className="flex place-items-center space-x-3">
                        <Image
                          src="/platforms/Aura.webp"
                          width={32}
                          height={32}
                        />
                        <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-3 tracking-tight text-baoWhite">
                          Aura
                        </h1>{' '}
                        <div className="mx-4 h-8 w-[1px] bg-baoWhite" />
                        <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-3 tracking-tight text-baoWhite">
                          26.16% vAPR
                        </h1>{' '}
                      </div>
                      <div className="my-auto flex place-items-center space-x-6">
                        <div className="relative my-auto flex">
                          <Image
                            src="/tokens/baoUSD.png"
                            className="left-0 rounded-full outline outline-1 outline-baoWhite/60"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/tokens/LUSD.png"
                            className="absolute left-4 rounded-full outline outline-1 outline-baoWhite/60"
                            width={25}
                            height={25}
                          />
                        </div>
                        <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-3 tracking-tight text-baoWhite">
                          baoUSD / LUSD
                        </h1>{' '}
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="https://balancer.fi/pools/ethereum/v2/0x19df5bb37380186bc8efc5ad91516373a2c5459f000200000000000000000698"
                    target="_none"
                    className="flex-1 space-y-5 rounded-2xl bg-gray-800 p-6 outline outline-1 outline-gray-400 duration-100 hover:opacity-80"
                  >
                    <div className="flex place-content-between">
                      <div className="flex place-items-center space-x-3">
                        <Image
                          src="/platforms/Balancer.png"
                          className="rounded-full outline outline-1 outline-gray-400"
                          width={32}
                          height={32}
                        />
                        <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-3 tracking-tight text-baoWhite">
                          Balancer
                        </h1>{' '}
                        <div className="mx-4 h-8 w-[1px] bg-baoWhite" />
                        <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-3 tracking-tight text-baoWhite">
                          34%-85% vAPR
                        </h1>{' '}
                      </div>
                      <div className="my-auto flex place-items-center space-x-6">
                        <div className="relative my-auto flex">
                          <Image
                            src="/tokens/BAO.png"
                            className="left-0 rounded-full outline outline-1 outline-baoWhite/60"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/tokens/baoETH.png"
                            className="absolute left-4 rounded-full outline outline-1 outline-baoWhite/60"
                            width={25}
                            height={25}
                          />
                        </div>
                        <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-3 tracking-tight text-baoWhite">
                          BAO / baoETH
                        </h1>{' '}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h1 className="inline-block font-bakbak text-xl tracking-tight text-baoRed"></h1>
              <div className=" max-w-3xl">
                <h1 className="inline-block font-bakbak text-4xl tracking-tight text-baoWhite">
                  BAO Governance
                </h1>
              </div>
              <p className="mt-2 text-lg text-baoWhite/80">
                Get involved with Bao Finance's governance! Join our community
                on Discord for discussions and updates. Vote on key proposals on
                Snapshot and stay informed on X. Your participation is
                crucial—help shape the future of Bao Finance today!
              </p>
            </div>
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
