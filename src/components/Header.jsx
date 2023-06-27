import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

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
<path d="M18 6L6 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 6L18 6L18 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
  )}


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
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
          <Button variant='transparent' color='white' href="#" className="hidden lg:block">
              Launch App
            </Button>
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 inline-flex items-center rounded-lg stroke-baoWhite p-2 h-[40px] w-[40px] active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
							<div className='flex flex-col items-center justify-center'>
								<span
									className={`block h-0.5 w-6 rounded-sm bg-baoWhite 
                    transition-all duration-300 ease-out ${open ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}`}
								></span>
								<span
									className={`my-0.5 block h-0.5 w-6 rounded-sm bg-baoWhite transition-all duration-300 ease-out ${
										open ? 'opacity-0' : 'opacity-100'
									}`}
								></span>
								<span
									className={`block h-0.5 w-6 rounded-sm bg-baoWhite 
                    transition-all duration-300 ease-out ${open ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}`}
								></span>
							</div>
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-baoBlack/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-baoBlack px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
										<div className='py-4'>
                      <p className='block text-lg leading-7 tracking-tight text-baoWhite/60 font-bakbak'>Learn</p>
											<MobileNavLink href='https://medium.com/baomunity' target='_blank'>
												Blog <ExternalLinkIcon className='h-3 w-3 align-top inline-block stroke-baoWhite'/>
											</MobileNavLink>
											<MobileNavLink href='https://docs.bao.finance' target='_blank'>
												Docs <ExternalLinkIcon className='h-3 w-3 align-top inline-block stroke-baoWhite'/>
											</MobileNavLink>
										</div>
										<div className='py-4'>
                    <p className='block text-lg leading-7 tracking-tight text-baoWhite/60 font-bakbak'>Products</p>
											<MobileNavLink href='https://app.bao.finance/vaults'>Vaults</MobileNavLink>
											<MobileNavLink href='https://app.bao.finance/baskets'>Baskets</MobileNavLink>
											<MobileNavLink href='https://app.bao.finance/vebao'>veBAO</MobileNavLink>
											<MobileNavLink href='https://app.bao.finance/gauges'>Gauges</MobileNavLink>
										</div>
										<div className='py-4'>
                    <p className='block text-lg leading-7 tracking-tight text-baoWhite/60 font-bakbak'>Ecosystem</p>
											<MobileNavLink href='https://snapshot.org/#/baovotes.eth/' target='_blank'>
												Snapshot Governance <ExternalLinkIcon className='h-3 w-3 align-top inline-block stroke-baoWhite'/>
											</MobileNavLink>
											<MobileNavLink href='https://www.immunefi.com/bounty/baofinance' target='_blank'>
												Immunefi Bug Bounty <ExternalLinkIcon className='h-3 w-3 align-top inline-block stroke-baoWhite'/>
											</MobileNavLink>
											<MobileNavLink href='https://gov.bao.finance/' target='_blank'>
												Forum <ExternalLinkIcon className='h-3 w-3 align-top inline-block stroke-baoWhite'/>
											</MobileNavLink>
										</div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="https://app.bao.finance/" variant="solid">
                              Launch App
                            </Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  )
}
