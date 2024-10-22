import React from 'react'
import { Button } from '../Button'

export function Earn() {
  const earnItems = [
    {
      title: 'AMM liquidity',
      description:
        'Deposit into ETH or USD pegged pools providing swap liquidity and earn AURA and BAL tokens',
      buttons: ['Deposit', 'Learn More'],
      comingSoon: false,
      links: [
        'https://app.baofinance.io/earn',
        'https://info.bao.finance/docs',
      ],
    },
    {
      title: 'Stability pools',
      description: 'Deposit derivatives and earn ETH for securing the protocol',
      buttons: ['Deposit', 'Learn More'],
      comingSoon: true,
    },
    {
      title: 'MultiLend',
      description:
        'Lend in multiple markets simultaneously with a single deposit.',
      buttons: ['Deposit', 'Learn More'],
      comingSoon: true,
      highlight: true,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-baoBlack py-24 text-baoWhite">
      {/* Wave container */}
      <div className="absolute inset-0 h-full w-full">
        {/* Top wave (darkest) */}
        <div className="absolute inset-x-0 top-0 h-2/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#e23a52"
              fillOpacity="0.08"
              d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,128C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              className="animate-wave-slower"
            ></path>
          </svg>
        </div>

        {/* Middle wave */}
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
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>

        {/* Bottom wave (lightest) */}
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
              d="M0,288L60,277.3C120,267,240,245,360,234.7C480,224,600,224,720,234.7C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-8 md:grid-cols-2 md:grid-rows-[auto,1fr]">
        <div className="flex flex-col items-center justify-center text-center md:col-span-1">
          <h2 className="mb-4 text-center font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoWhite">
            EARN
          </h2>
          <p className="mb-4 font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoWhite">
            BY PROVIDING LIQUIDITY.
          </p>
          <div className="inline-block rounded-md bg-baoPink px-12 py-3">
            <span className="text-[clamp(12px,1.5vw,18px)] font-bold uppercase text-baoWhite">
              UP TO 50% vAPR
            </span>
          </div>
        </div>

        {earnItems.map((item, index) => (
          <div
            key={index}
            className={`bg-opacity-97 relative flex flex-col rounded-lg bg-baoBlack p-8 text-left text-baoWhite shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
              ${item.highlight ? 'highlight-box' : ''}`}
          >
            <h3 className="mb-4 font-bakbak text-2xl">{item.title}</h3>
            <p className="mb-6">{item.description}</p>
            <div className="align-right mt-auto flex justify-end gap-3">
              <Button
                variant="solid"
                color="baoPink"
                href={item.links ? item.links[0] : undefined}
                className={
                  item.comingSoon ? 'cursor-not-allowed opacity-50' : ''
                }
              >
                {item.buttons[0]}
              </Button>
              <Button
                variant="solid"
                color="baoWhite"
                href={item.links ? item.links[1] : undefined}
                className={
                  item.comingSoon ? 'cursor-not-allowed opacity-50' : ''
                }
              >
                {item.buttons[1]}
              </Button>
            </div>
            {item.comingSoon && (
              <div className="absolute right-5 top-5 rounded-sm bg-baoPink px-8 py-1 text-xs font-bold uppercase text-baoWhite">
                Coming Soon
              </div>
            )}
          </div>
        ))}
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
          animation: waveAnimation 20s ease-in-out infinite;
        }
        .animate-wave-slow {
          animation: waveAnimation 25s ease-in-out infinite;
        }
        .animate-wave-slower {
          animation: waveAnimation 30s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Earn
