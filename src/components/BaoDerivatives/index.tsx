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
      {/* Coordinated light beam effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="light-beam light-beam-1"></div>
        <div className="light-beam light-beam-2"></div>
        <div className="light-beam light-beam-3"></div>
        <div className="light-beam light-beam-4"></div>
        <div className="light-beam light-beam-5"></div>
      </div>

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

      <style jsx>{`
        .light-beam {
          position: absolute;
          width: 0;
          height: 0;
          opacity: 0.1;
          border-left: 75px solid transparent;
          border-right: 75px solid transparent;
          border-top: 1000px solid #e23a52;
          transform-origin: top;
          animation: moveBeam 10s infinite ease-in-out;
        }

        .light-beam-1 {
          left: 10%;
          animation-delay: 0s;
        }
        .light-beam-2 {
          left: 30%;
          animation-delay: -2s;
        }
        .light-beam-3 {
          left: 50%;
          animation-delay: -4s;
        }
        .light-beam-4 {
          left: 70%;
          animation-delay: -6s;
        }
        .light-beam-5 {
          left: 90%;
          animation-delay: -8s;
        }

        @keyframes moveBeam {
          0%,
          100% {
            transform: translateX(-50px) rotate(-5deg);
          }
          50% {
            transform: translateX(50px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  )
}

export default BaoDerivatives
