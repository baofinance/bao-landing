import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export function ActiveVaults() {
  const features = [
    'No Liquidation Leverage',
    'Create stable or leveraged tokens instantly',
    'Trade smarter, hedge better, and earn yields your way',
    'Full control, anytime redemption',
    '100% capital efficiency',
  ]

  return (
    <div className="relative overflow-hidden bg-baoWhite py-24">
      {/* Wave container */}
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
              d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,128C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="animate-wave-slower"
            ></path>
          </svg>
        </div>

        {/* Middle wave */}
        <div className="absolute inset-x-0 bottom-0 h-4/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.15"
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>

        {/* Top wave (lightest) */}
        <div className="absolute inset-x-0 bottom-0 h-3/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.1"
              d="M0,288L60,277.3C120,267,240,245,360,234.7C480,224,600,224,720,234.7C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-center">
          <div className="flex flex-col items-center justify-center text-center lg:w-2/5 lg:pr-8">
            <h2 className="mb-1 font-bakbak text-[clamp(30px,8vw,100px)] font-bold uppercase leading-none text-baoBlack">
              MINT
            </h2>
            <p className="mb-4 font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoBlack">
              PEGGED OR LEVERAGE TOKENS
            </p>
            <div className="inline-block rounded-md bg-baoBlack px-12 py-3">
              <span className="text-[clamp(12px,1.5vw,18px)] font-bold uppercase text-baoWhite">
                Coming Soon
              </span>
            </div>
          </div>
          <div className="lg:w-3/5">
            <div className="mx-auto max-w-2xl rounded-lg bg-baoBlack p-6 shadow-lg">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="mr-3 text-xl text-baoPink" />
                    <span className="text-[clamp(14px,1.5vw,18px)] text-baoWhite">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 h-0.5 bg-baoPink"></div>
          <ol className="relative flex flex-col justify-between gap-8 lg:flex-row">
            {[
              {
                title: 'Deposit ETH',
                description:
                  'Securely deposit your ETH to start minting tokens.',
              },
              {
                title: 'Choose Token Type',
                description:
                  'Select between pegged or leveraged tokens based on your strategy.',
              },
              {
                title: 'Use or Store',
                description:
                  'Utilize your tokens in DeFi protocols or securely store them in your wallet.',
              },
            ].map((step, index) => (
              <li key={index} className="flex flex-1 flex-col items-center">
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-baoPink text-2xl font-bold text-baoWhite">
                  {index + 1}
                </div>
                <div className="group relative flex h-full flex-col rounded-lg bg-baoBlack p-8 text-center text-baoWhite transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-baoPink/15">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                  <h3 className="relative z-10 mb-4 font-bakbak text-2xl">
                    {step.title}
                  </h3>
                  <div className="relative z-10 text-base leading-relaxed">
                    {step.description}
                  </div>
                </div>
              </li>
            ))}
          </ol>
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
              320L1380,
              320C1320,
              320,
              1200,
              320,
              1080,
              320C960,
              320,
              840,
              320,
              720,
              320C600,
              320,
              480,
              320,
              360,
              320C240,
              320,
              120,
              320,
              60,
              320L0,
              320Z
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
              320L1380,
              320C1320,
              320,
              1200,
              320,
              1080,
              320C960,
              320,
              840,
              320,
              720,
              320C600,
              320,
              480,
              320,
              360,
              320C240,
              320,
              120,
              320,
              60,
              320L0,
              320Z
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
              320L1380,
              320C1320,
              320,
              1200,
              320,
              1080,
              320C960,
              320,
              840,
              320,
              720,
              320C600,
              320,
              480,
              320,
              360,
              320C240,
              320,
              120,
              320,
              60,
              320L0,
              320Z
            );
          }
        }
        .animate-wave {
          animation: waveAnimation 20s ease-in-out infinite;
        }
        .animate-wave-slow {
          animation: waveAnimation 25s ease-in-out infinite;
        }
        .animate-wave-slower {
          animation: waveAnimation 30s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
