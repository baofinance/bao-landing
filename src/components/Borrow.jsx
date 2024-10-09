// src/components/Borrow.jsx

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Borrow.module.css'
import { TwinklingBackground } from './TwinklingBackground'
import { AnimatedBackground } from './AnimatedBackground'

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

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500) // This should match the transition duration in CSS
    }, 3000)

    return () => clearInterval(interval)
  }, [currentStrategyIndex])

  return (
    <section className={styles.borrowSection}>
      <TwinklingBackground
        color="rgba(226, 26, 83, 0.2)"
        squareSize={20}
        coverage={0.4}
      />
      <div className={styles.animatedBackgroundWrapper}>
        <AnimatedBackground />
      </div>
      <div className={styles.borrowContent}>
        <div className={styles.borrowHeader}>
          <h2 className={styles.borrowHeading}>BORROW</h2>
          <p className={styles.borrowSubheading}>AT THE BEST RATES</p>
          <button className={styles.exploreButton}>EXPLORE MARKETS</button>
        </div>

        <div className={styles.strategyContainer}>
          <div className={styles.strategyTextContainer}>
            {borrowStrategies.map((strategy, index) => (
              <p
                key={strategy}
                className={`${styles.strategy} ${
                  index === currentStrategyIndex
                    ? styles.active
                    : index === previousStrategyIndex && isTransitioning
                    ? styles.previous
                    : ''
                }`}
              >
                {strategy}
              </p>
            ))}
          </div>
          <button className={styles.exploreButton}>EXPLORE STRATEGIES</button>
        </div>

        <div className={styles.supplyBox}>
          <h3>Supply</h3>
          <div className={styles.tokenGrid}>
            {supplyTokens.map((token, index) => (
              <div key={index} className={styles.tokenItem}>
                <Image
                  src={token.imageSrc}
                  alt={`${token.name} Logo`}
                  width={50}
                  height={50}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                <h4>{token.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.borrowBox}>
          <h3>Borrow</h3>
          <div className={styles.tokenGrid}>
            {borrowTokens.map((token, index) => (
              <div key={index} className={styles.tokenItem}>
                <Image
                  src={token.imageSrc}
                  alt={`${token.name} Logo`}
                  width={50}
                  height={50}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                <h4>{token.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Borrow
