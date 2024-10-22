import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '../Button'
import { FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa'

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
  'Leverage Yield',
  'Leverage Long',
  'Spend while you earn',
  'Leverage Short',
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
    },
    {
      title: 'Choose Token Type',
      description:
        'Select between pegged or leveraged tokens based on your strategy.',
    },
    {
      title: 'Use or Store',
      description:
        'Utilize your tokens in DeFi protocols or securely store them in your wallet.',
    },
  ]

  const strategyExplanations = [
    'Leverage Yield: Amplify your returns by using yield-bearing collateral to borrow pegged assets with minimal liquidation risk. For example, use wstETH as collateral to borrow baoETH. As your collateral appreciates against your debt, sell the borrowed baoETH for more wstETH to leverage your yield. This strategy allows you to compound your earnings while maintaining a relatively safe position.',

    "Leverage Long: Create a leveraged long position on your collateral (or a leveraged short on the borrowed asset) by borrowing a token not linked to your collateral's price. For instance, use ETH as collateral to borrow baoUSD, then sell the baoUSD for more ETH. This amplifies your exposure to ETH price movements, potentially increasing gains (but also risks) if ETH appreciates against USD.",

    'Yield Farming: Maintain exposure to your Liquid Staking Tokens (LSTs) while accessing additional yield farming opportunities. Use LSTs like wstETH as collateral to borrow baoUSD, then deposit the borrowed baoUSD into incentivized liquidity pools. This strategy allows you to earn rewards from both your staked ETH and the liquidity provision, potentially boosting your overall returns.',

    'Spend While You Earn: Unlock the value of your yield-bearing assets without selling them. Use tokens like wstETH as collateral to borrow baoETH or baoUSD for spending, while continuing to earn interest on your original stake. This approach allows you to access liquidity for immediate needs or investments while maintaining long-term exposure to your appreciating assets.',
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

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Borrow Section */}
          <div className="flex flex-col">
            <div className="relative flex flex-col items-center rounded-xl bg-baoBlack p-8 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h2 className="mb-2 text-center font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoWhite">
                BORROW
              </h2>
              <p className="mb-6 font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoWhite">
                💎 AT THE BEST RATES 🚀
              </p>

              {/* Supply and Borrow headers with hover effect logos */}
              <div className="mb-12 flex w-full justify-between">
                {' '}
                {/* Increased mb-6 to mb-12 */}
                <div className="text-center">
                  <h3 className="mb-4 font-bakbak text-xl text-baoWhite">
                    Supply
                  </h3>
                  <div className="flex justify-center space-x-2">
                    {supplyTokens.map((token, index) => (
                      <div key={token.name} className="group relative pb-4">
                        <Image
                          src={token.imageSrc}
                          alt={`${token.name} Logo`}
                          width={50}
                          height={50}
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
                  <div className="flex justify-center space-x-2">
                    {borrowTokens.map((token, index) => (
                      <div key={token.name} className="group relative pb-4">
                        <Image
                          src={token.imageSrc}
                          alt={`${token.name} Logo`}
                          width={50}
                          height={50}
                          className="transition-transform duration-300 group-hover:scale-125"
                        />
                        <span className="absolute left-1/2 top-full mt-0.5 hidden -translate-x-1/2 whitespace-nowrap rounded bg-baoPink px-2 py-1 text-xs text-white transition-opacity duration-300 group-hover:block">
                          {token.name}
                        </span>
                        {token.comingSoon && (
                          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-baoPink bg-opacity-80">
                            <span className="text-xs font-bold text-white">
                              COMING SOON
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex w-full justify-center">
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

            <div className="mt-8">
              <div className="relative flex flex-col items-center rounded-xl bg-baoBlack p-8 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-4 font-bakbak text-2xl text-baoWhite">
                  Borrow Strategies
                </h3>
                <div className="flex w-full">
                  <div className="w-1/3 pr-4">
                    <ul className="space-y-2">
                      {borrowStrategies.map((strategy, index) => (
                        <li key={index}>
                          <div
                            className={`w-full rounded-md px-4 py-2 text-left text-sm transition-colors ${
                              hoveredStrategy === index
                                ? 'bg-baoPink/10 text-baoPink'
                                : 'bg-baoBlack text-baoWhite'
                            } cursor-pointer outline outline-1 outline-baoPink/50 hover:bg-baoPink/5 hover:text-baoPink`}
                            onMouseEnter={() => setHoveredStrategy(index)}
                          >
                            {strategy}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-2/3 pl-4">
                    <div className="h-full overflow-y-auto rounded-md bg-baoBlack p-4 text-left text-sm text-baoWhite outline outline-1 outline-baoPink/50">
                      {strategyExplanations[hoveredStrategy]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mint Section */}
          <div className="flex flex-col">
            <div className="relative flex flex-col items-center rounded-xl bg-baoBlack p-8 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h2 className="mb-2 text-center font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoWhite">
                MINT
              </h2>
              <p className="mb-6 font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoWhite">
                PEGGED OR LEVERAGE TOKENS
              </p>
              {/* Numbered list with mouseover effect */}
              <div className="flex w-full justify-between gap-2">
                {mintSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer overflow-hidden rounded-lg bg-baoBlack p-4 text-baoWhite outline outline-1 outline-baoPink/50 transition-all duration-300 ${
                      hoveredMintStep === index
                        ? 'w-2/3 bg-baoPink/10'
                        : 'w-1/6'
                    }`}
                    style={{ height: '160px' }}
                    onMouseEnter={() => setHoveredMintStep(index)}
                  >
                    <div className="relative h-full">
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                          hoveredMintStep === index
                            ? 'opacity-0'
                            : 'opacity-100'
                        }`}
                      >
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                      <div
                        className={`transition-opacity duration-300 ${
                          hoveredMintStep === index
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      >
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="mt-2 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coming Soon Banner */}
            <div className="my-8 rounded-lg bg-baoPink p-6 text-center text-baoWhite">
              <span className="font-bakbak text-4xl font-bold uppercase">
                COMING SOON
              </span>
            </div>

            <div className="flex-grow">
              <div className="h-full rounded-lg bg-baoBlack p-6 shadow-lg outline outline-1 outline-baoWhite/20">
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
