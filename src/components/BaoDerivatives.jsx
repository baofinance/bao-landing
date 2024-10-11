import React from 'react'
import styles from './BaoDerivatives.module.css'
import { TwinklingBackground } from './TwinklingBackground'
import { FaDollarSign, FaEthereum, FaBitcoin, FaQuestion } from 'react-icons/fa'

const BaoDerivatives = () => {
  return (
    <section className={styles.derivativesSection}>
      <TwinklingBackground
        color="rgba(226, 26, 83, 0.2)"
        squareSize={20}
        coverage={0.4}
      />
      <div className={styles.content}>
        <div className={styles.headerBannerContainer}>
          <div className={styles.headerContainer}></div>
        </div>

        <div className={styles.boxesContainer}>
          <div className={styles.box}>
            <div className={styles.iconContainer}>
              <FaDollarSign className={styles.icon} />
            </div>
            <h3 className={styles.boxTitle}>baoUSD</h3>
            <p className={styles.boxDescription}>
              Backed by ETH and other ETH backed tokens. A safe haven for those
              that favor decentralization and transparency.
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Get baoUSD</button>
              <button className={styles.button}>Borrow baoUSD</button>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.iconContainer}>
              <FaEthereum className={styles.icon} />
            </div>
            <h3 className={styles.boxTitle}>baoETH</h3>
            <p className={styles.boxDescription}>
              Backed by ETH. baoETH solves high borrow rates for ETH. Unlike
              traditional markets, baoETH does not need to be deposited before
              it is borrowed unlocking greater capital efficiency for borrowers.
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Get baoETH</button>
              <button className={styles.button}>Borrow baoETH</button>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.iconContainer}>
              <FaBitcoin className={styles.icon} />
            </div>
            <h3 className={styles.boxTitle}>baoBTC</h3>
            <p className={styles.boxDescription}>
              A decentralized, Bitcoin-pegged token on Ethereum, backed by ETH.
              Unlike wBTC and other alternatives, it avoids centralized control,
              offering a secure and transparent option for using Bitcoin in DeFi
              applications.
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Get baoBTC</button>
              <button className={styles.button}>Borrow baoBTC</button>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.iconContainer}>
              <FaQuestion className={styles.icon} />
            </div>
            <h3 className={styles.boxTitle}>bao???</h3>
            <p className={styles.boxDescription}>
              Imagine the possibilities: tokenized weather derivatives, real
              estate indices, or even sentiment analysis tokens. By leveraging
              diverse data feeds, we can create innovative financial instruments
              that reflect real-world events and trends, opening up new horizons
              for decentralized finance.
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Explore Ideas</button>
              <button className={styles.button}>Suggest a Derivative</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BaoDerivatives
