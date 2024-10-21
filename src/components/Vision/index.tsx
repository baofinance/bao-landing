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
      {/* Spotlight background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="spotlight spotlight-1"></div>
        <div className="spotlight spotlight-2"></div>
        <div className="spotlight spotlight-3"></div>
      </div>

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

      <style jsx>{`
        .spotlight {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          filter: blur(80px);
          animation: rotate 20s infinite;
        }

        .spotlight-1 {
          background: radial-gradient(
            circle at 20% 20%,
            #e23a52,
            transparent 50%
          );
          animation-delay: 0s;
        }

        .spotlight-2 {
          background: radial-gradient(
            circle at 60% 60%,
            #e23a52,
            transparent 50%
          );
          animation-delay: -5s;
        }

        .spotlight-3 {
          background: radial-gradient(
            circle at 80% 20%,
            #e23a52,
            transparent 50%
          );
          animation-delay: -10s;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
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
