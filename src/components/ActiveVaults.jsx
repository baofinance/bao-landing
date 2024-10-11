import React from 'react'
import styles from './ActiveVaults.module.css'
import { TwinklingBackground } from './TwinklingBackground'
import { AnimatedBackground } from './AnimatedBackground'

export function ActiveVaults() {
  return (
    <div className={styles.mintSection}>
      <TwinklingBackground
        color="rgba(226, 26, 83, 0.1)"
        squareSize={20}
        coverage={0.4}
      />
      <div className={styles.mintBackgroundOverlay}></div>
      <div className={styles.animatedBackgroundWrapper}>
        <AnimatedBackground />
      </div>
      <div className={styles.mintContent}>
        <div className={styles.mintHeaderCenter}>
          <h2 className={styles.mintHeading}>MINT</h2>
          <p className={styles.mintSubheading}>PEGGED OR LEVERAGE TOKENS</p>
        </div>

        <div className={styles.mintProcessContainer}>
          <ol className={styles.mintProcessList}>
            {[
              {
                title: 'Deposit ETH',
                description:
                  'Securely deposit your ETH to start minting tokens.',
              },
              {
                title: 'Choose Token Type',
                description:
                  'Select between pegged or leveraged tokens based on your strategy.',
              },
              {
                title: 'Use or Store',
                description:
                  'Utilize your tokens in DeFi protocols or securely store them in your wallet.',
              },
            ].map((step, index) => (
              <li key={index}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <div className={styles.stepDescription}>
                    {step.description}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.comingSoonStamp}>Coming Soon</div>
      </div>
    </div>
  )
}
