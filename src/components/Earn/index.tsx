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
    <section className="relative overflow-hidden bg-baoWhite py-24">
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
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,106.7C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
              d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,90.7C672,96,768,96,864,90.7C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-8 md:grid-cols-2 md:grid-rows-[auto,1fr]">
        <div className="flex flex-col items-center justify-center text-center md:col-span-1">
          <h2 className="font-bakbak text-[clamp(30px,8vw,100px)] font-bold uppercase leading-none text-baoBlack">
            EARN
          </h2>
          <p className="mb-4 font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoBlack">
            BY PROVIDING LIQUIDITY.
          </p>
          <div className="inline-block rounded-md bg-baoBlack px-12 py-3">
            <span className="text-[clamp(12px,1.5vw,18px)] font-bold uppercase text-baoWhite">
              UP TO 50% vAPR
            </span>
          </div>
        </div>

        {earnItems.map((item, index) => (
          <div
            key={index}
            className={`bg-opacity-97 relative flex flex-col rounded-lg bg-baoBlack p-8 text-left text-baoWhite shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
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
              128L48,
              117.3C96,
              107,
              192,
              85,
              288,
              80C384,
              75,
              480,
              85,
              576,
              90.7C672,
              96,
              768,
              96,
              864,
              90.7C960,
              85,
              1056,
              75,
              1152,
              74.7C1248,
              75,
              1344,
              85,
              1392,
              90.7L1440,
              96L1440,
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
              160L48,
              149.3C96,
              139,
              192,
              117,
              288,
              112C384,
              107,
              480,
              117,
              576,
              122.7C672,
              128,
              768,
              128,
              864,
              122.7C960,
              117,
              1056,
              107,
              1152,
              106.7C1248,
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
              128L48,
              117.3C96,
              107,
              192,
              85,
              288,
              80C384,
              75,
              480,
              85,
              576,
              90.7C672,
              96,
              768,
              96,
              864,
              90.7C960,
              85,
              1056,
              75,
              1152,
              74.7C1248,
              75,
              1344,
              85,
              1392,
              90.7L1440,
              96L1440,
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
          animation: waveAnimation 10s ease-in-out infinite;
        }
        .animate-wave-slow {
          animation: waveAnimation 13s ease-in-out infinite;
        }
        .animate-wave-slower {
          animation: waveAnimation 16s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Earn
