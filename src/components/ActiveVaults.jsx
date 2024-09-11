import React from 'react';
import { Button } from '@/components/Button'
import styles from './ActiveVaults.module.css'
import yieldAnimation from '@/images/JSON/yield.json'
import mintAnimation from '@/images/JSON/mint.json' // Add this line
import dynamic from 'next/dynamic'
import { FaChartLine, FaShieldAlt, FaCoins } from 'react-icons/fa'; // Import icons
import { useTypingEffect } from '../hooks/useTypingEffect'

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

// Custom icon components
const LowImpermanentLossIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="#e21a53" strokeWidth="2" fill="none">
    <path d="M3 3v18h18" />
    <path d="M3 15l5-5 4 4 8-8" />
    <path d="M13 6h5v5" />
  </svg>
);

const HighYieldIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="#e21a53" strokeWidth="2" fill="none">
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
);

const LowComplexityIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="#e21a53" strokeWidth="2" fill="none">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

export function ActiveVaults() {
  const words = ['Coming soon']
  const { text, isTyping } = useTypingEffect(words, 100, 1000)

  return (
    <>
      <section className={styles.yieldSection}>
        <div className={styles.yieldBackground}></div>
        <div className={styles.yieldContent}>
          <div className={styles.contentContainer}>
            <h2 className={styles.yieldHeading}>
              
              <span className={styles.yieldHeadingLarge}>MAXIMIZE YOUR YIELD</span>
            </h2>
            <h3>
              Provide liquidity into our ETH or USD pegged pools.
            </h3>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <LowImpermanentLossIcon className={styles.featureIcon} />
                <span>&nbsp;Low Impermanent Loss</span>
              </div>
              <div className={styles.featureItem}>
                <HighYieldIcon className={styles.featureIcon} />
                <span>&nbsp;High Yield</span>
              </div>
              <div className={styles.featureItem}>
                <LowComplexityIcon className={styles.featureIcon} />
                <span>&nbsp;Low Complexity</span>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <a href="https://app.baofinance.io/earn" className={styles.baoButton}>
                Start Earning
              </a>
              <span className={styles.highlightText}>
                &nbsp; Up to &nbsp;<span className={styles.subtlePulse}>50% vAPR</span>
              </span>
            </div>
            <div className={styles.verticalSeparator}></div>
          </div>
          
          <div className={styles.animationContainer}>
            <div className={styles.animationWrapper}>
              <Lottie animationData={yieldAnimation} loop={true} />
            </div>
          </div>
          
        
          
          <div className={styles.buttonWrapper}>
            <Button href="https://app.baofinance.io/earn" className={styles.baoButton}>
              Start Earning
            </Button>
            <span className={styles.highlightText}>
              &nbsp; Up to &nbsp;<span className={styles.subtlePulse}>50% vAPR</span>
            </span>
          </div>
        </div>
      </section>
      
      <section className={styles.borrowingSection}>
        <div className={styles.borrowingBackground}></div>
        <div className={styles.borrowingContent}>
          <div className={styles.borrowingHeader}>
            <h2 className={styles.borrowHeading}>BORROW AT THE BEST RATES</h2>
            <p>Deposit yield-bearing collaterals and borrow pegged tokens to unlock new DeFi strategies</p>
            <Button href="#strategies" className={styles.baoButton}>
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
              <Button href="#" className={styles.baoButton}>
                Borrow baoUSD
              </Button>
            </div>
            <div className={styles.borrowItem}>
              <h3>baoETH</h3>
              <ul>
                <li>ETH pegged token</li>
                <li>Resiliently pegged since 2023</li>
                <li>Borrow from just 0.2% APR!</li>
              </ul>
              <Button href="#" className={styles.baoButton}>
                Borrow baoETH
              </Button>
            </div>
            <div className={styles.borrowItem}>
              <h3>Coming soon</h3>
              <ul>
                <li>More pegged tokens!</li>
                <li>From RWA to new markets</li>
                <li>Tokens linked to any data feed</li>
              </ul>
              <Button href="#" className={styles.baoButton} disabled>
                Find out more
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <div className={styles.mintSection}>
        <div className={styles.mintBackground}></div>
        <div className={styles.mintContent}>
          <div className={styles.mintIntroContainer}>
            <h2 className={styles.mintHeading}>MINT</h2>
            <h3 className={styles.mintSubheading}>Innovative token creation</h3>
            <p className={styles.mintDescription}>
              Split collateral value between stable and leverage tokens with 100% capital efficiency.
            </p>
            <div className={styles.comingSoonContainer}>
              <p className={styles.comingSoonText}>
                {text}
                <span className={`${styles.cursor} ${isTyping ? styles.blinking : ''}`}>|</span>
              </p>
            </div>
          </div>
          <div className={styles.mintExplainerContainer}>
            <div className={styles.explainerStep}>
              <h4>Deposit ETH</h4>
              <p>Use ETH as collateral to mint baoUSD and levETH.</p>
            </div>
            <div className={styles.explainerStep}>
              <h4>Mint Tokens</h4>
              <p>Create baoUSD (stable) and levETH (leverage) tokens.</p>
            </div>
            <div className={styles.explainerStep}>
              <h4>Earn Yield</h4>
              <p>Participate in Stability Pools to earn yield while supporting the system.</p>
            </div>
            <div className={styles.explainerStep}>
              <h4>Redeem Anytime</h4>
              <p>Both tokens are fully redeemable for the backing ETH collateral.</p>
            </div>
            <div className={styles.explainerStep}>
              <h4>Future Expansion</h4>
              <p>Create synthetic tokens pegged to various data feeds.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}









