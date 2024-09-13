import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/Button'
import styles from './ActiveVaults.module.css'
import yieldAnimation from '@/images/JSON/yield.json'
import mintAnimation from '@/images/JSON/mint.json' // Add this line
import dynamic from 'next/dynamic'
import { FaChartLine, FaShieldAlt, FaCoins, FaQuestion, FaCogs, FaRocket } from 'react-icons/fa'; // Import icons
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
  const lottieRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);
  const [LottieComponent, setLottieComponent] = useState(null);
  const [animationData, setAnimationData] = useState(null);
  const { text: yieldText, isTyping: isYieldTyping } = useTypingEffect(['Up to 50% vAPR'], 100, 1000);
  const { text: comingSoonText, isTyping: isComingSoonTyping } = useTypingEffect(['Coming soon'], 100, 2000);

  useEffect(() => {
    Promise.all([
      import('lottie-react'),
      import('@/images/JSON/yield.json')
    ]).then(([lottieModule, animationModule]) => {
      setLottieComponent(() => lottieModule.default);
      setAnimationData(animationModule.default);
    });
  }, []);

  const handleMouseEnter = () => {
    setIsAnimating(true);
    lottieRef.current?.goToAndPlay(0);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
    lottieRef.current?.pause();
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    lottieRef.current?.pause();
  };

  return (
    <>
      <div className={styles.yieldSection}>
        <div className={styles.yieldBackground}></div>
        <div className={styles.yieldContent}>
          <div className={styles.contentContainer}>
            <div className={styles.headingWrapper}>
              <h2 className={styles.yieldHeading}>
                <span className={styles.yieldHeadingSmall}></span>
                <span className={styles.yieldHeadingLarge}>MAXIMIZE YOUR YIELD</span>
              </h2>
              <div className={styles.yieldBanner}>
                <p className={styles.yieldBannerText}>
                  {yieldText}
                  <span className={`${styles.cursor} ${isYieldTyping ? styles.blinking : ''}`}>|</span>
                </p>
              </div>
            </div>
            <div className={styles.contentText}>
              <p>Provide liquidity into our ETH or USD pegged pools.</p>
            </div>
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
            </div>
            <div className={styles.verticalSeparator}></div>
          </div>
          
          <div 
            className={styles.animationContainer} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`${styles.animationWrapper} ${isAnimating ? styles.animating : ''}`}>
              {LottieComponent && animationData && (
                <LottieComponent 
                  lottieRef={lottieRef}
                  animationData={animationData}
                  loop={false}
                  autoplay={false}
                  onComplete={handleAnimationComplete}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
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
        </div>
      </div>
      
      <section className={styles.borrowingSection}>
        <div className={styles.borrowingBackground}></div>
        <div className={styles.borrowingContent}>
          <div className={styles.borrowingHeader}>
            <h2 className={styles.borrowHeading}>BORROW AT THE BEST RATES</h2>
            <p>Deposit yield-bearing collaterals and borrow pegged tokens to unlock new DeFi strategies</p>
            <a href="#strategies" className={styles.baoButton}>
              Explore strategies
            </a>
          </div>
          
          <div className={styles.borrowOptions}>
            <div className={styles.borrowItem}>
              <h3>baoUSD</h3>
              <ul>
                <li>Dollar Pegged token</li>
                <li>Battle tested since 2022</li>
                <li>Borrow from just 0.2% APR!</li>
              </ul>
              <a href="#" className={styles.baoButton}>
                Borrow baoUSD
              </a>
            </div>
            <div className={styles.borrowItem}>
              <h3>baoETH</h3>
              <ul>
                <li>ETH pegged token</li>
                <li>Resiliently pegged since 2023</li>
                <li>Borrow from just 0.2% APR!</li>
              </ul>
              <a href="#" className={styles.baoButton}>
                Borrow baoETH
              </a>
            </div>
            <div className={styles.borrowItem}>
              <h3>Coming soon</h3>
              <ul>
                <li>More pegged tokens!</li>
                <li>From RWA to new markets</li>
                <li>Tokens linked to any data feed</li>
              </ul>
              <a href="#" className={styles.baoButton} disabled>
                Find out more
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <div className={styles.mintSection}>
        <div className={styles.mintBackground}></div>
        <div className={styles.mintContent}>
          <div className={styles.mintIntroContainer}>
            <div className={styles.headingBannerContainer}>
              <h2 className={styles.mintHeading}>THE MINTER</h2>
              <div className={styles.comingSoonBanner}>
                <div className={styles.comingSoonTextContainer}>
                  <p className={styles.comingSoonText}>
                    {comingSoonText}
                    <span className={`${styles.cursor} ${isComingSoonTyping ? styles.blinking : ''}`}>|</span>
                  </p>
                </div>
              </div>
            </div>
            <p className={styles.mintDescription}>
              Swap ETH for pegged or leverage tokens
            </p>
            <div className={styles.mintVerticalSeparator}></div>
          </div>
          <div className={styles.mintExplainerWrapper}>
            <div className={styles.mintExplainerContainer}>
              <div className={styles.explainerStep}>
                <FaQuestion className={styles.explainerIcon} />
                <h3>What is the Minter?</h3>
                <p>The Minter is a tool that allows you to create either Pegged tokens or Leveraged tokens using your ETH as collateral.</p>
              </div>
              <div className={styles.explainerStep}>
                <FaCoins className={styles.explainerIcon} />
                <h3>Pegged Tokens</h3>
                <p>These tokens are designed to maintain a stable value, fixed to a specific price feed. </p>
              </div>
              <div className={styles.explainerStep}>
                <FaChartLine className={styles.explainerIcon} />
                <h3>Leveraged Tokens</h3>
                <p>These tokens amplify the price movements of ETH. If ETH goes up, these go up even more. However, losses are also amplified, so they carry higher risk.</p>
              </div>
              <div className={styles.explainerStep}>
                <FaCogs className={styles.explainerIcon} />
                <h3>How It Works</h3>
                <p>When you deposit ETH, you choose to mint either Pegged tokens or Leveraged tokens. The system uses your ETH as collateral to back the newly created tokens.</p>
              </div>
              <div className={styles.explainerStep}>
                <FaShieldAlt className={styles.explainerIcon} />
                <h3>Stability Pools</h3>
                <p>The system is kept stable through Stability Pools. Pegged token holders can deposit their tokens into these pools to earn a share of the collateral&apos;s yield in exchange for securing the system.</p>
              </div>
              <div className={styles.explainerStep}>
                <FaRocket className={styles.explainerIcon} />
                <h3>Why Use It?</h3>
                <p>You can create stable assets or leveraged positions directly on the blockchain. This reduces reliance on traditional finance and centralized entities, potentially offering more control and transparency.</p>
              </div>
              <div className={styles.scrollHintContainer}>
                <div className={styles.scrollHint}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}









