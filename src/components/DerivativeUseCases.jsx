import React from 'react'
import styles from './DerivativeUseCases.module.css'
import { TwinklingBackground } from './TwinklingBackground'
import {
  FaChartLine,
  FaGlobeAmericas,
  FaUmbrella,
  FaFootballBall,
  FaRobot,
  FaLeaf,
} from 'react-icons/fa'

const useCases = [
  {
    title: 'Global Market Access',
    description:
      'Trade synthetic versions of international stocks and commodities 24/7, breaking down geographical barriers.',
    icon: FaGlobeAmericas,
    example: 'Invest in Asian markets during US trading hours.',
  },
  {
    title: 'Weather Risk Management',
    description:
      'Create derivatives based on weather data, allowing businesses to hedge against climate-related risks.',
    icon: FaUmbrella,
    example:
      'Farmers can protect crop yields from unexpected weather patterns.',
  },
  {
    title: 'Sports and Entertainment',
    description:
      'Tokenize the performance of athletes or box office revenues, opening new avenues for fan engagement.',
    icon: FaFootballBall,
    example: "Trade derivatives based on a player's season statistics.",
  },
  {
    title: 'AI and Machine Learning',
    description:
      'Develop tokens representing the performance of AI algorithms, enabling investment in technological progress.',
    icon: FaRobot,
    example: 'Invest in the improving accuracy of language models over time.',
  },
  {
    title: 'Environmental Impact',
    description:
      'Create derivatives tied to environmental metrics, incentivizing sustainable practices.',
    icon: FaLeaf,
    example: 'Trade carbon offset tokens or invest in reforestation projects.',
  },
  {
    title: 'Economic Indicators',
    description:
      'Tokenize complex economic data, making it easier for individuals to react to global trends.',
    icon: FaChartLine,
    example:
      'Hedge against inflation with tokens pegged to Consumer Price Index.',
  },
]

export function DerivativeUseCases() {
  return (
    <section className={styles.useCasesSection}>
      <TwinklingBackground
        color="rgba(226, 26, 83, 0.1)"
        squareSize={20}
        coverage={0.4}
      />
      <div className={styles.content}>
        <h2 className={styles.heading}>REVOLUTIONIZING FINANCE</h2>
        <p className={styles.subheading}>
          Explore the Endless Possibilities of Tokenized Derivatives
        </p>

        <div className={styles.useCasesGrid}>
          {useCases.map((useCase, index) => (
            <div key={index} className={styles.useCaseItem}>
              <div className={styles.iconContainer}>
                <useCase.icon className={styles.icon} />
              </div>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
              <div className={styles.example}>
                <strong>Example:</strong> {useCase.example}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <p>The future of finance is limited only by our imagination.</p>
          <button className={styles.exploreButton}>
            Explore More Use Cases
          </button>
        </div>
      </div>
    </section>
  )
}

export default DerivativeUseCases
