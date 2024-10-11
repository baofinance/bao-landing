import React from 'react'
import { BaoETHLogo, BaoUSDLogo, BaoBTCLogo, BaoQuestionLogo } from './Logos'
import { Button } from '../Button'

const BaoDerivatives = () => {
  return (
    <section className="relative overflow-hidden bg-baoBlack py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bakbak text-[clamp(50px,12vw,150px)] font-bold uppercase leading-none text-baoWhite">
            BAO DERIVATIVES
          </h2>
        </div>

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
                'Imagine the possibilities: tokenized weather derivatives, real estate indices, or even sentiment analysis tokens. By leveraging diverse data feeds, we can create innovative financial instruments that reflect real-world events and trends, opening up new horizons for decentralized finance.',
              buttons: ['Explore Ideas', 'Suggest a Derivative'],
              comingSoon: true,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center rounded-xl p-8 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -top-10 left-1/2 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-baoPink">
                {item.logo}
              </div>
              <h3 className="mb-4 mt-12 font-bakbak text-2xl font-bold text-baoWhite">
                {item.title}
              </h3>
              <p className="mb-8 flex-grow text-sm text-baoWhite">
                {item.description}
              </p>
              <div className="flex w-full flex-col gap-4">
                {item.buttons.map((button, buttonIndex) => (
                  <Button
                    key={buttonIndex}
                    className={`w-full px-4 py-2  ${
                      buttonIndex === 0
                        ? 'bg-baoPink text-baoWhite hover:bg-baoPink/80'
                        : 'bg-baoWhite text-baoBlack hover:bg-baoWhite/80'
                    } ${
                      item.comingSoon ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                  >
                    {button}
                  </Button>
                ))}
              </div>
              {item.comingSoon && (
                <div className="absolute right-3 top-3 rounded-sm bg-baoPink px-2 py-1 text-[.7rem] font-bold uppercase text-baoWhite">
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
