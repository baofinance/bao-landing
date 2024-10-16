import React from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaCoins, FaUsers, FaBalanceScale } from 'react-icons/fa'

export function Security() {
  return (
    <section className="relative overflow-hidden bg-baoBlack py-24 text-baoWhite">
      {/* Topology background */}
      <div className="absolute inset-0 w-full">
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
          </defs>
          <path
            d="M0 200 Q 400 50, 800 250 T 1600 200"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-1"
          />
          <path
            d="M0 200 Q 400 50, 800 250 T 1600 200"
            fill="url(#grad1)"
            className="animate-flow-1"
          />
          <path
            d="M0 400 Q 600 300, 1200 450 T 1600 400"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-2"
          />
          <path
            d="M0 400 Q 600 300, 1200 450 T 1600 400"
            fill="url(#grad2)"
            className="animate-flow-2"
          />
          <path
            d="M0 600 Q 200 500, 800 650 T 1600 600"
            fill="none"
            stroke="#e23a52"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="animate-flow-3"
          />
          <path
            d="M0 600 Q 200 500, 800 650 T 1600 600"
            fill="url(#grad1)"
            className="animate-flow-3"
          />
        </svg>
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
              className="group relative flex flex-col items-center rounded-lg bg-baoBlack bg-opacity-90 p-8 text-center text-baoWhite shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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

      <style jsx>{`
        @keyframes flowAnimation {
          0% {
            d: path(M0 200 Q 400 50, 800 250 T 1600 200);
          }
          50% {
            d: path(M0 220 Q 450 100, 850 270 T 1600 220);
          }
          100% {
            d: path(M0 200 Q 400 50, 800 250 T 1600 200);
          }
        }
        .animate-flow-1 {
          animation: flowAnimation 20s ease-in-out infinite;
        }
        .animate-flow-2 {
          animation: flowAnimation 25s ease-in-out infinite;
        }
        .animate-flow-3 {
          animation: flowAnimation 30s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Security
