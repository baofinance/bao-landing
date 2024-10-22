import React, { useEffect, useRef } from 'react'
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
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // ... (keep the existing canvas effect code)
  }, [])

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
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 w-full"
        style={{ height: '100px' }}
      />

      {/* Animated waves background */}
      <div className="absolute inset-0 h-full w-full">
        {/* Top wave (darkest) */}
        <div className="absolute inset-x-0 top-0 h-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.05"
              d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,128C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              className="animate-wave-slower"
            ></path>
          </svg>
        </div>

        {/* Middle wave */}
        <div className="absolute inset-x-0 top-0 h-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.03"
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>

        {/* Bottom wave (lightest) */}
        <div className="absolute inset-x-0 top-0 h-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.02"
              d="M0,288L60,277.3C120,267,240,245,360,234.7C480,224,600,224,720,234.7C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <h2 className="mb-12 text-center font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoWhite">
          WHY ONCHAIN DERIVATIVES?
        </h2>
        <p className="mb-12 text-center font-bakbak text-[clamp(16px,1.8vw,22px)]">
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
            <div className="h-full rounded-lg bg-baoBlack p-4 shadow-lg outline outline-1 outline-baoWhite/20">
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
        @keyframes waveAnimation {
          0% {
            d: path(
              M0,
              288L60,
              277.3C120,
              267,
              240,
              245,
              360,
              234.7C480,
              224,
              600,
              224,
              720,
              234.7C840,
              245,
              960,
              267,
              1080,
              261.3C1200,
              256,
              1320,
              224,
              1380,
              208L1440,
              192L1440,
              0L1380,
              0C1320,
              0,
              1200,
              0,
              1080,
              0C960,
              0,
              840,
              0,
              720,
              0C600,
              0,
              480,
              0,
              360,
              0C240,
              0,
              120,
              0,
              60,
              0L0,
              0Z
            );
          }
          50% {
            d: path(
              M0,
              256L60,
              245.3C120,
              235,
              240,
              213,
              360,
              202.7C480,
              192,
              600,
              192,
              720,
              202.7C840,
              213,
              960,
              235,
              1080,
              229.3C1200,
              224,
              1320,
              192,
              1380,
              176L1440,
              160L1440,
              0L1380,
              0C1320,
              0,
              1200,
              0,
              1080,
              0C960,
              0,
              840,
              0,
              720,
              0C600,
              0,
              480,
              0,
              360,
              0C240,
              0,
              120,
              0,
              60,
              0L0,
              0Z
            );
          }
          100% {
            d: path(
              M0,
              288L60,
              277.3C120,
              267,
              240,
              245,
              360,
              234.7C480,
              224,
              600,
              224,
              720,
              234.7C840,
              245,
              960,
              267,
              1080,
              261.3C1200,
              256,
              1320,
              224,
              1380,
              208L1440,
              192L1440,
              0L1380,
              0C1320,
              0,
              1200,
              0,
              1080,
              0C960,
              0,
              840,
              0,
              720,
              0C600,
              0,
              480,
              0,
              360,
              0C240,
              0,
              120,
              0,
              60,
              0L0,
              0Z
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

function VisionBox({ icon: Icon, title, description, className = '' }) {
  return (
    <div
      className={`group relative flex flex-col items-center rounded-lg bg-baoBlack p-6 text-baoWhite shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
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
