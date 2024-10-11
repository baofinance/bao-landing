import DiscordLink from '@/components/DiscordLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
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
              [
                'Chainlink',
                '/images/logos/chainlink.svg',
                'https://chain.link',
              ],
              ['Balancer', '/images/logos/balancer.svg', 'https://balancer.fi'],
              [
                'Liquity',
                '/images/logos/liquity.svg',
                'https://www.liquity.org',
              ],
              ['Aura', '/images/logos/aura.svg', 'https://aura.finance'],
              [
                'Curve',
                '/images/logos/curve.svg',
                'https://curve.fi/#/ethereum/swap',
              ],
              [
                'StakeDAO',
                '/images/logos/stake-dao.svg',
                'https://stakedao.org/',
              ],
              [
                'BProtocol',
                '/images/logos/b-protocol.svg',
                'https://www.bprotocol.org',
              ],
              [
                'Paladin',
                '/images/logos/paladin.png',
                'https://paladin.vote/#/',
              ],
            ].map(([name, src, href]) => (
              <li key={name} className={clsx('flex')}>
                <Link href={href}>
                  <Image
                    src={src}
                    alt={name}
                    className="h-14 w-14 rounded-full bg-baoWhite/5 p-2 outline outline-1 outline-baoWhite/30"
                    width={100}
                    height={100}
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
