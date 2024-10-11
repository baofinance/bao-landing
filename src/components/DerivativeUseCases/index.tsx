import React from 'react'
import {
  FaChartLine,
  FaGlobeAmericas,
  FaUmbrella,
  FaFootballBall,
  FaRobot,
  FaLeaf,
} from 'react-icons/fa'
import { Button } from '../Button'

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
    <section className="relative overflow-hidden border-t-2 border-baoPink/50 bg-baoBlack py-24 text-baoWhite">
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <h2 className="mb-4 text-center font-bakbak text-[clamp(30px,6vw,80px)] font-bold leading-tight">
          REVOLUTIONIZING FINANCE
        </h2>
        <p className="mb-12 text-center font-bakbak text-[clamp(18px,2vw,24px)] text-baoPink">
          Explore the Endless Possibilities of Tokenized Derivatives
        </p>

        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg bg-baoWhite bg-opacity-10 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-baoPink/20"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-baoPink">
                <useCase.icon className="text-3xl text-baoWhite" />
              </div>
              <h3 className="mb-4 font-bakbak text-2xl text-baoWhite">
                {useCase.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-baoWhite">
                {useCase.description}
              </p>
              <div className="mt-auto text-sm italic text-baoPink">
                <strong>Example:</strong> {useCase.example}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-4 text-xl">
            The future of finance is limited only by our imagination.
          </p>
          <Button
            variant="solid"
            color="baoPink"
            href="https://app.baofinance.io"
            className="text-xl"
          >
            Explore More Use Cases
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DerivativeUseCases
