import React, { useState, useEffect, useCallback } from 'react'
import styles from './BaoDerivatives.module.css'
import backgroundStyles from './BaoDerivativesBackground.module.css'
import baoUSDLogo from '../images/logos/baousd.svg'
import baoETHLogo from '../images/logos/baoeth.svg'

const BaoDerivatives = () => {
  const [squares, setSquares] = useState([])
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const generateSquares = useCallback(() => {
    const squareSize = 14 // 6px square + 6px gap
    const numSquaresX = Math.ceil(window.innerWidth / squareSize)
    const numSquaresY = Math.ceil(500 / squareSize) // Adjust this value based on your section height
    const totalSquares = numSquaresX * numSquaresY

    return Array.from({ length: totalSquares }, (_, i) => {
      const baseOpacity = Math.random() * 0.3 + 0.05 // Random opacity between 0.1 and 0.6
      const shouldTwinkle = Math.random() < 0.3 // 30% chance of twinkling
      const twinkleClass = shouldTwinkle ? backgroundStyles.twinkle : ''
      const animationDelay = Math.random() * 5 // Random delay up to 5 seconds

      return {
        baseOpacity,
        twinkleClass,
        animationDelay,
        x: i % numSquaresX,
        y: Math.floor(i / numSquaresX),
      }
    })
  }, [])

  useEffect(() => {
    setSquares(generateSquares())

    const handleResize = () => {
      setSquares(generateSquares())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [generateSquares])

  const isAdjacent = (index, hoveredIndex, numSquaresX) => {
    if (hoveredIndex === null) return false
    const x1 = index % numSquaresX
    const y1 = Math.floor(index / numSquaresX)
    const x2 = hoveredIndex % numSquaresX
    const y2 = Math.floor(hoveredIndex / numSquaresX)
    return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1
  }

  return (
    <section
      className={`${styles.derivativesSection} ${backgroundStyles.backgroundContainer}`}
    >
      <div className={backgroundStyles.background}>
        {squares.map((square, index) => (
          <div
            key={index}
            className={`${backgroundStyles.square} ${square.twinkleClass}`}
            style={{
              backgroundColor: `rgba(226, 26, 83, ${
                isAdjacent(
                  index,
                  hoveredIndex,
                  Math.ceil(window.innerWidth / 12)
                )
                  ? 0
                  : square.baseOpacity
              })`,
              animationDelay: `${square.animationDelay}s`,
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.headerBannerContainer}>
          <div className={styles.headerContainer}></div>
        </div>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <div className={styles.logoContainer}>
              <img src={baoUSDLogo} alt="baoUSD Logo" className={styles.logo} />
            </div>
            <h3 className={styles.boxTitle}>baoUSD</h3>
            <p className={styles.boxDescription}>
              Backed by ETH and other ETH backed tokens. A safe haven for those
              that favor decentralization and transparency.
            </p>
          </div>
          <div className={styles.box}>
            <div className={styles.logoContainer}>
              <img src={baoETHLogo} alt="baoETH Logo" className={styles.logo} />
            </div>
            <h3 className={styles.boxTitle}>baoETH</h3>
            <p className={styles.boxDescription}>
              Backed by ETH. baoETH solves high borrow rates for ETH. Unlike
              traditional markets, baoETH does not need to be deposited before
              it is borrowed unlocking greater capital efficiency for borrowers.
            </p>
          </div>
          <div className={styles.box}>
            <div className={styles.logoContainer}>
              <svg
                className={styles.logo}
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="#faf2e3"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                />
              </svg>
            </div>
            <h3 className={styles.boxTitle}>Coming Soon</h3>
            <p className={styles.boxDescription}>
              As long as there is a data feed for the price of the asset, bao
              will be able to create a derivative for it. Join the discussion on
              our discord server on which tokens to bring to life next!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BaoDerivatives
