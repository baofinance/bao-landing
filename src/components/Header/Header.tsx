import Logo from '@/components/Logo'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { isDesktop } from 'react-device-detect'
import AccountButton from '../AccountButton'
import Nav from '../Nav'

export interface IconProps {
	color?: string
	children?: ReactNode
	size?: number
	className?: string
}

const MenuIcon: FC<IconProps> = ({ size = 24, ...props }) => {
	return (
		<svg viewBox='0 0 24 24' fill='none' aria-hidden='true' {...props}>
			<path d='M5 6h14M5 18h14M5 12h14' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
}

const ChevronUpIcon: FC<IconProps> = ({ size = 24, ...props }) => {
	return (
		<svg viewBox='0 0 24 24' fill='none' aria-hidden='true' {...props}>
			<path d='M17 14l-5-5-5 5' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
}

export interface MobileNavLinkProps {
	href: string
	target?: string
	children?: ReactNode
}

const MobileNavLink: FC<MobileNavLinkProps> = ({ href, children, target, ...props }) => {
	return (
		<Popover.Button as={Link} href={href} target={target} className='block text-base leading-7 tracking-tight text-baoWhite' {...props}>
			{children}
		</Popover.Button>
	)
}

const Header: FC = () => {
	return (
		<header className='glassmorphic-card z-50 mx-[10vh] my-8 w-auto'>
			<nav>
				<div className='relative z-50 flex max-w-full justify-between px-8 py-4'>
					<div className='relative z-10 flex items-center gap-8'>
						<Logo />
					</div>
					<div className='flex items-center gap-2'>
						{isDesktop ? (
							<div className='mr-8 flex gap-8'>
								<Nav />
							</div>
						) : (
							<Popover>
								{({ open }) => (
									<>
										<Popover.Button
											className='stroke-text-100 relative z-10 -mr-2 inline-flex items-center rounded p-2 outline-none hover:bg-baoRed/50 [&:not(:focus-visible)]:focus:outline-none'
											aria-label='Toggle site navigation'
										>
											{({ open }) => (open ? <ChevronUpIcon className='h-6 w-6' /> : <MenuIcon className='h-6 w-6' />)}
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
														className='bg-background-100/60 fixed inset-0 z-0 backdrop-blur'
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
														className='absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-baoRed px-6 pb-6 pt-32'
													>
														<div className='space-y-4'>LINKS HERE</div>
													</Popover.Panel>
												</>
											)}
										</AnimatePresence>
									</>
								)}
							</Popover>
						)}

						<AccountButton />
					</div>
				</div>
			</nav>
		</header>
	)
}
export default Header
