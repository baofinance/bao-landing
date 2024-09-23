import React from 'react';
import styles from './BaoDerivatives.module.css';

const BaoDerivatives = () => {
  return (
    <section className={styles.derivativesSection}>
      <div className={styles.container}>
        <h1 className={styles.header}>Derivatives</h1>
        <div className={styles.banner}>
          <p className={styles.bannerText}>Tokens with a value linked to a data/price feed.</p>
        </div>
        
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h3 className={styles.boxHeader}>baoUSD</h3>
            <p>baoUSD is a dollar-pegged token that is fully backed by ETH and ETH-backed tokens. It has been pegged since 2021 and aims to provide a secure and decentralized stablecoin option.</p>
          </div>
          <div className={styles.box}>
            <h3 className={styles.boxHeader}>baoETH</h3>
            <p>baoETH is an ETH-pegged token that is fully backed by ETH and ETH-backed tokens. It has been pegged since 2022 and offers a decentralized option for maintaining ETH value.</p>
          </div>
          <div className={styles.box}>
            <h3 className={styles.boxHeader}>Coming Soon</h3>
            <p>Open your eyes to the possibilites of on-chain derivatives and explore some of the use cases</p>
            
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default BaoDerivatives;
