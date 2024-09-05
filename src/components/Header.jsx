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
import { Logo } from '@/components/Logo'
import clsx from 'clsx'
import Image from 'next/image'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 6L6 18"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 6L18 6L18 16"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-baoWhite hover:text-baoRed"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  return (
    <nav className="fixed left-0 right-0 z-50 border-b border-baoPink/10 backdrop-blur-md">
      {' '}
      {/* Added border-b and border-baoPink/10 */}
      <Container className="flex justify-between py-6">
        <div className="relative z-10 flex items-center gap-16">
          <Link
            href="/"
            className="flex place-items-center space-x-4 px-2 py-2"
            aria-label="Home"
          >
            <Logo className="h-10 w-auto" /> {/* Reduced from h-16 to h-10 */}
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Button
            variant="solid"
            color="baoPink"
            href="https://app.baofinance.io"
            className="hidden lg:block"
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
