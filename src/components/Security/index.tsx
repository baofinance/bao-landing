import React from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaCoins, FaUsers, FaBalanceScale } from 'react-icons/fa'

export function Security() {
  return (
    <div className="relative overflow-hidden bg-baoBlack py-24 pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-5">
        <div className="absolute inset-0 animate-flicker1 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-0"></div>
        <div className="absolute inset-0 animate-flicker2 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-0"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <h2 className="font-bakbak text-[clamp(30px,8vw,100px)] font-bold uppercase leading-none text-baoWhite">
            SECURED
          </h2>
          <p className="font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoWhite">
            BY DESIGN
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: FaShieldAlt,
              title: 'Audits',
              description:
                'All contracts are continuously monitored by white hat hackers since 2021.',
              logo: '/images/logos/immunefi.svg',
            },
            {
              icon: FaCoins,
              title: 'Collateral',
              description:
                'Bao only allows ETH and ETH-backed tokens with the highest decentralization standards. Approved backing assets include ETH, wstETH, rETH, and LUSD. All new collaterals undergo a rigorous risk assessment process.',
            },
            {
              icon: FaUsers,
              title: 'Decentralization',
              description:
                'While there are some centralized aspects initially, with multi-sigs controlling various parameters, we are actively working on removing trust and will not stop until the protocol is completely trustless.',
            },
            {
              icon: FaBalanceScale,
              title: 'Pegging',
              description:
                'baoUSD and baoETH maintain strong pegs through various mechanisms including variable borrow rates, Liquidity Balancers, and redeemability (coming soon with the Minter).',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative  flex flex-col items-center rounded-lg bg-baoBlack bg-opacity-90 p-8 text-center text-baoWhite shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-baoPink">
                <item.icon className="text-4xl text-baoWhite" />
              </div>
              <h3 className="mb-4 mt-8 font-bakbak text-2xl">{item.title}</h3>
              <p className="mb-6 text-sm">{item.description}</p>
              {item.logo && (
                <Image
                  src={item.logo}
                  alt="Immunefi Logo"
                  width={100}
                  height={30}
                  className="mt-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Security
