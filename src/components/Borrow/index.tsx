import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { AnimatedBackground } from '../AnimatedBackground'

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
  { name: 'baoBTC', imageSrc: '/tokens/baoBTC-pink.svg' },
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
      <div className="absolute inset-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-8 md:grid-cols-2 md:grid-rows-[auto,1fr]">
        <div className="flex flex-col items-center justify-center text-center md:col-span-2">
          <h2 className="font-bakbak text-[clamp(30px,8vw,100px)] font-bold uppercase leading-none">
            BORROW
          </h2>
          <p className="mb-4 font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase">
            AT THE BEST RATES
          </p>
          <button className="bg-baoPink px-6 py-3 font-bold uppercase text-baoWhite transition-colors duration-300 hover:bg-baoPink/80">
            EXPLORE MARKETS
          </button>
        </div>

        <div className="flex flex-col items-center justify-between">
          <div className="relative h-24 w-full overflow-hidden">
            {borrowStrategies.map((strategy, index) => (
              <p
                key={strategy}
                className={`absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-2xl transition-all duration-500 ${
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
          <button className="mt-4 bg-baoPink px-6 py-3 font-bold uppercase text-baoWhite transition-colors duration-300 hover:bg-baoPink/80">
            EXPLORE STRATEGIES
          </button>
        </div>

        <div className="relative flex flex-col items-center bg-baoBlack p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
          <h3 className="relative z-10 mb-4 font-bakbak text-2xl">Supply</h3>
          <div className="relative z-10 grid grid-cols-3 gap-4 sm:grid-cols-5">
            {supplyTokens.map((token, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={token.imageSrc}
                  alt={`${token.name} Logo`}
                  width={50}
                  height={50}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                <h4 className="mt-2 text-sm">{token.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col items-center bg-baoBlack p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
          <h3 className="relative z-10 mb-4 font-bakbak text-2xl">Borrow</h3>
          <div className="relative z-10 grid grid-cols-3 gap-4">
            {borrowTokens.map((token, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={token.imageSrc}
                  alt={`${token.name} Logo`}
                  width={50}
                  height={50}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                <h4 className="mt-2 text-sm">{token.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Borrow
