import React from 'react'
import Image from 'next/image'
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

// Add this constant for the Discord invite link
const DISCORD_INVITE_LINK = 'https://discord.gg/BW3P62vJXT'

export function DerivativeUseCases() {
  return (
    <section className="relative overflow-hidden border-t-2 border-baoPink/50 bg-baoBlack py-24 text-baoWhite">
      {/* Background with animated lines */}
      <div className="absolute inset-x-0 bottom-0 h-1/2">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e23a52" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#e23a52" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e23a52" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#e23a52" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 Q 400 0, 800 100 T 1600 100"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-1"
          />
          <path
            d="M0 100 Q 400 0, 800 100 T 1600 100"
            fill="url(#grad1)"
            className="animate-flow-1"
          />
          <path
            d="M0 200 Q 600 100, 1200 200 T 1600 200"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-2"
          />
          <path
            d="M0 200 Q 600 100, 1200 200 T 1600 200"
            fill="url(#grad2)"
            className="animate-flow-2"
          />
          <path
            d="M0 300 Q 300 200, 800 300 T 1600 300"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-3"
          />
          <path
            d="M0 300 Q 300 200, 800 300 T 1600 300"
            fill="url(#grad1)"
            className="animate-flow-3"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <h2 className="mb-4 text-center font-bakbak text-[clamp(30px,6vw,80px)] font-bold leading-tight">
          UNLIMITED POSSIBILITIES
        </h2>
        <div className="mx-auto mb-12 text-center">
          <div className="inline-block bg-baoWhite px-4 py-2">
            <p className="text-center font-bakbak text-[clamp(18px,2vw,24px)] text-baoBlack">
              To Disrupt the $4 Quadrillion Derivatives Market
            </p>
          </div>
        </div>

        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-lg bg-[#2A2A2A] p-8 pt-16 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-baoPink/20"
            >
              <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-baoPink">
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
          <p className="mb-8 text-xl">
            The future of finance is limited only by our imagination.
          </p>
          <Button
            variant="solid"
            color="baoWhite"
            href={DISCORD_INVITE_LINK}
            className="text-xl"
          >
            Discuss a Derivative with Us
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowAnimation {
          0% {
            d: path(M0 100 Q 400 0, 800 100 T 1600 100);
          }
          50% {
            d: path(M0 150 Q 450 50, 850 150 T 1600 150);
          }
          100% {
            d: path(M0 100 Q 400 0, 800 100 T 1600 100);
          }
        }
        .animate-flow-1 {
          animation: flowAnimation 20s ease-in-out infinite;
        }
        .animate-flow-2 {
          animation: flowAnimation 25s ease-in-out infinite;
        }
        .animate-flow-3 {
          animation: flowAnimation 30s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default DerivativeUseCases
