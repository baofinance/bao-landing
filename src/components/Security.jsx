import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Security.module.css'

const SecurityBackground = () => {
  const generateSquares = useCallback(() => {
    const squareSize = 14 // 12px square + 2px gap
    const numSquaresX = Math.ceil(window.innerWidth / squareSize)
    const numSquaresY = Math.ceil(window.innerHeight / squareSize)
    const totalSquares = numSquaresX * numSquaresY

    return Array.from({ length: totalSquares }, (_, i) => {
      const baseOpacity = Math.random() * 0.3 + 0.05
      const shouldTwinkle = Math.random() < 0.3
      const twinkleClass = shouldTwinkle ? styles.twinkle : ''
      const animationDelay = Math.random() * 5

      return {
        key: i,
        baseOpacity,
        twinkleClass,
        animationDelay,
        style: {
          gridColumn: (i % numSquaresX) + 1,
          gridRow: Math.floor(i / numSquaresX) + 1,
        },
      }
    })
  }, [])

  const [squares, setSquares] = useState([])

  useEffect(() => {
    setSquares(generateSquares())
    const handleResize = () => setSquares(generateSquares())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [generateSquares])

  return (
    <div className={styles.securityBackground}>
      {squares.map((square) => (
        <div
          key={square.key}
          className={`${styles.securitySquare} ${square.twinkleClass}`}
          style={{
            ...square.style,
            backgroundColor: `rgba(226, 26, 83, ${square.baseOpacity})`,
            animationDelay: `${square.animationDelay}s`,
          }}
        />
      ))}
    </div>
  )
}

export function Security() {
  return (
    <div className={styles.securitySection}>
      <SecurityBackground />
      <div className={styles.securityContent}>
        <div className={styles.securityHeadingContainer}>
          <h2 className={styles.securityHeading}>SECURE</h2>
          <p className={styles.securitySubheading}>FROM ALL ANGLES</p>
        </div>
        <div className={styles.securityGrid}>
          <div className={styles.securityItem}>
            <h3>Audits</h3>
            <p>
              All contracts are continuously monitored by white hat hackers
              since 2021.
            </p>
            <Image
              src="/path/to/immunefi-logo.png"
              alt="Immunefi Logo"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.securityItem}>
            <h3>Collateral</h3>
            <p>
              Bao only allows ETH and ETH-backed tokens with the highest
              decentralization standards. Approved backing assets include ETH,
              wstETH, rETH, and LUSD. All new collaterals undergo a rigorous
              risk assessment process.
            </p>
          </div>
          <div className={styles.securityItem}>
            <h3>Decentralization</h3>
            <p>
              While there are some centralized aspects initially, with
              multi-sigs controlling various parameters, we are actively working
              on removing trust and will not stop until the protocol is
              completely trustless.
            </p>
          </div>
          <div className={styles.securityItem}>
            <h3>Pegging</h3>
            <p>
              baoUSD and baoETH maintain strong pegs through various mechanisms
              including variable borrow rates, Liquidity Balancers, and
              redeemability (coming soon with the Minter).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
