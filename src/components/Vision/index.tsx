import React from 'react'
import {
  FaExclamationTriangle,
  FaLightbulb,
  FaDatabase,
  FaRocket,
} from 'react-icons/fa'
import { Button } from '../Button'

// Add this constant for the Discord invite link
const DISCORD_INVITE_LINK = 'https://discord.gg/BW3P62vJXT'

export function Vision() {
  const visionItems = [
    {
      icon: FaExclamationTriangle,
      title: 'The Problem',
      description:
        "Traditional finance only works for some people. It's a system designed for wealthy suits, burdened by heavy infrastructure. They own the data, control the marketplace, and change the rules when things don't go their way.",
    },
    {
      icon: FaLightbulb,
      title: 'The Solution',
      description:
        "We're not just putting finance on the blockchain. We're reimagining it. Our tokenized derivatives create a financial system that's genuinely open, transparent, and accessible to all.",
    },
    {
      icon: FaDatabase,
      title: 'The Power of Data',
      description:
        "We're building the world's most accurate, open, and responsive financial data system by creating tokenized derivatives for any quantifiable event. Real-time, tamper-proof tokenized data, empowers you to make informed decisions and leverage data like never before.",
    },
    {
      icon: FaRocket,
      title: 'Our Journey',
      description:
        "We're a small, community-driven team born in the chaos of DeFi Summer 2020, sparked by one visionary: the legendary Baoman. What started as one man's dream quickly united a community, leveling up our skills and drive. Today, we've got the tech to bring that vision to life—tokenizing data to create a financial system where both retail investors and institutions can thrive, side by side.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-baoBlack py-24 text-baoWhite">
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <h2 className="mb-4 text-center font-bakbak text-[clamp(30px,6vw,80px)] font-bold leading-tight">
          WHY ONCHAIN DERIVATIVES?
        </h2>
        <p className="mb-12 text-center font-bakbak text-[clamp(18px,2vw,24px)]">
          OPEN, TRANSPARENT, AND FOR EVERYONE
        </p>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* 2x2 grid on the left */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:w-3/4">
            {visionItems.map((item, index) => (
              <VisionBox key={index} {...item} />
            ))}
          </div>

          {/* Video on the right - full height of the grid */}
          <div className="lg:w-1/4">
            <div className="h-full rounded-lg bg-baoWhite p-4 shadow-lg">
              <div className="aspect-w-9 aspect-h-16 h-full">
                <iframe
                  src="https://www.youtube.com/embed/riTE_j-wN5E"
                  title="BAO Finance Short Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-8 text-xl">
            We may be little dumplings, but together, we can revolutionize
            finance.
          </p>
          <Button
            variant="solid"
            color="baoPink"
            href={DISCORD_INVITE_LINK}
            className="!mx-auto !max-w-[15rem] !px-5 !py-3"
          >
            Join the Revolution
          </Button>
        </div>
      </div>

      {/* Updated background with less blur and more similar to BaoDerivatives */}
      <div className="absolute inset-0">
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
            d="M0 50 Q 400 0, 800 100 T 1600 50"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-1"
          />
          <path
            d="M0 50 Q 400 0, 800 100 T 1600 50"
            fill="url(#grad1)"
            className="animate-flow-1"
          />
          <path
            d="M0 150 Q 500 50, 1000 200 T 1600 150"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-2"
          />
          <path
            d="M0 150 Q 500 50, 1000 200 T 1600 150"
            fill="url(#grad2)"
            className="animate-flow-2"
          />
          <path
            d="M0 250 Q 600 150, 1200 300 T 1600 250"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-3"
          />
          <path
            d="M0 250 Q 600 150, 1200 300 T 1600 250"
            fill="url(#grad1)"
            className="animate-flow-3"
          />
          <path
            d="M0 350 Q 400 250, 800 400 T 1600 350"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-4"
          />
          <path
            d="M0 350 Q 400 250, 800 400 T 1600 350"
            fill="url(#grad2)"
            className="animate-flow-4"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes flowAnimation {
          0% {
            d: path(M0 50 Q 400 0, 800 100 T 1600 50);
          }
          50% {
            d: path(M0 75 Q 400 25, 800 125 T 1600 75);
          }
          100% {
            d: path(M0 50 Q 400 0, 800 100 T 1600 50);
          }
        }
        .animate-flow-1 {
          animation: flowAnimation 20s ease-in-out infinite;
        }
        .animate-flow-2 {
          animation: flowAnimation 23s ease-in-out infinite;
        }
        .animate-flow-3 {
          animation: flowAnimation 26s ease-in-out infinite;
        }
        .animate-flow-4 {
          animation: flowAnimation 29s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

function VisionBox({ icon: Icon, title, description, className = '' }) {
  return (
    <div
      className={`group relative flex flex-col items-center rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        className || 'bg-baoWhite text-baoBlack'
      }`}
    >
      <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-baoPink">
        <Icon className="text-2xl text-baoWhite" />
      </div>
      <h3 className="mb-2 mt-6 text-center font-bakbak text-xl">{title}</h3>
      <p className="text-center text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default Vision
