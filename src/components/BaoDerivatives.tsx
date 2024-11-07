import React from 'react'
import {
  BaoETHLogo,
  BaoUSDLogo,
  BaoBTCLogo,
  BaoQuestionLogo,
} from './BaoDerivatives/Logos'
import { Button, ButtonProps } from '@/components/Button'
import { Container } from '@/components/Container'

export function BaoDerivatives() {
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

      <Container className="relative z-10">
        <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
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
              title: (
                <span>
                  bao
                  <span className="select-none blur-[8px]">xyz</span>
                </span>
              ),
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
              {item.comingSoon && (
                <div className="absolute -right-10 top-4 z-30 flex items-center justify-center">
                  <div className="rotate-[45deg] transform">
                    <div className="rounded-sm bg-baoPink/80 px-4 py-1.5 text-base font-bold uppercase tracking-widest text-baoWhite shadow-lg outline outline-1 outline-offset-2 outline-baoPink/60">
                      Coming Soon
                    </div>
                  </div>
                </div>
              )}
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
            </div>
          ))}
        </div>
      </Container>

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

export default BaoDerivatives
