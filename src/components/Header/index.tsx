import React from 'react'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import logoAura from '@/images/logos/aura.svg'
import logoBProtocol from '@/images/logos/b-protocol.svg'
import logoBalancer from '@/images/logos/balancer.svg'
import logoChainlink from '@/images/logos/chainlink.svg'
import logoCurve from '@/images/logos/curve.svg'
import logoLiquity from '@/images/logos/liquity.svg'
import logoPaladin from '@/images/logos/paladin.png'
import logoStakeDAO from '@/images/logos/stake-dao.svg'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'

export function Header() {
  return (
    <nav className="fixed left-0 right-0 z-50 border-b border-baoPink/10 backdrop-blur-md">
      <Container className="flex justify-between py-3">
        <div className="relative z-10 flex items-center gap-16">
          <Link
            href="/"
            className="flex place-items-center space-x-4 px-2"
            aria-label="Home"
          >
            <Image
              src="/images/logos/BaoLogoFull.svg"
              alt="BAO Logo"
              width={100 * 0.6}
              height={40 * 0.6}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Button
            variant="solid"
            color="baoPink"
            href="https://app.baofinance.io"
            className="hidden !px-3 !py-2 lg:block"
          >
            Launch App
          </Button>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className="relative z-10 inline-flex h-[40px] w-[40px] items-center rounded-lg stroke-baoWhite p-2 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                  aria-label="Toggle site navigation"
                >
                  <div className="flex flex-col items-center justify-center">
                    <span
                      className={`block h-0.5 w-6 rounded-sm bg-baoWhite 
                    transition-all duration-300 ease-out ${
                      open ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
                    }`}
                    ></span>
                    <span
                      className={`my-0.5 block h-0.5 w-6 rounded-sm bg-baoWhite transition-all duration-300 ease-out ${
                        open ? 'opacity-0' : 'opacity-100'
                      }`}
                    ></span>
                    <span
                      className={`block h-0.5 w-6 rounded-sm bg-baoWhite 
                    transition-all duration-300 ease-out ${
                      open ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
                    }`}
                    ></span>
                  </div>
                </Popover.Button>
                {/* Rest of the Popover content */}
              </>
            )}
          </Popover>
        </div>
      </Container>
    </nav>
  )
}
