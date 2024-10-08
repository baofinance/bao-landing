import React from 'react'
import styles from './Earn.module.css'
import { TwinklingBackground } from './TwinklingBackground'

export function Earn() {
  return (
    <section className={styles.earnSection}>
      <TwinklingBackground
        color="rgba(226, 26, 83, 0.1)"
        squareSize={20}
        coverage={0.4}
      />
      <div className={styles.earnBackgroundOverlay}></div>
      <div className={styles.earnContent}>
        <div className={styles.earnHeader}>
          <h2 className={styles.earnHeading}>EARN</h2>
          <p className={styles.earnSubheading}>BY PROVIDING LIQUIDITY.</p>
          <div className={styles.earnBanner}>
            <span className={styles.earnBannerText}>UP TO 50% vAPR</span>
          </div>
        </div>

        <div className={styles.earnItem}>
          <h3>AMM liquidity</h3>
          <p>
            Deposit into ETH or USD pegged pools providing swap liquidity and
            earn AURA and BAL tokens
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.depositButton}>Deposit</button>
            <button className={styles.learnMoreButton}>Learn More</button>
          </div>
        </div>

        <div className={styles.earnItem}>
          <h3>Stability pools</h3>
          <p>Deposit derivatives and earn ETH for securing the protocol</p>
          <div className={styles.buttonContainer}>
            <button className={styles.depositButton} disabled>
              Deposit
            </button>
            <button className={styles.learnMoreButton}>Learn More</button>
          </div>
          <div className={styles.comingSoonStamp}>Coming Soon</div>
        </div>

        <div className={styles.earnItem}>
          <h3>MultiLend</h3>
          <p>Lend in multiple markets simultaneously with a single deposit.</p>
          <div className={styles.buttonContainer}>
            <button className={styles.depositButton} disabled>
              Deposit
            </button>
            <button className={styles.learnMoreButton}>Learn More</button>
          </div>
          <div className={styles.comingSoonStamp}>Coming Soon</div>
        </div>
      </div>
    </section>
  )
}
