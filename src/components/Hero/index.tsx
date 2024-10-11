import React, { useState, useEffect } from 'react'
import { Container } from '@/components/Container'
import { AnimatedBackground } from '../AnimatedBackground'
import { Button } from '@/components/Button'

export function Hero() {
  const words = ['Decentralized', 'Transparent', 'Secure', 'On-Chain']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [previousWordIndex, setPreviousWordIndex] = useState(words.length - 1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setPreviousWordIndex(currentWordIndex)
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    }, 2000)

    return () => clearInterval(interval)
  }, [currentWordIndex, words.length])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Container className="relative flex h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="max-w-2xl lg:max-w-none">
            <div className="flex flex-col space-y-6">
              <div className="relative mb-1 h-[1.8em] overflow-hidden text-left">
                {words.map((word, index) => (
                  <p
                    key={word}
                    className={`absolute left-0 flex h-full w-full items-center font-inter text-[clamp(16px,2.5vw,30px)] font-normal text-baoWhite transition-all duration-500 ${
                      index === currentWordIndex
                        ? 'translate-y-0 opacity-100'
                        : index === previousWordIndex && isTransitioning
                        ? '-translate-y-full opacity-0'
                        : 'translate-y-full opacity-0'
                    }`}
                  >
                    {word}
                  </p>
                ))}
              </div>
              <div className="w-full max-w-[1200px] p-0 text-left">
                <div className=" mt-2 font-bakbak text-[clamp(30px,8vw,100px)] font-bold uppercase leading-none text-baoWhite">
                  <p>TOKENIZED</p>
                  <p>DERIVATIVES</p>
                </div>
              </div>
              <p className="!text-md !mt-2 text-left font-inter font-normal text-baoWhite lg:text-xl xl:text-2xl">
                For the rebels, builders, and dreamers of tomorrow&apos;s
                economy.
              </p>
              <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
                <div className="flex gap-x-6">
                  <Button
                    href="https://info.bao.finance/docs"
                    variant="solid"
                    color="baoWhite"
                    className="text-lg"
                  >
                    Learn More
                  </Button>
                  <Button
                    href="https://app.baofinance.io"
                    variant="solid"
                    color="baoPink"
                    className="text-lg"
                  >
                    Launch App
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
