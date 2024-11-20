import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '../Button'
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaEthereum,
  FaExchangeAlt,
  FaWallet,
} from 'react-icons/fa'
import {
  faChartLine,
  faArrowTrendUp,
  faWallet,
  faArrowTrendDown,
  faEthernet,
  faArrowRightArrowLeft,
  faRepeat,
  faCoins,
  faMoneyBillTransfer,
  faHandHoldingDollar,
  faSackDollar,
  faChartLineDown,
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const supplyTokens = [
  { name: 'wstETH', imageSrc: '/tokens/wstETH.png' },
  { name: 'rETH', imageSrc: '/tokens/rETH.png' },
  { name: 'ETH', imageSrc: '/tokens/ETH.png' },
  { name: 'weETH', imageSrc: '/tokens/weETH.webp' },
  { name: 'sUSDe', imageSrc: '/tokens/sUSDe.webp' },
]

const borrowTokens = [
  { name: 'baoUSD', imageSrc: '/tokens/baoUSD-pinksvg.svg' },
  { name: 'baoETH', imageSrc: '/tokens/baoETH-pink.svg' },
  { name: 'baoBTC', imageSrc: '/tokens/baoBTC-pink.svg', comingSoon: true },
]

const borrowStrategies = [
  {
    name: 'Leverage Yield',
    icon: faChartLine,
    steps: [
      {
        icon: faCoins,
        text: 'Supply yield-bearing collateral',
      },
      {
        icon: faArrowRightArrowLeft,
        text: 'Borrow correlated token',
      },
      {
        icon: faHandHoldingDollar,
        text: 'Buy more collateral',
      },
      {
        icon: faRepeat,
        text: 'Repeat to compound yield',
      },
    ],
  },
  {
    name: 'Leverage Long',
    icon: faArrowTrendUp,
    steps: [
      {
        icon: faCoins,
        text: 'Supply any collateral',
      },
      {
        icon: faArrowRightArrowLeft,
        text: 'Borrow uncorrelated token',
      },
      {
        icon: faHandHoldingDollar,
        text: 'Buy more collateral',
      },
      {
        icon: faChartLine,
        text: 'Profit from price increase',
      },
    ],
  },
  {
    name: 'Spend & Earn',
    icon: faWallet,
    steps: [
      {
        icon: faCoins,
        text: 'Supply yield-bearing collateral',
      },
      {
        icon: faArrowRightArrowLeft,
        text: 'Borrow stable token',
      },
      {
        icon: faHandHoldingDollar,
        text: 'Use borrowed funds',
      },
      {
        icon: faRepeat,
        text: 'Let yield pay your debt',
      },
    ],
  },
  {
    name: 'Leverage Short',
    icon: faArrowTrendDown,
    steps: [
      {
        icon: faCoins,
        text: 'Supply any collateral',
      },
      {
        icon: faArrowRightArrowLeft,
        text: 'Borrow correlated token',
      },
      {
        icon: faHandHoldingDollar,
        text: 'Sell borrowed token',
      },
      {
        icon: faChartLineDown,
        text: 'Profit from price decrease',
      },
    ],
  },
]

export function BorrowAndMint() {
  const [currentStrategyIndex, setCurrentStrategyIndex] = useState(0)
  const [previousStrategyIndex, setPreviousStrategyIndex] = useState(
    borrowStrategies.length - 1
  )
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [supplyTokenIndex, setSupplyTokenIndex] = useState(0)
  const [borrowTokenIndex, setBorrowTokenIndex] = useState(0)
  const [expandedCard, setExpandedCard] = useState<number>(0)
  const [selectedStrategy, setSelectedStrategy] = useState(0)
  const [hoveredStrategy, setHoveredStrategy] = useState(0)
  const [hoveredMintStep, setHoveredMintStep] = useState(0)
  const [expandedMintStep, setExpandedMintStep] = useState<number>(0)

  const mintFeatures = [
    'No Liquidation Leverage',
    'Create stable or leveraged tokens instantly',
    'Trade smarter, hedge better, and earn yields your way',
    'Full control, anytime redemption',
    '100% capital efficiency',
  ]

  const mintSteps = [
    {
      title: 'Deposit ETH',
      description: 'Securely deposit your ETH to start minting tokens.',
      icon: FaEthereum,
    },
    {
      title: 'Choose Token Type',
      description:
        'Select between pegged or leveraged tokens based on your strategy.',
      icon: FaExchangeAlt,
    },
    {
      title: 'Use or Store',
      description:
        'Utilize your tokens in DeFi protocols or securely store them in your wallet.',
      icon: FaWallet,
    },
  ]

  const strategyExplanations = [
    'Leverage Yield: Amplify your returns by using yield-bearing collateral to borrow pegged assets with minimal liquidation risk. For example, use wstETH as collateral to borrow baoETH. As your collateral appreciates against your debt, sell the borrowed baoETH for more wstETH to leverage your yield. This strategy allows you to compound your earnings while maintaining a relatively safe position.',

    "Leverage Long: Create a leveraged long position on your collateral (or a leveraged short on the borrowed asset) by borrowing a token not linked to your collateral's price. For instance, use ETH as collateral to borrow baoUSD, then sell the baoUSD for more ETH. This amplifies your exposure to ETH price movements, potentially increasing gains (but also risks) if ETH appreciates against USD.",

    'Spend & Earn: Unlock the value of your yield-bearing assets without selling them. Use tokens like wstETH as collateral to borrow baoETH or baoUSD for spending, while continuing to earn interest on your original stake. This approach allows you to access liquidity for immediate needs or investments while maintaining long-term exposure to your appreciating assets.',

    "Leverage Short: Create a leveraged short position on your collateral (or a leveraged long on the borrowed asset) by borrowing a token not linked to your collateral's price. For instance, use ETH as collateral to borrow baoUSD, then sell the baoUSD for more ETH. This amplifies your exposure to ETH price movements, potentially increasing gains (but also risks) if ETH appreciates against USD.",
  ]

  const toggleCard = (index: number) => {
    setExpandedCard(index)
  }

  return (
    <section className="relative overflow-hidden bg-baoWhite py-24 text-baoBlack">
      {/* Animated waves background */}
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
              fillOpacity="0.18"
              d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,128C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
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
              fillOpacity="0.12"
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>

        {/* Top wave (lightest) */}
        <div className="absolute inset-x-0 bottom-0 h-2/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.08"
              d="M0,288L60,277.3C120,267,240,245,360,234.7C480,224,600,224,720,234.7C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Borrow Section */}
          <div className="flex flex-col">
            <div className="relative flex h-full flex-col items-center rounded-xl bg-baoBlack p-4 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
              <h2 className="mb-2 text-center font-bakbak text-[clamp(24px,6vw,60px)] font-bold uppercase leading-none text-baoWhite">
                BORROW
              </h2>
              <div className="mb-6 inline-block bg-baoWhite px-4 py-2">
                <p className="font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoBlack">
                  AT THE BEST RATES
                </p>
              </div>

              {/* Supply and Borrow headers with hover effect logos */}
              <div className="mb-8 flex w-full flex-col justify-between gap-4 sm:flex-row sm:gap-0">
                <div className="text-center">
                  <h3 className="mb-4 font-bakbak text-xl text-baoWhite">
                    Supply
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {supplyTokens.map((token, index) => (
                      <div key={token.name} className="group relative pb-4">
                        <Image
                          src={token.imageSrc}
                          alt={`${token.name} Logo`}
                          width={40}
                          height={40}
                          className="transition-transform duration-300 group-hover:scale-125"
                        />
                        <span className="absolute left-1/2 top-full mt-0.5 hidden -translate-x-1/2 whitespace-nowrap rounded bg-baoPink px-2 py-1 text-xs text-white transition-opacity duration-300 group-hover:block">
                          {token.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="mb-4 font-bakbak text-xl text-baoWhite">
                    Borrow
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {borrowTokens.map((token, index) => (
                      <div key={token.name} className="group relative pb-4">
                        <Image
                          src={token.imageSrc}
                          alt={`${token.name} Logo`}
                          width={40}
                          height={40}
                          className="transition-transform duration-300 group-hover:scale-125"
                        />
                        <span className="absolute left-1/2 top-full mt-0.5 hidden -translate-x-1/2 whitespace-nowrap rounded bg-baoPink px-2 py-1 text-xs text-white transition-opacity duration-300 group-hover:block">
                          {token.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Borrow Strategies */}
              <div className="mb-8 w-full">
                <h3 className="mb-4 font-bakbak text-2xl text-baoWhite">
                  Borrow Strategies
                </h3>
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
                  {/* Strategy List */}
                  <div className="w-full lg:w-2/5">
                    {borrowStrategies.map((strategy, index) => (
                      <div
                        key={index}
                        className={`mb-4 flex cursor-pointer items-center gap-4 rounded-lg p-4 outline outline-1 transition-all duration-300 ${
                          hoveredStrategy === index
                            ? 'bg-baoPink/10 text-baoWhite outline-baoPink'
                            : 'text-baoWhite outline-baoPink/50 hover:bg-baoPink/5 hover:outline-baoPink'
                        }`}
                        onMouseEnter={() => setHoveredStrategy(index)}
                      >
                        <FontAwesomeIcon
                          icon={strategy.icon}
                          className="h-6 w-6 shrink-0 text-baoPink"
                        />
                        <span className="whitespace-nowrap font-semibold">
                          {strategy.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Strategy Details */}
                  <div className="w-full rounded-lg bg-baoBlack p-4 outline outline-1 outline-baoPink/50 sm:p-6 lg:w-3/5">
                    {borrowStrategies.map((strategy, index) => (
                      <div
                        key={index}
                        className={`transition-opacity duration-300 ${
                          hoveredStrategy === index
                            ? 'opacity-100'
                            : 'hidden opacity-0'
                        }`}
                      >
                        <h4 className="mb-4 text-lg font-semibold text-baoWhite">
                          {strategy.name}
                        </h4>
                        <div className="space-y-4">
                          {strategy.steps.map((step, stepIndex) => (
                            <div
                              key={stepIndex}
                              className="flex items-center gap-3"
                            >
                              <FontAwesomeIcon
                                icon={step.icon}
                                className="h-5 w-5 text-baoPink"
                              />
                              <span className="text-sm text-baoWhite">
                                {step.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                variant="solid"
                color="baoPink"
                href="https://app.baofinance.io/vaults"
                className="px-8 py-3 text-lg"
              >
                BORROW NOW
              </Button>
            </div>
          </div>

          {/* Mint Section */}
          <div className="flex flex-col">
            <div className="relative flex h-full flex-col items-center rounded-xl bg-baoBlack p-4 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
              {/* Large Coming Soon Banner - adjusted positioning */}
              <div className="absolute -right-10 top-4 z-30 flex items-center justify-center">
                <div className="rotate-[45deg] transform">
                  <div className="rounded-sm bg-baoPink/80 px-4 py-1.5 text-base font-bold uppercase tracking-widest text-baoWhite shadow-lg outline outline-1 outline-offset-2 outline-baoPink/60">
                    Coming Soon
                  </div>
                </div>
              </div>

              <h2 className="relative z-20 mb-2 text-center font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoWhite">
                MINT
              </h2>
              <div className="relative z-20 mb-6 inline-block bg-baoWhite px-4 py-2">
                <p className="font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoBlack">
                  PEGGED OR LEVERAGE TOKENS
                </p>
              </div>

              {/* Numbered list - now interactive */}
              <div className="relative z-20 mb-8 flex w-full justify-between gap-4">
                {mintSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer overflow-hidden rounded-lg bg-baoBlack p-4 text-baoWhite outline outline-1 outline-baoPink/50 transition-all duration-300 ${
                      expandedMintStep === index ? 'w-2/3' : 'w-1/6'
                    }`}
                    style={{ height: '180px' }}
                    onMouseEnter={() => setExpandedMintStep(index)}
                  >
                    <div className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-baoPink text-sm font-bold text-baoWhite">
                      {index + 1}
                    </div>
                    <div
                      className={`transition-opacity duration-300 ${
                        expandedMintStep === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <h3 className="mb-2 mt-8 text-lg font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-sm">{step.description}</p>
                    </div>
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        expandedMintStep === index ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      <step.icon className="text-4xl text-baoPink" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Features list */}
              <div className="relative z-20 mb-8 w-full rounded-lg bg-baoBlack p-6 shadow-lg outline outline-1 outline-baoWhite/20">
                <ul className="space-y-4">
                  {mintFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="mr-3 text-xl text-baoPink" />
                      <span className="text-[clamp(14px,1.5vw,18px)] text-baoWhite">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
              320L1380,
              320C1320,
              320,
              1200,
              320,
              1080,
              320C960,
              320,
              840,
              320,
              720,
              320C600,
              320,
              480,
              320,
              360,
              320C240,
              320,
              120,
              320,
              60,
              320L0,
              320Z
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
              320L1380,
              320C1320,
              320,
              1200,
              320,
              1080,
              320C960,
              320,
              840,
              320,
              720,
              320C600,
              320,
              480,
              320,
              360,
              320C240,
              320,
              120,
              320,
              60,
              320L0,
              320Z
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
              320L1380,
              320C1320,
              320,
              1200,
              320,
              1080,
              320C960,
              320,
              840,
              320,
              720,
              320C600,
              320,
              480,
              320,
              360,
              320C240,
              320,
              120,
              320,
              60,
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

export default BorrowAndMint
