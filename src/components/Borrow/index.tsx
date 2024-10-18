import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '../Button'

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

export function Borrow() {
  const [currentStrategyIndex, setCurrentStrategyIndex] = useState(0)
  const [previousStrategyIndex, setPreviousStrategyIndex] = useState(
    borrowStrategies.length - 1
  )
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setPreviousStrategyIndex(currentStrategyIndex)
      setCurrentStrategyIndex(
        (prevIndex) => (prevIndex + 1) % borrowStrategies.length
      )

      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [currentStrategyIndex])

  return (
    <section className="relative overflow-hidden bg-baoBlack py-24 text-baoWhite">
      {/* Background with animated lines */}
      <div className="absolute inset-x-0 bottom-0 h-1/2">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e23a52" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#e23a52" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e23a52" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#e23a52" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 Q 400 0, 800 100 T 1600 100"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-1"
          />
          <path
            d="M0 100 Q 400 0, 800 100 T 1600 100"
            fill="url(#grad1)"
            className="animate-flow-1"
          />
          <path
            d="M0 200 Q 600 100, 1200 200 T 1600 200"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-2"
          />
          <path
            d="M0 200 Q 600 100, 1200 200 T 1600 200"
            fill="url(#grad2)"
            className="animate-flow-2"
          />
          <path
            d="M0 300 Q 300 200, 800 300 T 1600 300"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-3"
          />
          <path
            d="M0 300 Q 300 200, 800 300 T 1600 300"
            fill="url(#grad1)"
            className="animate-flow-3"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative flex flex-col items-center rounded-xl bg-baoBlack p-8 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="mb-4 font-bakbak text-[clamp(30px,8vw,100px)] font-bold uppercase leading-none">
              BORROW
            </h2>
            <p className="mb-6 font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase">
              💎 AT THE BEST RATES 🚀
            </p>
            <div className="relative mb-8 h-24 w-full overflow-hidden">
              {borrowStrategies.map((strategy, index) => (
                <p
                  key={strategy}
                  className={`absolute left-0 top-0 w-full text-center text-2xl transition-all duration-500 ${
                    index === currentStrategyIndex
                      ? 'translate-y-0 opacity-100'
                      : index === previousStrategyIndex && isTransitioning
                      ? '-translate-y-full opacity-0'
                      : 'translate-y-full opacity-0'
                  }`}
                >
                  {strategy}
                </p>
              ))}
            </div>
            <div className="flex w-full justify-center gap-4">
              <Button
                variant="solid"
                color="baoPink"
                href="https://app.baofinance.io/vaults"
              >
                BORROW NOW
              </Button>
              <Button
                variant="solid"
                color="baoWhite"
                href="https://info.bao.finance/docs/protocol/borrow-vaults"
              >
                EXPLORE STRATEGIES
              </Button>
            </div>
          </div>

          <div className="grid gap-8">
            <TokenBox title="Supply" tokens={supplyTokens} />
            <TokenBox title="Borrow" tokens={borrowTokens} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowAnimation {
          0% {
            d: path(M0 100 Q 400 0, 800 100 T 1600 100);
          }
          50% {
            d: path(M0 150 Q 450 50, 850 150 T 1600 150);
          }
          100% {
            d: path(M0 100 Q 400 0, 800 100 T 1600 100);
          }
        }
        .animate-flow-1 {
          animation: flowAnimation 20s ease-in-out infinite;
        }
        .animate-flow-2 {
          animation: flowAnimation 25s ease-in-out infinite;
        }
        .animate-flow-3 {
          animation: flowAnimation 30s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

function TokenBox({ title, tokens }) {
  return (
    <div className="relative flex flex-col items-center rounded-xl bg-baoBlack p-8 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="mb-6 font-bakbak text-2xl">{title}</h3>
      <div className="relative z-10 flex w-full justify-center">
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-5">
          {tokens.map((token, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative flex h-16 w-16 items-center justify-center">
                <Image
                  src={token.imageSrc}
                  alt={`${token.name} Logo`}
                  width={50}
                  height={50}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                {token.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-baoPink bg-opacity-80">
                    <span className="text-xs font-bold text-white">
                      COMING SOON
                    </span>
                  </div>
                )}
              </div>
              <h4 className="mt-2 text-center text-sm">{token.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Borrow
