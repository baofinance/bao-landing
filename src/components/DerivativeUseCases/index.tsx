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
    <section className="relative overflow-hidden bg-baoWhite py-24 text-baoBlack">
      {/* Animated waves background */}
      <div className="absolute inset-0 h-full w-full">
        {/* Bottom wave (darkest) */}
        <div className="absolute inset-x-0 bottom-0 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.2"
              d="M0,32L48,53.3C96,75,192,117,288,138.7C384,160,480,160,576,138.7C672,117,768,75,864,64C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave-slower"
            ></path>
          </svg>
        </div>

        {/* Middle wave */}
        <div className="absolute inset-x-0 bottom-0 h-5/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.15"
              d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,117.3C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>

        {/* Top wave (lightest) */}
        <div className="absolute inset-x-0 bottom-0 h-3/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.1"
              d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,133.3C672,128,768,160,864,165.3C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <h2 className="mb-12 text-center font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoBlack">
          UNLIMITED POSSIBILITIES
        </h2>
        <div className="mx-auto mb-12 text-center">
          <div className="inline-block bg-baoBlack px-4 py-2">
            <p className="text-center font-bakbak text-[clamp(16px,1.8vw,22px)] text-baoWhite">
              To Disrupt the $4 Quadrillion Derivatives Market
            </p>
          </div>
        </div>

        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-lg bg-baoBlack p-8 pt-16 text-center text-baoWhite shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
            color="baoPink"
            href={DISCORD_INVITE_LINK}
            className="text-xl"
          >
            Discuss a Derivative with Us
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes waveAnimation {
          0% {
            d: path(
              M0,
              160L48,
              170.7C96,
              181,
              192,
              203,
              288,
              192C384,
              181,
              480,
              139,
              576,
              133.3C672,
              128,
              768,
              160,
              864,
              165.3C960,
              171,
              1056,
              149,
              1152,
              144C1248,
              139,
              1344,
              149,
              1392,
              154.7L1440,
              160L1440,
              320L1392,
              320C1344,
              320,
              1248,
              320,
              1152,
              320C1056,
              320,
              960,
              320,
              864,
              320C768,
              320,
              672,
              320,
              576,
              320C480,
              320,
              384,
              320,
              288,
              320C192,
              320,
              96,
              320,
              48,
              320L0,
              320Z
            );
          }
          50% {
            d: path(
              M0,
              128L48,
              138.7C96,
              149,
              192,
              171,
              288,
              160C384,
              149,
              480,
              107,
              576,
              101.3C672,
              96,
              768,
              128,
              864,
              133.3C960,
              139,
              1056,
              117,
              1152,
              112C1248,
              107,
              1344,
              117,
              1392,
              122.7L1440,
              128L1440,
              320L1392,
              320C1344,
              320,
              1248,
              320,
              1152,
              320C1056,
              320,
              960,
              320,
              864,
              320C768,
              320,
              672,
              320,
              576,
              320C480,
              320,
              384,
              320,
              288,
              320C192,
              320,
              96,
              320,
              48,
              320L0,
              320Z
            );
          }
          100% {
            d: path(
              M0,
              160L48,
              170.7C96,
              181,
              192,
              203,
              288,
              192C384,
              181,
              480,
              139,
              576,
              133.3C672,
              128,
              768,
              160,
              864,
              165.3C960,
              171,
              1056,
              149,
              1152,
              144C1248,
              139,
              1344,
              149,
              1392,
              154.7L1440,
              160L1440,
              320L1392,
              320C1344,
              320,
              1248,
              320,
              1152,
              320C1056,
              320,
              960,
              320,
              864,
              320C768,
              320,
              672,
              320,
              576,
              320C480,
              320,
              384,
              320,
              288,
              320C192,
              320,
              96,
              320,
              48,
              320L0,
              320Z
            );
          }
        }
        .animate-wave {
          animation: waveAnimation 15s ease-in-out infinite;
        }
        .animate-wave-slow {
          animation: waveAnimation 20s ease-in-out infinite;
        }
        .animate-wave-slower {
          animation: waveAnimation 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default DerivativeUseCases
