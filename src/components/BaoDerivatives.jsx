import React from 'react'
import styles from './BaoDerivatives.module.css'
import { TwinklingBackground } from './TwinklingBackground'
import backgroundStyles from './BaoDerivativesBackground.module.css'

const BaoETHLogo = () => (
  <svg
    id="a"
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 734.05 734.05"
  >
    <defs>
      <clipPath id="b">
        <circle cx="367.02" cy="367.02" r="360.39" fill="none" />
      </clipPath>
    </defs>
    <circle cx="367.02" cy="367.02" r="360.39" fill="#e23a52" />
    <g clipPath="url(#b)">
      <path
        d="M107.5,626.55l96.82-96.82M626.55,107.5l-98.5,98.5M107.5,107.5l99.82,99.82m419.23,419.23l-99.82-99.82M367.02,0V141.16m0,451.72v141.16M0,367.02H141.16m592.88,0h-141.16m-225.86-225.86c-124.74,0-225.86,101.12-225.86,225.86s101.12,225.86,225.86,225.86,225.86-101.12,225.86-225.86-101.12-225.86-225.86-225.86Z"
        fill="none"
        stroke="#faf2e3"
        strokeMiterlimit="10"
        strokeWidth="12"
      />
    </g>
    <g>
      <path
        d="M366.99,197.64l-2.27,7.72v224l2.27,2.27,103.98-61.46-103.98-172.53Z"
        fill="#faf2e3"
      />
      <path
        d="M366.99,197.64l-103.98,172.53,103.98,61.46V197.64Z"
        fill="#faf2e3"
      />
      <path
        d="M366.99,451.32l-1.28,1.56v79.79l1.28,3.74,104.04-146.52-104.04,61.43Z"
        fill="#faf2e3"
      />
      <path
        d="M366.99,536.41v-85.09l-103.98-61.43,103.98,146.52Z"
        fill="#faf2e3"
      />
      <path
        d="M366.99,431.63l103.98-61.46-103.98-47.26v108.72Z"
        fill="#faf2e3"
      />
      <path
        d="M263.01,370.16l103.98,61.46v-108.72l-103.98,47.26Z"
        fill="#faf2e3"
      />
    </g>
  </svg>
)

const BaoUSDLogo = () => (
  <svg
    id="a"
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 734.05 755.33"
  >
    <defs>
      <clipPath id="b">
        <circle cx="367.02" cy="371.39" r="360.39" fill="none" />
      </clipPath>
    </defs>
    <circle cx="367.02" cy="371.39" r="360.39" fill="#e23a52" />
    <g clipPath="url(#b)">
      <path
        d="M85.33,642.08l116.74-116.74M621.85,105.56l-100.55,100.55M112.19,105.56l100.62,100.62m446.8,446.8l-128.83-128.83M367.02,0V142.22m0,454.69v158.42M2.48,360.39H141.16m592.88,0h-141.16m-225.86-215.19c-124.74,0-225.86,101.12-225.86,225.86s101.12,225.86,225.86,225.86,225.86-101.12,225.86-225.86-101.12-225.86-225.86-225.86Z"
        fill="none"
        stroke="#faf2e3"
        strokeMiterlimit="10"
        strokeWidth="12"
      />
    </g>
    <path
      d="M353.77,541.38c-1.67-1.67-2.5-3.78-2.5-6.34v-26.88c-17.92-1.54-33.41-5.69-46.47-12.48-13.06-6.78-22.98-15.23-29.76-25.35-6.79-10.11-10.44-20.93-10.95-32.45,0-2.05,.83-3.9,2.5-5.57,1.66-1.66,3.65-2.5,5.95-2.5h19.97c4.61,0,7.81,2.56,9.6,7.68,2.56,10.75,9.22,19.97,19.97,27.65,10.75,7.68,25.98,11.52,45.7,11.52,21.25,0,37.25-3.77,48.01-11.33,10.75-7.55,16.13-18.11,16.13-31.68,0-8.7-2.63-15.75-7.87-21.12-5.25-5.38-13-10.11-23.23-14.21-10.24-4.09-25.61-9.22-46.09-15.36-19.97-5.63-35.85-11.65-47.62-18.05-11.78-6.4-20.61-14.34-26.5-23.81-5.89-9.47-8.83-21.37-8.83-35.72,0-18.94,7.04-35.01,21.12-48.2,14.08-13.18,33.54-21.06,58.38-23.62v-26.5c0-2.56,.83-4.67,2.5-6.34,1.66-1.66,3.77-2.5,6.34-2.5h14.59c2.56,0,4.67,.83,6.34,2.5,1.66,1.67,2.5,3.78,2.5,6.34v26.88c16.38,2.05,30.4,6.66,42.05,13.83,11.65,7.17,20.48,15.62,26.5,25.35,6.01,9.73,9.28,19.46,9.79,29.19,0,2.05-.71,3.84-2.11,5.38-1.41,1.54-3.4,2.3-5.95,2.3h-20.35c-5.38,0-8.71-2.43-9.99-7.3-1.54-10.75-7.56-19.65-18.05-26.69-10.5-7.04-23.69-10.56-39.56-10.56-17.41,0-31.11,3.33-41.09,9.99-9.99,6.66-14.98,16.51-14.98,29.57,0,8.71,2.36,15.88,7.1,21.51,4.73,5.63,11.97,10.56,21.7,14.79,9.73,4.22,23.94,9.03,42.63,14.4,21.76,5.89,38.92,11.97,51.46,18.24,12.54,6.28,21.89,14.08,28.04,23.43,6.14,9.35,9.22,21.19,9.22,35.52,0,21.76-7.68,39.24-23.04,52.42-15.36,13.19-36.48,20.93-63.37,23.23v26.5c0,2.56-.83,4.67-2.5,6.34-1.67,1.66-3.78,2.5-6.34,2.5h-14.59c-2.56,0-4.67-.83-6.34-2.5Z"
      fill="#faf2e3"
    />
  </svg>
)

const BaoBTCLogo = () => (
  <svg
    id="a"
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 734.05 734.05"
  >
    <defs>
      <clipPath id="b">
        <circle cx="367.02" cy="367.02" r="360.39" fill="none" />
      </clipPath>
    </defs>
    <circle cx="367.02" cy="367.02" r="360.39" fill="#e23a52" />
    <g clipPath="url(#b)">
      <path
        d="M107.5,626.55l96.82-96.82M626.55,107.5l-98.5,98.5M107.5,107.5l99.82,99.82m419.23,419.23l-99.82-99.82M367.02,0V141.16m0,451.72v141.16M0,367.02H141.16m592.88,0h-141.16m-225.86-225.86c-124.74,0-225.86,101.12-225.86,225.86s101.12,225.86,225.86,225.86,225.86-101.12,225.86-225.86-101.12-225.86-225.86-225.86Z"
        fill="none"
        stroke="#faf2e3"
        strokeMiterlimit="10"
        strokeWidth="12"
      />
    </g>
    <path
      d="M507.89,333.27c-5.1-51.47-48.86-68.61-104.81-74.9l0-75.71-43.53-.11,0,73.92c-11.45-.26-23.18-.26-34.86-.25l0-73.89-43.52-.11,0,75.68c-9.43,0-18.69.18-27.74.18l-.06-120.28-58.04-.15.16,63.22c0,0-32.17-.73-31.71-.68,17.67.46,25.69,10.46,27.39,19.61l0,85.52c1.35,0,3.1,0,5.07.21-.02.03-5.05-.21-5.07-.21l.01,119.89c-.93,6.73-5.08,17.47-19.84,17.09.46.07,31.72-1.02,31.72-1.02l-.08,70.22,58.04-.16-.06-116.57c9.22.17,18.14.24,26.89.22l-.05,116.33,43.53-.12-.05-117.01c11.96.23,23.57.23,34.84.11l.05,116.84,43.53-.12-.05-116.99c72.65-4.13,124.35-22.2,130.93-89.6,5.3-54.25-20.41-78.31-61.1-88.1,25.55-12.53,41.23-35.12,37.63-71.13Zm-96.93,155.09c0,59.11-101.33,52.35-133.75,52.38l-.05-104.88c32.41-.04,133.84-9.35,133.8,52.5Zm-22.27-146.84c0,53.8-84.63,47.69-111.44,47.72l-.05-95.59c26.81-.04,111.52-7.7,111.49,47.87Z"
      fill="#faf2e3"
    />
  </svg>
)

const BaoQuestionLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 734.05 734.05"
  >
    <circle cx="367.02" cy="367.02" r="360.39" fill="#e23a52" />
    <g fill="none" stroke="#faf2e3" strokeMiterlimit="10" strokeWidth="12">
      <path d="M107.5 626.55l96.82-96.82M626.55 107.5l-98.5 98.5M107.5 107.5l99.82 99.82m419.23 419.23l-99.82-99.82M367.02 0v141.16m0 451.72v141.16M0 367.02h141.16m592.88 0h-141.16m-225.86-225.86c-124.74 0-225.86 101.12-225.86 225.86s101.12 225.86 225.86 225.86 225.86-101.12 225.86-225.86-101.12-225.86-225.86-225.86z" />
    </g>
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#faf2e3"
      fontSize="300"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      ?
    </text>
  </svg>
)

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
          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.randomOpacitySquares}></div>
              <div className={styles.logoContainer}>
                <BaoUSDLogo />
              </div>
              <h3 className={styles.boxTitle}>baoUSD</h3>
              <p className={styles.boxDescription}>
                Backed by ETH and other ETH backed tokens. A safe haven for
                those that favor decentralization and transparency.
              </p>
              <div className={styles.buttonContainer}>
                <button className={styles.button}>Get baoUSD</button>
                <button className={styles.button}>Borrow baoUSD</button>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.randomOpacitySquares}></div>
              <div className={styles.logoContainer}>
                <BaoETHLogo />
              </div>
              <h3 className={styles.boxTitle}>baoETH</h3>
              <p className={styles.boxDescription}>
                Backed by ETH. baoETH solves high borrow rates for ETH. Unlike
                traditional markets, baoETH does not need to be deposited before
                it is borrowed unlocking greater capital efficiency for
                borrowers.
              </p>
              <div className={styles.buttonContainer}>
                <button className={styles.button}>Get baoETH</button>
                <button className={styles.button}>Borrow baoETH</button>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.randomOpacitySquares}></div>
              <div className={styles.logoContainer}>
                <BaoBTCLogo />
              </div>
              <h3 className={styles.boxTitle}>baoBTC</h3>
              <p className={styles.boxDescription}>
                A decentralized, Bitcoin-pegged token on Ethereum, backed by
                ETH. Unlike wBTC and other alternatives, it avoids centralized
                control, offering a secure and transparent option for using
                Bitcoin in DeFi applications.
              </p>
              <div className={styles.buttonContainer}>
                <button className={styles.button} disabled>
                  Get baoBTC
                </button>
                <button className={styles.button} disabled>
                  Borrow baoBTC
                </button>
              </div>
              <div className={styles.comingSoonStamp}>Coming Soon</div>
            </div>
            <div className={styles.box}>
              <div className={styles.randomOpacitySquares}></div>
              <div className={styles.logoContainer}>
                <BaoQuestionLogo />
              </div>
              <h3 className={styles.boxTitle}>bao???</h3>
              <p className={styles.boxDescription}>
                Imagine the possibilities: tokenized weather derivatives, real
                estate indices, or even sentiment analysis tokens. By leveraging
                diverse data feeds, we can create innovative financial
                instruments that reflect real-world events and trends, opening
                up new horizons for decentralized finance.
              </p>
              <div className={styles.buttonContainer}>
                <button className={styles.button} disabled>
                  Explore Ideas
                </button>
                <button className={styles.button} disabled>
                  Suggest a Derivative
                </button>
              </div>
              <div className={styles.comingSoonStamp}>Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BaoDerivatives
