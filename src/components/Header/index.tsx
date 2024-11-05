import React from 'react'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'

const navigationLinks = [
  {
    name: 'Docs',
    href: 'https://info.bao.finance/docs',
  },
  {
    name: 'Governance',
    href: 'https://snapshot.org/#/baovotes.eth',
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/BW3P62vJXT',
  },
  {
    name: 'Bug Bounty',
    href: 'https://www.immunefi.com/bounty/baofinance',
  },
]

const mobileMenuLinks = [
  ...navigationLinks,
  {
    name: 'Medium',
    href: 'https://medium.com/baomunity',
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/baocommunity',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/baofinance',
  },
  {
    name: 'DeBank',
    href: 'https://debank.com/profile/0xf4Dc48D260C93ad6a96c5Ce563E70CA578987c74',
  },
]

export function Header() {
  return (
    <nav className="fixed left-0 right-0 z-50 border-b border-baoPink/10 backdrop-blur-md">
      <Container className="flex justify-between py-3">
        <div className="relative z-10 flex w-full items-center justify-between">
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

          <div className="hidden md:flex md:gap-16">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-baoWhite transition-colors hover:text-baoPink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </Link>
            ))}
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
                  <AnimatePresence>
                    {open && (
                      <Popover.Panel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute inset-x-0 top-0 z-0 origin-top bg-baoBlack px-6 pb-6 pt-24 shadow-2xl"
                      >
                        <div className="space-y-4">
                          <Link
                            href="https://app.baofinance.io"
                            className="block text-base font-semibold text-baoPink hover:text-baoPink/80"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Launch App
                          </Link>
                          {mobileMenuLinks.map((link) => (
                            <div key={link.name}>
                              <Link
                                href={link.href}
                                className="block text-base text-baoWhite hover:text-baoPink"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </div>
      </Container>
    </nav>
  )
}
