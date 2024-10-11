import React from 'react'
import Image from 'next/image'
import styles from './Security.module.css'
import { FaShieldAlt, FaCoins, FaUsers, FaBalanceScale } from 'react-icons/fa'
import { TwinklingBackground } from './TwinklingBackground'

export function Security() {
  return (
    <div className={styles.securitySection}>
      <TwinklingBackground
        color="rgba(226, 26, 83, 0.1)"
        squareSize={20}
        coverage={0.4}
      />
      <div className={styles.securityContent}>
        <div className={styles.securityHeadingContainer}>
          <h2 className={styles.securityHeading}>SECURED</h2>
          <p className={styles.securitySubheading}>BY DESIGN</p>
        </div>
        <div className={styles.securityGrid}>
          <div className={styles.securityItem}>
            <div className={styles.randomOpacitySquares}></div>
            <div className={styles.securityIconContainer}>
              <FaShieldAlt className={styles.securityIcon} />
            </div>
            <h3>Audits</h3>
            <p>
              All contracts are continuously monitored by white hat hackers
              since 2021.
            </p>
            <Image
              src="/images/logos/immunefi.svg"
              alt="Immunefi Logo"
              width={100}
              height={30}
              className={styles.immunefiLogo}
            />
          </div>
          <div className={styles.securityItem}>
            <div className={styles.randomOpacitySquares}></div>
            <div className={styles.securityIconContainer}>
              <FaCoins className={styles.securityIcon} />
            </div>
            <h3>Collateral</h3>
            <p>
              Bao only allows ETH and ETH-backed tokens with the highest
              decentralization standards. Approved backing assets include ETH,
              wstETH, rETH, and LUSD. All new collaterals undergo a rigorous
              risk assessment process.
            </p>
          </div>
          <div className={styles.securityItem}>
            <div className={styles.randomOpacitySquares}></div>
            <div className={styles.securityIconContainer}>
              <FaUsers className={styles.securityIcon} />
            </div>
            <h3>Decentralization</h3>
            <p>
              While there are some centralized aspects initially, with
              multi-sigs controlling various parameters, we are actively working
              on removing trust and will not stop until the protocol is
              completely trustless.
            </p>
          </div>
          <div className={styles.securityItem}>
            <div className={styles.randomOpacitySquares}></div>
            <div className={styles.securityIconContainer}>
              <FaBalanceScale className={styles.securityIcon} />
            </div>
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

export default Security
