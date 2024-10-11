import React, { useState } from 'react'
import Image from 'next/image'

const partners = [
  {
    name: 'Balancer',
    logo: '/images/logos/balancer.svg',
    description:
      'Bao uses Balancer for liquidity provision and AMM functionality, allowing users to trade baoUSD and baoETH efficiently.',
  },
  {
    name: 'Chainlink',
    logo: '/images/logos/chainlink.svg',
    description:
      "Chainlink oracles are used to provide accurate and tamper-proof price feeds for Bao's tokenized derivatives.",
  },
  {
    name: 'Gnosis',
    logo: '/images/logos/gnosis.svg',
    description:
      "Gnosis Safe is utilized for secure multi-signature wallets to manage Bao's treasury and critical protocol parameters.",
  },
  {
    name: 'Snapshot',
    logo: '/images/logos/snapshot.svg',
    description:
      'Bao uses Snapshot for decentralized governance voting, allowing BAO token holders to participate in decision-making.',
  },
  {
    name: 'The Graph',
    logo: '/images/logos/the-graph.svg',
    description:
      'The Graph is used to index and query blockchain data, providing efficient access to Bao protocol information.',
  },
  {
    name: 'Uniswap',
    logo: '/images/logos/uniswap.svg',
    description:
      "Uniswap provides additional liquidity and trading options for BAO tokens and Bao's synthetic assets.",
  },
]

export function Integrations() {
  const [activePartner, setActivePartner] = useState(partners[0])

  return (
    <section className="relative overflow-hidden bg-baoWhite py-24 text-baoBlack">
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <h2 className="mb-12 text-center font-bakbak text-[clamp(30px,6vw,80px)] font-bold leading-tight">
          Integrated with the Best
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex cursor-pointer items-center justify-center bg-baoBlack bg-opacity-10 p-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
                onMouseEnter={() => setActivePartner(partner)}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={100}
                  height={100}
                  className="h-auto max-w-full"
                />
              </div>
            ))}
          </div>
          <div className="bg-baoBlack p-8 text-baoWhite">
            <h3 className="mb-4 font-bakbak text-3xl">{activePartner.name}</h3>
            <p className="text-base leading-relaxed">
              {activePartner.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
