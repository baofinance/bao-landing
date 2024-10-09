import React, { useState, useEffect } from 'react'
import { Container } from '@/components/Container'
import styles from './Hero.module.scss'
import { AnimatedBackground } from './AnimatedBackground'
import { Button } from '@/components/Button' // Add this line

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

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500) // This should match the transition duration in CSS
    }, 2000)

    return () => clearInterval(interval)
  }, [currentWordIndex, words.length])

  return (
    <div>
      <AnimatedBackground />
      <Container className="relative flex h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="max-w-2xl lg:max-w-none">
            <div className="flex flex-col space-y-6">
              <div className={styles.wordContainer}>
                {words.map((word, index) => (
                  <p
                    key={word}
                    className={`${styles.word} ${
                      index === currentWordIndex
                        ? styles.active
                        : index === previousWordIndex && isTransitioning
                        ? styles.previous
                        : ''
                    }`}
                  >
                    {word}
                  </p>
                ))}
              </div>
              <div className={styles.heroheaderContainer}>
                <div className={styles.heroheader}>
                  <p>TOKENIZED</p>
                  <p>DERIVATIVES</p>
                </div>
              </div>
              <p className={styles.taglineText}>
                For the rebels, builders, and dreamers of tomorrow&apos;s
                economy.
              </p>
              <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
                <div className="flex gap-x-6">
                  <Button
                    href="https://info.bao.finance/docs"
                    variant="solid"
                    color="baoWhite"
                    className="font-inter rounded-none bg-baoWhite px-8 py-4 text-xl font-normal text-baoBlack transition-colors duration-300 hover:bg-opacity-90" // Added rounded-none
                  >
                    Learn More
                  </Button>
                  <Button
                    href="https://app.baofinance.io"
                    variant="solid"
                    color="baoPink"
                    className="font-inter rounded-none px-8 py-4 text-xl font-normal" // Added rounded-none
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
