import React from 'react'
import styles from './Vision.module.css'
import { TwinklingBackground } from './TwinklingBackground'
import {
  FaExclamationTriangle,
  FaLightbulb,
  FaDatabase,
  FaRocket,
} from 'react-icons/fa'

export function Vision() {
  return (
    <section className={styles.visionSection}>
      <TwinklingBackground
        color="rgba(226, 26, 83, 0.1)"
        squareSize={20}
        coverage={0.4}
      />
      <div className={styles.visionContent}>
        <h2 className={styles.visionHeading}>A DUMPLING VS WALL STREET</h2>
        <p className={styles.visionSubheading}>
          WHY WE NEED ONCHAIN DERIVATIVES
        </p>

        <div className={styles.visionGrid}>
          <div className={styles.visionItem}>
            <div className={styles.iconContainer}>
              <FaExclamationTriangle className={styles.icon} />
            </div>
            <h3>The Problem</h3>
            <p>
              Traditional finance doesn&apos;t work for most people. It&apos;s a
              system designed for wealthy suits, where they own the data,
              control the marketplace, and change the rules when things
              don&apos;t go their way.
            </p>
          </div>

          <div className={styles.visionItem}>
            <div className={styles.iconContainer}>
              <FaLightbulb className={styles.icon} />
            </div>
            <h3>The Solution</h3>
            <p>
              We&apos;re not just putting finance on the blockchain. We&apos;re
              reimagining it. With tokenized derivatives, we can create a
              financial system that&apos;s truly open, transparent, and
              accessible to all.
            </p>
          </div>

          <div className={styles.visionItem}>
            <div className={styles.iconContainer}>
              <FaDatabase className={styles.icon} />
            </div>
            <h3>The Power of Data</h3>
            <p>
              By creating tokenized derivatives for any quantifiable event,
              we&apos;re building the world&apos;s most accurate and open
              financial data system. This is the key to unlocking true financial
              freedom.
            </p>
          </div>

          <div className={styles.visionItem}>
            <div className={styles.iconContainer}>
              <FaRocket className={styles.icon} />
            </div>
            <h3>Our Journey</h3>
            <p>
              We&apos;re at the start of a revolution. It won&apos;t be easy,
              but together, we can build a financial system that works for
              everyone, not just the privileged few.
            </p>
          </div>
        </div>

        <div className={styles.callToAction}>
          <p>
            We may be little dumplings, but together, we can take on Wall
            Street.
          </p>
          <button className={styles.joinButton}>Join the Revolution</button>
        </div>
      </div>
    </section>
  )
}

export default Vision
