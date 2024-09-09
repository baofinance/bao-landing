import React from 'react';
import { Button } from '@/components/Button'
import styles from './ActiveVaults.module.css'
import yieldAnimation from '@/images/JSON/yield.json'
import dynamic from 'next/dynamic'

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export function ActiveVaults() {
  return (
    <>
      <section className={styles.yieldSection}>
        <div className={styles.yieldBackground}></div>
        <div className={styles.yieldContent}>
          <div className={styles.animationContainer}>
            <div className={styles.animationWrapper}>
              <Lottie animationData={yieldAnimation} loop={true} />
            </div>
          </div>
          
          <div className={styles.contentContainer}>
            <div>
              <h2 className={styles.yieldHeading}>Maximize Your Yield</h2>
              <div className={styles.contentText}>
                <p>
                  Provide liquidity in our USD and ETH pegged pools to earn high
                  yields with low risk
                </p>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <span className={styles.highlightText}>
                Up to&nbsp;<span className={styles.subtlePulse}>50% vAPR</span>
              </span>
              <Button href="https://app.baofinance.io/earn" color="baoPink" className={styles.baoButton}>
                Start Earning
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <div className={styles.borrowingSection}>
        <div className={styles.borrowingBackground}></div>
        <div className={styles.borrowingContent}>
          <div className={styles.borrowingHeader}>
            <h2 className={styles.borrowHeading}>Borrow at the Best Rates</h2>
            <p>Deposit yield-bearing collaterals and borrow pegged tokens to unlock new DeFi strategies</p>
            <Button href="#strategies" variant="solid" color="baoPink">
              Explore strategies
            </Button>
          </div>
          
          <div className={styles.borrowOptions}>
            <div className={styles.borrowItem}>
              <h3>baoUSD</h3>
              <ul>
                <li>Dollar Pegged token</li>
                <li>Battle tested since 2022</li>
                <li>Borrow from just 0.2% APR!</li>
              </ul>
              <Button color="baoPink">Borrow baoUSD</Button>
            </div>
            <div className={styles.borrowItem}>
              <h3>baoETH</h3>
              <ul>
                <li>ETH pegged token</li>
                <li>Resiliently pegged since 2023</li>
                <li>Borrow from just 0.2% APR!</li>
              </ul>
              <Button color="baoPink">Borrow baoETH</Button>
            </div>
            <div className={styles.borrowItem}>
              <h3>Coming soon</h3>
              <ul>
                <li>More pegged tokens!</li>
                <li>From RWA to new markets</li>
                <li>Tokens linked to any data feed</li>
              </ul>
              <Button color="baoPink" disabled>Coming Soon</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}









