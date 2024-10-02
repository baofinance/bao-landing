import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from '@/components/Button'
import styles from './ActiveVaults.module.css'
import yieldAnimation from '@/images/JSON/yield.json'
import dynamic from 'next/dynamic'
import {
  FaQuestion,
  FaCoins,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaRocket,
  FaExchangeAlt,
  FaHandHoldingUsd,
} from 'react-icons/fa'
import Image from 'next/image'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const LowImpermanentLossIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="#e21a53"
    strokeWidth="2"
    fill="none"
  >
    <path d="M3 3v18h18" />
    <path d="M3 15l5-5 4 4 8-8" />
    <path d="M13 6h5v5" />
  </svg>
)

const HighYieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="#e21a53"
    strokeWidth="2"
    fill="none"
  >
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
)

const LowComplexityIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="#e21a53"
    strokeWidth="2"
    fill="none"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
)

const BorrowingBackground = () => {
  const [squares, setSquares] = useState([])

  const generateSquares = useCallback(() => {
    const squareSize = 14 // 12px square + 2px gap
    const numSquaresX = Math.ceil(window.innerWidth / squareSize)
    const numSquaresY = Math.ceil(window.innerHeight / squareSize)
    const totalSquares = numSquaresX * numSquaresY

    return Array.from({ length: totalSquares }, (_, i) => {
      const baseOpacity = Math.random() * 0.15 + 0.05 // Random opacity between 0.05 and 0.2
      const shouldTwinkle = Math.random() < 0.2 // 20% chance of twinkling
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
    <div className={styles.borrowingBackground}>
      {squares.map((square) => (
        <div
          key={square.key}
          className={`${styles.borrowingSquare} ${square.twinkleClass}`}
          style={{
            backgroundColor: `rgba(226, 26, 83, ${square.baseOpacity})`,
            animationDelay: `${square.animationDelay}s`,
          }}
        />
      ))}
    </div>
  )
}

const supplyTokens = [
  { name: 'wstETH', imageSrc: '/tokens/wstETH.png' },
  { name: 'rETH', imageSrc: '/tokens/rETH.png' },
  { name: 'ETH', imageSrc: '/tokens/ETH.png' },
  { name: 'weETH', imageSrc: '/tokens/weETH.webp' }, // Changed to .webp
  { name: 'sUSDe', imageSrc: '/tokens/sUSDe.webp' }, // Changed to .webp
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

export function ActiveVaults() {
  const lottieRef = React.useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [LottieComponent, setLottieComponent] = useState(null)
  const [animationData, setAnimationData] = useState(null)
  const [yieldText, setYieldText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const fullText = 'Up to 50% vAPR'

  const [hoveredAnimation, setHoveredAnimation] = useState(null)
  const animationRefs = useRef([])

  const headingRef = useRef(null)
  const bannerRef = useRef(null)

  const mintLottieRef1 = useRef(null)
  const mintLottieRef2 = useRef(null)
  const mintLottieRef3 = useRef(null)
  const mintLottieRef4 = useRef(null)
  const mintLottieRef5 = useRef(null)
  const [mintAnimationData, setMintAnimationData] = useState(null)
  const [hoveredMintAnimation, setHoveredMintAnimation] = useState(null)

  const [currentStrategyIndex, setCurrentStrategyIndex] = useState(0)
  const [previousStrategyIndex, setPreviousStrategyIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Initialize previousStrategyIndex after component mount
    setPreviousStrategyIndex(borrowStrategies.length - 1)

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

  const handleMintMouseEnter = (index) => {
    setHoveredMintAnimation(index)
  }

  const handleMintMouseLeave = () => {
    setHoveredMintAnimation(null)
  }

  useEffect(() => {
    fetch('/images/mint.json')
      .then((response) => response.json())
      .then((data) => setMintAnimationData(data))
      .catch((error) => console.error('Error loading mint animation:', error))
  }, [])

  useEffect(() => {
    const adjustBannerWidth = () => {
      if (headingRef.current && bannerRef.current) {
        const headingWidth = headingRef.current.offsetWidth
        bannerRef.current.style.width = `${headingWidth}px`
      }
    }

    adjustBannerWidth() // Initial adjustment
    window.addEventListener('resize', adjustBannerWidth)

    return () => {
      window.removeEventListener('resize', adjustBannerWidth)
    }
  }, [])

  useEffect(() => {
    let timer
    if (isTyping) {
      if (yieldText !== fullText) {
        timer = setTimeout(() => {
          setYieldText(fullText.slice(0, yieldText.length + 1))
        }, 50)
      } else {
        timer = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (yieldText) {
        timer = setTimeout(() => {
          setYieldText(yieldText.slice(0, -1))
        }, 30)
      } else {
        timer = setTimeout(() => {
          setIsTyping(true)
        }, 1000)
      }
    }
    return () => clearTimeout(timer)
  }, [yieldText, isTyping])

  useEffect(() => {
    Promise.all([
      import('lottie-react'),
      import('@/images/JSON/yield.json'),
    ]).then(([lottieModule, animationModule]) => {
      setLottieComponent(() => lottieModule.default)
      setAnimationData(animationModule.default)
    })
  }, [])

  useEffect(() => {
    if (lottieRef.current) {
      if (hoveredAnimation !== null) {
        lottieRef.current.play()
        setIsAnimating(true)
      } else if (isAnimating) {
        // Allow the current loop to complete
        const currentFrame = lottieRef.current.currentFrame
        const totalFrames = lottieRef.current.totalFrames

        if (currentFrame < totalFrames - 1) {
          const completeAnimation = () => {
            lottieRef.current.pause()
            setIsAnimating(false)
            lottieRef.current.removeEventListener('complete', completeAnimation)
          }

          lottieRef.current.addEventListener('complete', completeAnimation)
        } else {
          lottieRef.current.pause()
          setIsAnimating(false)
        }
      }
    }
  }, [hoveredAnimation, isAnimating])

  const handleMouseEnter = (index) => {
    setHoveredAnimation(index)
  }

  const handleMouseLeave = () => {
    setHoveredAnimation(null)
  }

  useEffect(() => {
    const checkMousePosition = (event) => {
      const { clientX, clientY } = event
      let isOverAnimation = false

      animationRefs.current.forEach((ref, index) => {
        if (ref && ref.contains(document.elementFromPoint(clientX, clientY))) {
          isOverAnimation = true
          setHoveredAnimation(index)
        }
      })

      if (!isOverAnimation) {
        setHoveredAnimation(null)
      }
    }

    window.addEventListener('mousemove', checkMousePosition)
    return () => window.removeEventListener('mousemove', checkMousePosition)
  }, [])

  const renderFeatureItem = (
    icon,
    header,
    subtext,
    buttonText,
    buttonHref,
    isDisabled = false
  ) => (
    <div
      className={`${styles.featureItem} cursor-pointer flex-col items-center justify-center shadow-2xl`}
    >
      <div className={styles.featureIconWrapper}>
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className={styles.featureContent}>
        <div className={styles.featureHeader}>{header}</div>
        <div className={styles.featureSubtext}>{subtext}</div>
        <div className={styles.buttonContainer}>
          {isDisabled ? (
            <button
              className={`${styles.baoButton} ${styles.inactiveButton}`}
              disabled
            >
              {buttonText}
            </button>
          ) : (
            <a href={buttonHref} className={styles.baoButton}>
              {buttonText}
            </a>
          )}
          <a
            href="#"
            className={`${styles.baoButton} ${styles.learnMoreButton}`}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className={styles.yieldSection}>
        <div className={styles.yieldContent}>
          <div className={styles.leftContent}>
            <div className={styles.headingBannerContainer}>
              <h2 className={styles.yieldHeading}>EARN</h2>
              <p className={styles.yieldSubheading}>BY PROVIDING LIQUIDITY.</p>
            </div>
            <div className={styles.yieldBannerContainer}>
              <div className={styles.yieldBanner}>
                <span className={styles.yieldBannerText}>UP TO 50% vAPR</span>
              </div>
            </div>
            <div className={styles.animationsContainer}>
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={styles.animationWrapper}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  ref={(el) => (animationRefs.current[index] = el)}
                >
                  {animationData && (
                    <Lottie
                      animationData={animationData}
                      loop={hoveredAnimation === index}
                      autoplay={hoveredAnimation === index}
                      style={{ width: '100%', height: '100%' }}
                      rendererSettings={{
                        preserveAspectRatio: 'xMidYMid slice',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightContent}>
            <ul className={styles.featureList}>
              {renderFeatureItem(
                <FaExchangeAlt size={32} />, // Adjust the size here
                'AMM liquidity',
                'Deposit into ETH or USD pegged pools providing swap liquidity and earn AURA and BAL tokens',
                'Deposit',
                '#'
              )}
              {renderFeatureItem(
                <FaShieldAlt size={32} />, // Adjust the size here
                'Stability pools',
                'Deposit derivatives and earn ETH for securing the protocol',
                'Coming Soon',
                '#',
                true
              )}
              {renderFeatureItem(
                <FaHandHoldingUsd size={32} />, // Adjust the size here
                'MultiLend',
                'Lend in multiple markets simultaneously with a single deposit.',
                'Coming Soon',
                '#',
                true
              )}
            </ul>
          </div>
        </div>
      </div>

      <section className={styles.borrowingSection}>
        <BorrowingBackground />
        <div className={styles.borrowingContent}>
          <div className={styles.borrowingHeader}>
            <h2 className={styles.activeVaultsHeading}>BORROW</h2>
            <p className={styles.activeVaultsSubheading}>AT THE BEST RATES</p>
            <Button href="#" className={styles.baoButton}>
              EXPLORE MARKETS
            </Button>
          </div>
          <div className={styles.borrowBoxesContainer}>
            <div className={styles.borrowBox}>
              <h3>Supply</h3>
              <div className={styles.tokenGrid}>
                {supplyTokens.map((token, index) => (
                  <div key={index} className={styles.tokenItem}>
                    <Image
                      src={token.imageSrc}
                      alt={`${token.name} Logo`}
                      width={50}
                      height={50}
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
                    />
                    <h4>{token.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.strategyContainer}>
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
          <Button href="#" className={styles.baoButton}>
            EXPLORE STRATEGIES
          </Button>
        </div>
      </section>

      <div className={styles.mintSection}>
        <div className={styles.mintBackground}></div>
        <div className={styles.mintContent}>
          <div className={styles.mintIntroContainer}>
            <div className={styles.headingBannerContainer}>
              <h2 className={styles.mintHeading} ref={headingRef}>
                MINT
              </h2>
              <p className={styles.mintSubheading}>PEGGED OR LEVERAGE TOKENS</p>
            </div>
            <div className={styles.mintBannerContainer}>
              <div className={styles.mintBanner}>
                <span className={styles.mintBannerText}>Coming Soon</span>
              </div>
            </div>
            {mintAnimationData && (
              <div className={styles.animationsContainer}>
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={styles.animationWrapper}
                    onMouseEnter={() => handleMintMouseEnter(index)}
                    onMouseLeave={handleMintMouseLeave}
                  >
                    <Lottie
                      animationData={mintAnimationData}
                      loop={hoveredMintAnimation === index}
                      autoplay={hoveredMintAnimation === index}
                      style={{ width: '100%', height: '100%' }}
                      rendererSettings={{
                        preserveAspectRatio: 'xMidYMid slice',
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.mintExplainerWrapper}>
            <div className={styles.mintExplainerContainer}>
              <div className={styles.explainerStep}>
                <div className={styles.explainerIconContainer}>
                  <div className={styles.explainerIcon}>
                    <FaQuestion />
                  </div>
                </div>
                <div className={styles.explainerContent}>
                  <h3>What is the Minter?</h3>
                  <p>
                    The Minter is a tool that allows you to create either Pegged
                    tokens or Leveraged tokens using your ETH as collateral.
                  </p>
                </div>
              </div>
              <div className={styles.explainerStep}>
                <div className={styles.explainerIconContainer}>
                  <div className={styles.explainerIcon}>
                    <FaCoins />
                  </div>
                </div>
                <div className={styles.explainerContent}>
                  <h3>Pegged Tokens</h3>
                  <p>
                    These tokens are designed to maintain a stable value, fixed
                    to a specific price feed.{' '}
                  </p>
                </div>
              </div>
              <div className={styles.explainerStep}>
                <div className={styles.explainerIconContainer}>
                  <div className={styles.explainerIcon}>
                    <FaChartLine />
                  </div>
                </div>
                <div className={styles.explainerContent}>
                  <h3>Leveraged Tokens</h3>
                  <p>
                    These tokens amplify the price movements of ETH. If ETH goes
                    up, these go up even more. However, losses are also
                    amplified, so they carry higher risk.
                  </p>
                </div>
              </div>
              <div className={styles.explainerStep}>
                <div className={styles.explainerIconContainer}>
                  <div className={styles.explainerIcon}>
                    <FaCogs />
                  </div>
                </div>
                <div className={styles.explainerContent}>
                  <h3>How It Works</h3>
                  <p>
                    When you deposit ETH, you choose to mint either Pegged
                    tokens or Leveraged tokens. The system uses your ETH as
                    collateral to back the newly created tokens.
                  </p>
                </div>
              </div>
              <div className={styles.explainerStep}>
                <div className={styles.explainerIconContainer}>
                  <div className={styles.explainerIcon}>
                    <FaShieldAlt />
                  </div>
                </div>
                <div className={styles.explainerContent}>
                  <h3>Stability Pools</h3>
                  <p>
                    The system is kept stable through Stability Pools. Pegged
                    token holders can deposit their tokens into these pools to
                    earn a share of the collateral&apos;s yield in exchange for
                    securing the system.
                  </p>
                </div>
              </div>
              <div className={styles.explainerStep}>
                <div className={styles.explainerIconContainer}>
                  <div className={styles.explainerIcon}>
                    <FaRocket />
                  </div>
                </div>
                <div className={styles.explainerContent}>
                  <h3>Why Use It?</h3>
                  <p>
                    You can create stable assets or leveraged positions directly
                    on the blockchain. This reduces reliance on traditional
                    finance and centralized entities, potentially offering more
                    control and transparency.
                  </p>
                </div>
              </div>
              <div className={styles.scrollHintContainer}>
                <div className={styles.scrollHint}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
