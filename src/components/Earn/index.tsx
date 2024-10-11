import React from 'react'
import { Button } from '../Button'

export function Earn() {
  return (
    <section className="relative overflow-hidden bg-baoWhite py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-5">
        <div className="absolute inset-0 animate-flicker1 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-0"></div>
        <div className="absolute inset-0 animate-flicker2 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-0"></div>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-8 md:grid-cols-2 md:grid-rows-[auto,1fr]">
        <div className="flex flex-col items-center justify-center text-center md:col-span-1">
          <h2 className="font-bakbak text-[clamp(30px,8vw,100px)] font-bold uppercase leading-none text-baoBlack">
            EARN
          </h2>
          <p className="mb-4 font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoBlack">
            BY PROVIDING LIQUIDITY.
          </p>
          <div className="inline-block rounded-md bg-baoBlack px-4 py-2">
            <span className="text-[clamp(12px,1.5vw,18px)] font-bold uppercase text-baoWhite">
              UP TO 50% vAPR
            </span>
          </div>
        </div>

        {[
          {
            title: 'AMM liquidity',
            description:
              'Deposit into ETH or USD pegged pools providing swap liquidity and earn AURA and BAL tokens',
            buttons: ['Deposit', 'Learn More'],
            comingSoon: false,
          },
          {
            title: 'Stability pools',
            description:
              'Deposit derivatives and earn ETH for securing the protocol',
            buttons: ['Deposit', 'Learn More'],
            comingSoon: true,
          },
          {
            title: 'MultiLend',
            description:
              'Lend in multiple markets simultaneously with a single deposit.',
            buttons: ['Deposit', 'Learn More'],
            comingSoon: true,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-opacity-97 relative flex flex-col rounded-lg bg-baoBlack p-8 text-left text-baoWhite shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="mb-4 font-bakbak text-2xl">{item.title}</h3>
            <p className="mb-6">{item.description}</p>
            <div className="align-right mt-auto flex justify-end gap-3">
              <Button
                variant="solid"
                color="baoPink"
                className={
                  item.comingSoon ? 'cursor-not-allowed opacity-50' : ''
                }
              >
                {item.buttons[0]}
              </Button>
              <Button
                variant="solid"
                color="baoWhite"
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
    </section>
  )
}
