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
                <Image
                  src="/images/logos/chainlink.svg"
                  alt="Chainlink Logo"
                  width={100}
                  height={100}
                />,
                'https://chain.link',
              ],
              [
                'Balancer',
                <Image
                  src="/images/logos/balancer.svg"
                  alt="Balancer Logo"
                  width={100}
                  height={100}
                />,
                'https://balancer.fi',
              ],
              [
                'Liquity',
                <Image
                  src="/images/logos/liquity.svg"
                  alt="Liquity Logo"
                  width={100}
                  height={100}
                />,
                'https://www.liquity.org',
              ],
              [
                'Aura',
                <Image
                  src="/images/logos/aura.svg"
                  alt="Aura Logo"
                  width={100}
                  height={100}
                />,
                'https://aura.finance',
              ],
              [
                'Curve',
                <Image
                  src="/images/logos/curve.svg"
                  alt="Curve Logo"
                  width={100}
                  height={100}
                />,
                'https://curve.fi/#/ethereum/swap',
              ],
              [
                'StakeDAO',
                <Image
                  src="/images/logos/stake-dao.svg"
                  alt="StakeDAO Logo"
                  width={100}
                  height={100}
                />,
                'https://stakedao.org/',
              ],
              [
                'BProtocol',
                <Image
                  src="/images/logos/b-protocol.svg"
                  alt="B Protocol Logo"
                  width={100}
                  height={100}
                />,
                'https://www.bprotocol.org',
              ],
              [
                'Paladin',
                <Image
                  src="/images/logos/paladin.png"
                  alt="Paladin Logo"
                  width={100}
                  height={100}
                />,
                'https://paladin.vote/#/',
              ],
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
