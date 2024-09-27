import DiscordLink from '@/components/DiscordLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import logoAura from '@/images/logos/aura.svg'
import logoBProtocol from '@/images/logos/b-protocol.svg'
import logoBalancer from '@/images/logos/balancer.svg'
import logoChainlink from '@/images/logos/chainlink.svg'
import logoCurve from '@/images/logos/curve.svg'
import logoLiquity from '@/images/logos/liquity.svg'
import logoPaladin from '@/images/logos/paladin.png'
import logoStakeDAO from '@/images/logos/stake-dao.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section
      id="join-us-on-discord"
      className="relative overflow-hidden bg-gray-900 py-10"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#e53164" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="relative mb-2 flex flex-col place-items-center">
          <h1 className="mx-auto flex text-center font-bakbak text-3xl tracking-tight text-baoWhite">
            Partners
          </h1>
          <ul
            role="list"
            className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-4 lg:mx-0"
          >
            {[
              ['Chainlink', logoChainlink, 'https://chain.link'],
              ['Balancer', logoBalancer, 'https://balancer.fi'],
              ['Liquity', logoLiquity, 'https://www.liquity.org'],
              ['Aura', logoAura, 'https://aura.finance'],
              ['Curve', logoCurve, 'https://curve.fi/#/ethereum/swap'],
              ['StakeDAO', logoStakeDAO, 'https://stakedao.org/'],
              ['BProtocol', logoBProtocol, 'https://www.bprotocol.org'],
              ['Paladin', logoPaladin, 'https://paladin.vote/#/'],
            ].map(([name, logo, href]) => (
              <li key={name} className={clsx('flex')}>
                <Link href={href}>
                  <Image
                    src={logo}
                    alt={name}
                    className="h-14 w-14 rounded-full bg-baoWhite/5 p-2 outline outline-1 outline-baoWhite/30"
                    unoptimized
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
