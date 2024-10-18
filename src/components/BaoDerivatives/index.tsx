import React from 'react'
import { BaoETHLogo, BaoUSDLogo, BaoBTCLogo, BaoQuestionLogo } from './Logos'
import { Button, ButtonProps } from '../Button'

const BaoDerivatives: React.FC = () => {
  const DISCORD_INVITE_LINK = 'https://discord.gg/BW3P62vJXT'

  const buttonProps = (
    buttonIndex: number,
    children: React.ReactNode,
    specialLinks?: string[]
  ): Omit<ButtonProps, 'children'> => ({
    href: specialLinks
      ? specialLinks[buttonIndex]
      : buttonIndex === 0
      ? 'https://app.baofinance.io/swap'
      : 'https://app.baofinance.io/vaults',
    className: `w-full px-4 py-2`,
    color: buttonIndex === 0 ? 'baoPink' : 'baoWhite',
  })

  return (
    <section className="relative overflow-hidden bg-baoBlack py-24 lg:py-32">
      {/* Background with animated lines */}
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
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e23a52" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#e23a52" stopOpacity="0.03" />
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
            fill="url(#grad3)"
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              logo: <BaoUSDLogo />,
              title: 'baoUSD',
              description:
                'Backed by ETH and other ETH backed tokens. A safe haven for those that favor decentralization and transparency.',
              buttons: ['Get baoUSD', 'Borrow baoUSD'],
              comingSoon: false,
            },
            {
              logo: <BaoETHLogo />,
              title: 'baoETH',
              description:
                'Backed by ETH. baoETH solves high borrow rates for ETH. Unlike traditional markets, baoETH does not need to be deposited before it is borrowed unlocking greater capital efficiency for borrowers.',
              buttons: ['Get baoETH', 'Borrow baoETH'],
              comingSoon: false,
            },
            {
              logo: <BaoBTCLogo />,
              title: 'baoBTC',
              description:
                'A decentralized, Bitcoin-pegged token on Ethereum, backed by ETH. Unlike wBTC and other alternatives, it avoids centralized control, offering a secure and transparent option for using Bitcoin in DeFi applications.',
              buttons: ['Get baoBTC', 'Borrow baoBTC'],
              comingSoon: true,
            },
            {
              logo: <BaoQuestionLogo />,
              title: 'bao???',
              description:
                "Unleash the future: Weather-proof your portfolio, tokenize real estate, or trade sentiment. With diverse data feeds, we're crafting financial instruments that pulse with real-world rhythms. Welcome to DeFi's new frontier.",
              buttons: ['Explore Ideas', 'Suggest a Derivative'],
              comingSoon: false,
              specialLinks: [
                'https://info.bao.finance/docs/synth-use-cases',
                DISCORD_INVITE_LINK,
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center rounded-xl bg-baoBlack p-8 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-baoPink">
                {item.logo}
              </div>
              <h3 className="mb-4 mt-8 font-bakbak text-2xl font-bold text-baoWhite">
                {item.title}
              </h3>
              <p className="mb-8 flex-grow text-sm text-baoWhite">
                {item.description}
              </p>
              <div className="flex w-full flex-col gap-4">
                {item.buttons.map((button, buttonIndex) => {
                  if (item.comingSoon) {
                    return (
                      <div
                        key={buttonIndex}
                        className={`w-full rounded-md px-4 py-2 text-center font-medium ${
                          buttonIndex === 0
                            ? 'bg-baoPink/50 text-baoWhite'
                            : 'bg-baoWhite/50 text-baoBlack'
                        } cursor-not-allowed opacity-50`}
                      >
                        {button}
                      </div>
                    )
                  }

                  return (
                    <Button
                      key={buttonIndex}
                      {...buttonProps(buttonIndex, button, item.specialLinks)}
                    >
                      {button}
                    </Button>
                  )
                })}
              </div>
              {item.comingSoon && item.title !== 'bao???' && (
                <div className="absolute right-2 top-2 rounded-sm bg-baoPink px-2 py-0.5 text-[.6rem] font-bold uppercase text-baoWhite">
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BaoDerivatives
