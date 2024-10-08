import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Integrations.module.css'
import { TwinklingBackground } from './TwinklingBackground'

const partners = [
  {
    name: 'Balancer',
    logo: '/images/logos/balancer.svg',
    description:
      'Bao uses Balancer for liquidity provision and AMM functionality, allowing users to trade baoUSD and baoETH efficiently.',
  },
  {
    name: 'Chainlink',
    logo: '/images/logos/chainlink.svg',
    description:
      "Chainlink oracles are used to provide accurate and tamper-proof price feeds for Bao's tokenized derivatives.",
  },
  {
    name: 'Gnosis',
    logo: '/images/logos/gnosis.svg',
    description:
      "Gnosis Safe is utilized for secure multi-signature wallets to manage Bao's treasury and critical protocol parameters.",
  },
  {
    name: 'Snapshot',
    logo: '/images/logos/snapshot.svg',
    description:
      'Bao uses Snapshot for decentralized governance voting, allowing BAO token holders to participate in decision-making.',
  },
  {
    name: 'The Graph',
    logo: '/images/logos/the-graph.svg',
    description:
      'The Graph is used to index and query blockchain data, providing efficient access to Bao protocol information.',
  },
  {
    name: 'Uniswap',
    logo: '/images/logos/uniswap.svg',
    description:
      "Uniswap provides additional liquidity and trading options for BAO tokens and Bao's synthetic assets.",
  },
]

export function Integrations() {
  const [activePartner, setActivePartner] = useState(partners[0])

  return (
    <section className={styles.integrationsSection}>
      <TwinklingBackground
        color="rgba(30, 32, 34, 0.1)"
        squareSize={20}
        coverage={0.4}
      />
      <div className={styles.integrationsContent}>
        <h2 className={styles.integrationsHeading}>INTEGRATED WITH THE BEST</h2>
        <div className={styles.integrationsGrid}>
          <div className={styles.logoGrid}>
            {partners.map((partner) => (
              <div
                key={partner.name}
                className={styles.logoContainer}
                onMouseEnter={() => setActivePartner(partner)}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={100}
                  height={100}
                  className={styles.partnerLogo}
                />
              </div>
            ))}
          </div>
          <div className={styles.explainerContainer}>
            <h3 className={styles.partnerName}>{activePartner.name}</h3>
            <p className={styles.partnerDescription}>
              {activePartner.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
