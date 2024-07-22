import 'node_modules/react-modal-video/scss/modal-video.scss'
import { AppScreen } from '@/components/AppScreen'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { useId, useState } from 'react'
import { LinkIcon } from '@heroicons/react/24/outline'
import logoAura from '@/images/logos/aura.svg'
import logoBProtocol from '@/images/logos/b-protocol.svg'
import logoBalancer from '@/images/logos/balancer.svg'
import logoChainlink from '@/images/logos/chainlink.svg'
import logoCurve from '@/images/logos/curve.svg'
import logoLiquity from '@/images/logos/liquity.svg'
import logoPaladin from '@/images/logos/paladin.png'
import logoStakeDAO from '@/images/logos/stake-dao.svg'
import clsx from 'clsx'

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
          <div className="relative space-y-12">
            <div className="mx-auto">
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
                Decentralized, transparent and trusted by over 200 defi
                communities. By partnering with leading DeFi platforms, Bao
                Finance ensures that its innovative financial tools are widely
                accessible, allowing users to seamlessly integrate and benefit
                from its ecosystem across the decentralized finance landscape.
                Deposit yield-bearing assets like{' '}
                <a
                  className="font-bold text-baoRed"
                  href="https://https://app.ethena.fi"
                >
                  sUSDe
                </a>
                ,{' '}
                <a
                  className="font-bold text-baoRed"
                  href="https://https://app.ethena.fi"
                >
                  sDAI
                </a>
                ,{' '}
                <a
                  className="font-bold text-baoRed"
                  href="https://rocketpool.net"
                >
                  rETH
                </a>{' '}
                , or{' '}
                <a className="font-bold text-baoRed" href="https://lido.fi">
                  wstETH
                </a>{' '}
                as collateral in BAO Gauges for additional yield.{' '}
              </p>
              <p className="mt-2 text-lg text-baoWhite/80"></p>
              <div className="mt-12">
                <h1 className="mr-2 inline-block font-bakbak text-4xl tracking-tight text-baoWhite">
                  Featured Pools
                </h1>
                <p className="mt-2 text-lg text-baoWhite/80">
                  Earn third party reward tokens like $AURA and $BAL to boost
                  APR
                </p>
                <div className="relative z-10 mt-5 flex flex-col gap-5 ">
                  <Link
                    href="https://app.aura.finance/#/1/pool/216"
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
                        <h1 className="font-bakkak inline-block font-bakbak text-lg leading-5 tracking-tight text-baoWhite xl:text-2xl">
                          Aura
                        </h1>{' '}
                        <div className="mx-4 h-8 w-[1px] bg-baoWhite" />
                        <h1 className="font-bakkak inline-block font-bakbak text-lg leading-5 tracking-tight text-baoWhite xl:text-2xl">
                          69.02% vAPR
                        </h1>{' '}
                      </div>
                      <div className="my-auto flex place-items-center space-x-6">
                        <div className="relative my-auto flex">
                          <Image
                            src="/tokens/baoETH.png"
                            className="left-0 rounded-full outline outline-1 outline-baoWhite/60"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/tokens/BAO.png"
                            className="absolute left-4 rounded-full outline outline-1 outline-baoWhite/60"
                            width={25}
                            height={25}
                          />
                        </div>
                        <h1 className="font-bakkak inline-block font-bakbak text-lg leading-5 tracking-tight text-baoWhite xl:text-2xl">
                          20% baoETH-ETH / 80% BAO
                        </h1>{' '}
                      </div>
                    </div>
                  </Link>
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
                        <h1 className="font-bakkak inline-block font-bakbak text-lg leading-5 tracking-tight text-baoWhite xl:text-2xl">
                          Aura
                        </h1>{' '}
                        <div className="mx-4 h-8 w-[1px] bg-baoWhite" />
                        <h1 className="font-bakkak inline-block font-bakbak text-lg leading-5 tracking-tight text-baoWhite xl:text-2xl">
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
                        <h1 className="font-bakkak inline-block font-bakbak text-lg leading-5 tracking-tight text-baoWhite xl:text-2xl">
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
                        <h1 className="font-bakkak inline-block font-bakbak text-lg leading-5 tracking-tight text-baoWhite xl:text-2xl">
                          Balancer
                        </h1>{' '}
                        <div className="mx-4 h-8 w-[1px] bg-baoWhite" />
                        <h1 className="font-bakkak inline-block font-bakbak text-lg leading-5 tracking-tight text-baoWhite xl:text-2xl">
                          40%-102% vAPR
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
                        <h1 className="font-bakkak inline-block font-bakbak text-lg leading-5 tracking-tight text-baoWhite xl:text-2xl">
                          BAO / baoETH-ETH
                        </h1>{' '}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="mr-2 inline-block font-bakbak text-4xl tracking-tight text-baoWhite">
                Our Tokens
              </h1>
              <div className="relative z-10 flex flex-col gap-3 xl:flex-row">
                <div className=" flex-1 space-y-5 rounded-2xl bg-gray-800 p-5 outline outline-1 outline-gray-400 duration-100 hover:opacity-80">
                  <div className="flex place-items-center space-x-3">
                    <Image src="/tokens/BAO.png" width={32} height={32} />
                    <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-5 tracking-tight text-baoWhite">
                      BAO
                    </h1>
                  </div>
                  <p className="text-md mt-2 leading-7 text-baoWhite/80">
                    The $BAO token, now known as BAO v2, was distributed
                    initially to 200+ communities, where it now incentivizes
                    liquidity through buybacks. Rewards on BAO gauges are
                    multiplied through the distribution of $BAO and locking to
                    veBAO where ~1/3 of the circulating supply lives.
                  </p>
                </div>
                <div className=" flex-1 space-y-5 rounded-2xl bg-gray-800 p-5 outline outline-1 outline-gray-400 duration-100 hover:opacity-80">
                  <div className="flex place-items-center space-x-3">
                    <Image src="/tokens/baoUSD.png" width={32} height={32} />
                    <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-5 tracking-tight text-baoWhite">
                      baoUSD
                    </h1>
                  </div>
                  <p className="text-md mt-2 leading-7 text-baoWhite/80">
                    baoUSD is a stablecoin backed by Lido&apos;s wrapped staked
                    ETH (wstETH), ETH, and BAO Baskets. This diverse backing
                    keeps its price stable and secure. With transparency and
                    reliability, baoUSD is perfect for everyday use.
                  </p>
                </div>
                <div className=" flex-1 space-y-5 rounded-2xl bg-gray-800 p-5 outline outline-1 outline-gray-400 duration-100 hover:opacity-80">
                  <div className="flex place-items-center space-x-3">
                    <Image src="/tokens/baoETH.png" width={32} height={32} />
                    <h1 className="font-bakkak inline-block font-bakbak text-2xl leading-5 tracking-tight text-baoWhite">
                      baoETH
                    </h1>
                  </div>
                  <p className="text-md mt-2 leading-7 text-baoWhite/80">
                    baoETH is backed by Lido&apos;s wrapped staked ETH (wstETH),
                    ETH, and BAO Baskets. This diverse backing provides
                    stability and security, making baoETH a solid and dependable
                    alternative to regular ETH.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex space-x-3">
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
