import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Security.module.css'

// Remove the import for immunefiLogo

const SecurityBackground = () => {
  const [squares, setSquares] = useState([])

  const generateSquares = useCallback(() => {
    const squareSize = 14 // 12px square + 2px gap
    const numSquaresX = Math.ceil(window.innerWidth / squareSize)
    const numSquaresY = Math.ceil(window.innerHeight / squareSize)
    const totalSquares = numSquaresX * numSquaresY

    return Array.from({ length: totalSquares }, (_, i) => {
      const baseOpacity = Math.random() * 0.15 + 0 // Random opacity between 0.05 and 0.2
      const shouldTwinkle = Math.random() < 0.7 // 20% chance of twinkling
      const twinkleClass = shouldTwinkle ? styles.twinkle : ''
      const animationDelay = Math.random() * 5 // Random delay up to 5 seconds

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
          <h2 className={styles.securityHeading}>SECURED</h2>
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
              src="/images/logos/immunefi.svg" // Updated to use the correct path and file format
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
