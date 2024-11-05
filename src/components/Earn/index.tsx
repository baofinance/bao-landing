import React from 'react'
import { Button } from '../Button'
import Image from 'next/image'
import { Container } from '../Container'

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
      title: 'Staked Derivatives (S-Tokens)',
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

      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Title Section - Takes up one cell in the 2x2 grid */}
          <div className="relative z-10 flex min-h-[200px] flex-col items-center justify-center text-center">
            <h2 className="mb-4 font-bakbak text-[clamp(24px,6vw,80px)] font-bold uppercase leading-none text-baoWhite">
              EARN
            </h2>
            <div className="mb-4 inline-block bg-baoPink px-4 py-2">
              <p className="font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoWhite">
                BY PROVIDING LIQUIDITY
              </p>
            </div>
            <p className="glow font-bakbak text-[clamp(18px,2vw,24px)] font-bold text-baoWhite">
              UP TO 50% VAPR
            </p>
          </div>

          {/* AMM Liquidity Box - Next to title */}
          <div className="relative flex h-[200px] flex-col rounded-xl bg-baoBlack p-8 text-left shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-4 font-bakbak text-2xl font-bold text-baoWhite">
              {earnItems[0].title}
            </h3>
            <p className="mb-auto flex-grow text-sm text-baoWhite">
              {earnItems[0].description}
            </p>
            <div className="flex justify-end gap-4">
              {earnItems[0].buttons.map((button, buttonIndex) => (
                <Button
                  key={buttonIndex}
                  href={earnItems[0].links?.[buttonIndex] ?? '#'}
                  variant="solid"
                  color={buttonIndex === 0 ? 'baoPink' : 'baoWhite'}
                  className="rounded-xl px-4 py-2"
                >
                  {button}
                </Button>
              ))}
            </div>
          </div>

          {/* Stability Pools and Staked Derivatives - Below in their own row */}
          {earnItems.slice(1).map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-xl bg-baoBlack p-8 text-left shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {item.comingSoon && (
                <div className="absolute -right-10 top-4 z-30 flex items-center justify-center">
                  <div className="rotate-[45deg] transform">
                    <div className="rounded-sm bg-baoPink/80 px-4 py-1.5 text-base font-bold uppercase tracking-widest text-baoWhite shadow-lg outline outline-1 outline-offset-2 outline-baoPink/60">
                      Coming Soon
                    </div>
                  </div>
                </div>
              )}
              <h3 className="mb-4 font-bakbak text-2xl font-bold text-baoWhite">
                {item.title}
              </h3>
              <p className="mb-8 flex-grow text-sm text-baoWhite">
                {item.description}
              </p>
              <div className="flex justify-end gap-4">
                {item.buttons.map((button, buttonIndex) => {
                  if (item.comingSoon) {
                    return (
                      <div
                        key={buttonIndex}
                        className={`cursor-not-allowed rounded-xl px-4 py-2 text-center font-medium opacity-50 ${
                          buttonIndex === 0
                            ? 'bg-[#9e1239] text-baoWhite'
                            : 'bg-[#808080] text-baoBlack'
                        }`}
                      >
                        {button}
                      </div>
                    )
                  }

                  return (
                    <Button
                      key={buttonIndex}
                      href={item.links?.[buttonIndex] ?? '#'}
                      variant="solid"
                      color={buttonIndex === 0 ? 'baoPink' : 'baoWhite'}
                      className={`rounded-xl px-4 py-2 ${
                        buttonIndex === 0
                          ? 'bg-[#9e1239]/90 text-baoWhite hover:bg-[#9e1239]'
                          : 'bg-[#808080]/90 text-baoBlack hover:bg-[#808080]'
                      }`}
                    >
                      {button}
                    </Button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        .glow {
          text-shadow: 0 0 10px rgba(226, 26, 83, 0.5),
            0 0 20px rgba(226, 26, 83, 0.3), 0 0 30px rgba(226, 26, 83, 0.2);
        }
      `}</style>
    </section>
  )
}

export default Earn
