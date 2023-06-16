import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Typography from '@/components/Typography'
import { getDisplayBalance } from '@/utils/numberFormat'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from '@tanstack/react-query'
import { BigNumber } from 'ethers'
import Image from 'next/future/image'
import React, { Fragment, useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const Vaults: React.FC = () => {
	return (
		<>
			<Hero />

			<section className='relative'>
				<div className='custom-shape-divider-top-1686859007'>
					<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
						<path
							d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
							opacity='.25'
							className='shape-fill'
						></path>
						<path
							d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
							opacity='.5'
							className='shape-fill'
						></path>
						<path
							d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
							className='shape-fill'
						></path>
					</svg>
				</div>
				<div className='bg-baoRed py-32 sm:py-48 lg:py-56'>
					<iframe
						src='https://player.vimeo.com/video/836622461?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
						width='960'
						height='540'
						frameBorder='0'
						allow='autoplay; fullscreen; picture-in-picture'
						allowFullScreen
						title='Bao Intro Draft'
						className='m-auto rounded-xl'
					></iframe>
				</div>
				<div className='custom-shape-divider-bottom-1686858896'>
					<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
						<path
							d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
							opacity='.25'
							className='shape-fill'
						></path>
						<path
							d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
							opacity='.5'
							className='shape-fill'
						></path>
						<path
							d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
							className='shape-fill'
						></path>
					</svg>
				</div>
			</section>

			<Products />

			<div className='relative isolate px-6 lg:px-8'>
				<div className='mx-auto max-w-4xl pb-32 pt-24 sm:pb-48 lg:pb-56'>
					<div className='flex-inline flex justify-center gap-2'>
						<Typography variant='hero'>OUR</Typography>{' '}
						<Typography variant='hero' className='!text-baoRed'>
							VISION
						</Typography>
					</div>
					<Typography variant='p'>
						Traditional finance doesn’t work. For too long it’s been serving the wealthy suits while erecting barriers of entry for everyone
						else. They own the data, restrict the tools, and change the rules to always be in their favor. It’s time to not only give that
						power back to the people, but to create even more powerful tools that the old cumbersome system could never dream of.
					</Typography>{' '}
					<Typography variant='p'>
						At Bao Finance, we’re building a community composed of brilliant minds all seeking control of their own finances and building a
						new system that works for everyone. Synthetic assets allow us to create financial instruments and markets never seen before. If
						the data exists, so too can a marketplace for it - the possibilities are endless.
					</Typography>{' '}
					<Typography variant='p'>
						It all comes down to data. Most people aren’t aware that financial data is what makes institutions so powerful and why you can’t
						do what they do. This is why synthetics will matter. If you can get liquidity in any discrete quantifiable event, what have you
						created? The world’s most accurate financial data system. Financial data is used within insurance, lending, hedge funds, risk
						mitigation, banking, yield, mortgages, credit scores, etc.
					</Typography>{' '}
					<Typography variant='p'>
						Incentivised synthetics allow you to start building an open financial data market. Once you have synthetics, you own the
						financial data stream to anything because you can incentivise liquidity to make it more accurate. With this financial data
						stream you can start any DeFi business you want on top of it, or package and sell the data for others to build on. You become
						the foundation for the future of finance.
					</Typography>
				</div>
			</div>

			<section className='relative'>
				<div className='custom-shape-divider-top-1686859007'>
					<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
						<path
							d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
							opacity='.25'
							className='shape-fill'
						></path>
						<path
							d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
							opacity='.5'
							className='shape-fill'
						></path>
						<path
							d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
							className='shape-fill'
						></path>
					</svg>
				</div>
				<div className='bg-baoRed py-32 sm:py-48 lg:py-56'>
					<Partners />
				</div>
				<div className='custom-shape-divider-bottom-1686858896'>
					<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
						<path
							d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
							opacity='.25'
							className='shape-fill'
						></path>
						<path
							d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
							opacity='.5'
							className='shape-fill'
						></path>
						<path
							d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
							className='shape-fill'
						></path>
					</svg>
				</div>
			</section>

			<Faq />
			<div className='mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
				<h2 className='font-inter text-3xl font-bold tracking-tight text-baoWhite sm:text-4xl'>
					Ready to learn more?
					<br />
					Join our Discord community today.
				</h2>
				<div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
					<a
						href='#'
						className='rounded-md bg-baoWhite px-3.5 py-2.5 text-sm font-semibold text-baoBlack shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						<FontAwesomeIcon icon={faDiscord} className='mr-2' />
						Join Us!
					</a>
					<a href='#' className='text-sm font-semibold leading-6 text-baoWhite'>
						Learn more <span aria-hidden='true'>→</span>
					</a>
				</div>
			</div>
		</>
	)
}

export default Vaults

const Hero = () => {
	return (
		<div className='relative isolate -mt-24 px-6 lg:px-8'>
			<div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
				<div
					className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[50deg] bg-gradient-to-tr from-[#b51542] to-[#e84875] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div className='mx-auto max-w-4xl py-32 sm:py-48 lg:py-56'>
				<div className='hidden sm:mb-8 sm:flex sm:justify-center'>
					<div className='leading-60 relative rounded-full px-3 py-1 text-sm ring-1 ring-baoRed/40 hover:ring-baoRed/60'>
						Announcing baoETH, our newest synthetic.{' '}
						<a href='#' className='font-semibold text-baoRed'>
							<span className='absolute inset-0' aria-hidden='true' />
							Read more <span aria-hidden='true'>&rarr;</span>
						</a>
					</div>
				</div>
				<div className='mb-32 text-center'>
					<div className='flex-inline flex justify-center gap-4'>
						<Typography className='font-heading tracking-px-n mb-7 stroke-white font-bakbak text-6xl leading-tight md:text-7xl'>
							DELICIOUSLY
						</Typography>{' '}
						<Typography className='font-heading tracking-px-n mb-7 font-bakbak text-6xl leading-tight text-baoRed md:text-7xl'>
							WRAPPED
						</Typography>{' '}
						<Typography className='font-heading tracking-px-n mb-7 font-bakbak text-6xl leading-tight md:text-7xl'>FINANCE</Typography>
					</div>
					<Typography variant='p'>
						We are building omnichain, decentralized and secure synthetic liquidity, tokens and markets. Accessible to all. Stoppable by
						no-one.
					</Typography>
					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<a
							href='#'
							className='rounded-full bg-baoRed/80 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-baoRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Launch App
						</a>
						<a href='#' className='text-sm font-semibold leading-6 text-baoRed'>
							Learn more <span aria-hidden='true'>→</span>
						</a>
					</div>
				</div>
				<ProtocolData />
			</div>
		</div>
	)
}

const ProtocolData = () => {
	const {
		data: price,
		data: tvl,
		data: mcap,
	} = useQuery(
		[],
		async () => {
			const _price = await fetch(`https://bao-price-api.herokuapp.com/api/price?id=bao-finance-v2`)
			const price = await _price.json()
			if (!price) throw new Error(`Can't get BAO price.`)
			const _tvl = await fetch(`https://api.llama.fi/tvl/bao-finance/`)
			const tvl = await _tvl.json()
			if (!tvl) throw new Error(`Can't get TVL'.`)
			const _mcap = await fetch(
				`https://api.coingecko.com/api/v3/coins/bao-finance?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
			)
			const mcap = await _mcap.json()
			if (!mcap) throw new Error(`Can't get BAO market cap.`)

			return price.price['bao-finance-v2'].usd, parseFloat(tvl), mcap['total_supply'], mcap['market_data']['market_cap']['usd']
		},
		{
			retry: true,
			retryDelay: 1000 * 60,
			staleTime: 1000 * 60 * 60,
			cacheTime: 1000 * 60 * 120,
			refetchOnReconnect: false,
			refetchInterval: 1000 * 60 * 5,
			keepPreviousData: true,
			placeholderData: BigNumber.from(0),
		},
	)

	return (
		<div className='glassmorphic-card grid grid-cols-4 gap-16 px-6 py-6'>
			<div className='col-span-1 break-words text-center'>
				<Typography className='font-bakbak text-baoRed'>Total Value Locked</Typography>
				<Typography className='inline-block font-bakbak !text-2xl leading-5'>${tvl ? getDisplayBalance(tvl) : '-'}</Typography>
			</div>
			<div className='col-span-1 break-words text-center'>
				<Typography className='font-bakbak text-baoRed'>Total Holders</Typography>
				<Typography className='inline-block font-bakbak !text-2xl leading-5'>16K</Typography>
			</div>
			<div className='col-span-1 break-words text-center'>
				<Typography className='font-bakbak text-baoRed'>BAO Price</Typography>
				<Typography className='inline-block font-bakbak !text-2xl leading-5'>${price ? getDisplayBalance(price) : '-'}</Typography>
			</div>
			<div className='col-span-1 break-words text-center'>
				<Typography className='font-bakbak text-baoRed'>Market Cap</Typography>
				<Typography className='inline-block font-bakbak !text-2xl leading-5'>${mcap ? getDisplayBalance(mcap) : '-'}</Typography>
			</div>
		</div>
	)
}

const Products = () => {
	return (
		<>
			<div className='pt-32 sm:pt-48 lg:pt-56'>
				<div className='m-auto mb-10 max-w-6xl justify-center text-center'>
					<Typography variant='hero' className='mr-2 inline font-bakbak'>
						BALANCING,
					</Typography>
					<Typography variant='hero' className='-mt-2 mr-2 inline font-bakbak text-baoRed'>
						AUTOMATION,
					</Typography>
					<Typography variant='hero' className='-mt-2 inline stroke-white font-bakbak'>
						OPTIONS
					</Typography>
				</div>
				<div className='m-auto grid h-auto w-full max-w-6xl grid-cols-4 gap-10'>
					<div className='glassmorphic-card col-span-1 m-auto ml-0 h-[100%] !bg-baoBlack/80 px-4 py-8 text-center'>
						<Typography className='font-bakbak text-xl text-baoWhite'>VAULTS</Typography>
						<Typography variant='p' className='mb-4'>
							Borrow price stable currencies like baoUSD or baoETH on your terms instantly.
						</Typography>
						<a
							href='#'
							className='rounded-full bg-baoRed/80 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-baoRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
						>
							Learn More
						</a>
					</div>
					<div className='glassmorphic-card col-span-1 m-auto ml-0 h-[100%] !bg-baoBlack/80 px-4 py-8 text-center'>
						<Typography className='font-bakbak text-xl text-baoWhite'>BASKETS</Typography>
						<Typography variant='p' className='mb-4'>
							Get access to automated, diversified, yield bearing USD or ETH Bao Baskets.
						</Typography>
						<a
							href='#'
							className='rounded-full bg-baoRed/80 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-baoRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
						>
							Learn More
						</a>
					</div>
					<div className='glassmorphic-card col-span-1 m-auto ml-0 h-[100%] !bg-baoBlack/80 px-4 py-8 text-center'>
						<Typography className='font-bakbak text-xl text-baoWhite'>BASE POOLS</Typography>
						<Typography variant='p' className='mb-4'>
							Low liquidity for your project? Incentivize decentralized liquidity with Bao!
						</Typography>
						<a
							href='#'
							className='rounded-full bg-baoRed/80 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-baoRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
						>
							Learn More
						</a>
					</div>
					<div className='glassmorphic-card col-span-1 m-auto ml-0 h-[100%] !bg-baoBlack/80 px-4 py-8 text-center'>
						<Typography className='font-bakbak text-xl text-baoWhite'>DAO</Typography>
						<Typography variant='p' className='mb-4'>
							We value our community! Contribute to the Bao ecosystem for a fairer future.
						</Typography>
						<a
							href='#'
							className='rounded-full bg-baoRed/80 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-baoRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
						>
							Learn More
						</a>
					</div>
				</div>
				<div className='pt-32'>
					<div className='m-auto grid w-full max-w-4xl grid-cols-6 pb-10'>
						<div className='col-span-4 m-auto'>
							<Typography variant='h3' className='mr-2 inline font-bakbak text-baoRed'>
								DEMOCRATIZING
							</Typography>
							<Typography variant='h3' className='-mt-2 mr-2 inline font-bakbak'>
								ECONOMIC
							</Typography>
							<Typography variant='h3' className='-mt-2 inline font-bakbak'>
								DATA
							</Typography>
							<Typography variant='p'>
								Bao leverages decentalized Chainlink oracles to transform quantifiable real-world data into synthetic tokens and markets.
								With equal access for everyone to global financial markets, we pave the way for limitless economic opportunities for all.
							</Typography>
						</div>
						<div className='col-span-2 m-auto h-fit'>
							<Image src='/images/nodenetwork.png' width={600} height={600} alt='bao' className='mt-6' />
						</div>
					</div>

					<div className='m-auto grid w-full max-w-4xl grid-cols-6 py-10'>
						<div className='col-span-2 m-auto h-fit px-10'>
							<Image src='/images/generator.png' width={600} height={600} alt='bao' className='mt-6' />
						</div>
						<div className='col-span-4 m-auto'>
							<Typography variant='h3' className='mr-2 inline font-bakbak text-baoRed'>
								UNLOCK
							</Typography>
							<Typography variant='h3' className='-mt-2 mr-2 inline font-bakbak'>
								YOUR
							</Typography>
							<Typography variant='h3' className='mr-2 inline font-bakbak'>
								COLLATERAL
							</Typography>
							<Typography variant='p'>
								Bao Vaults open the doors to a world of lending, borrowing, and minting synthetic assets. Securely deposit your collateral
								assets, such as ETH, bSTBL, and bETH, to access a range of borrowing and minting opportunities. Whether you want to mint
								stablecoins like baoUSD or create custom synthetics, Bao Vaults provide a flexible and user-friendly platform. Monitor your
								debt health, manage your positions, and seize opportunities in this dynamic ecosystem.
							</Typography>
						</div>
					</div>

					<div className='m-auto grid w-full max-w-4xl grid-cols-6 py-10'>
						<div className='col-span-4 m-auto'>
							<Typography variant='h3' className='mr-2 inline font-bakbak'>
								DISCOVER
							</Typography>
							<Typography variant='h3' className='-mt-2 mr-2 inline font-bakbak'>
								BAO
							</Typography>
							<Typography variant='h3' className='mr-2 inline font-bakbak text-baoRed'>
								BASKETS
							</Typography>
							<Typography variant='p'>
								Bao Baskets are your gateway to diversified exposure in the world of decentralized finance. Powered by automated strategies,
								Bao Baskets put your assets to work, generating yield through lending, yield farming, and other innovative methods. With
								regular rebalancing based on yield optimization, Bao Baskets compound rewards, providing an efficient and convenient way to
								participate in DeFi{`'`}s vibrant ecosystem.
							</Typography>
						</div>
						<div className='col-span-2 m-auto h-fit px-10'>
							<Image src='/images/basket.png' width={600} height={600} alt='bao' className='mt-6' />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const Faq = () => {
	const faqs = [
		{
			question: 'What are synthetics?',
			answer:
				'Synthetic assets are an important part of a decentralized ecosystem. They allow decentralized infrastructure to offer assets that track the price of any system.',
		},
		{
			question: 'How do synthetics work?',
			answer:
				'Most people do not understand synthetics. They think that derivatives are only good for synthetic stocks. They just want to buy stocks like $APPL or $GME on the blockchain 24/7. While that is a good part of synthetics, it is just replicating our existing market on the blockchain. What is far more powerful and exciting is that with synthetics we can do something new. With synthetics you can turn any quantifiable discrete event into a financial feed that people can buy and sell.',
		},
		{
			question: 'What are soft and hard synthetics?',
			answer:
				'We use the terms soft synthetics and hard synthetics to refer to two different types of synthetic asset. Soft synthetics are baskets of tokens managed autonomously. Hard synthetics are synthetic assets that links price to data. That data could itself be a price, like $TSLA stock price, the price of 1 ounce of gold, or something more exotic like the number of goals Neymar Jr scores, rainfall levels or crime rates etc. The value of the synthetic asset is backed by collateral.',
		},
		{
			question: 'What are synthetics?',
			answer:
				'Right now existing protocols for synthetics require you to put your assets into a base token in order to collateralise the creation of your synthetic asset, taking on risk and losing your exposure to the underlying assets of your choice. Instead of this, we are allowing users to use their LP tokens to create synthetic assets, so they will still have their exposure to the underlying assets and the LP fees from that trade pair. Despite these inefficiencies the market for synthetics on Ethereum is already >$1B marketcap and >$1B TVL. We believe BAO will increase that dramatically by making it practical to partake in synthetic asset creation.',
		},
	]

	return (
		<div className='mx-auto max-w-6xl pt-32 sm:pt-48 lg:pt-56'>
			<div className='-m-8 flex flex-wrap'>
				<div className='w-full p-10 md:w-1/2'>
					<div className='md:max-w-md'>
						<Typography className='font-heading tracking-px-n mb-7 font-bakbak text-6xl leading-tight md:text-7xl'>
							Frequently Asked Questions
						</Typography>
						<p className='mb-11 font-medium leading-relaxed text-baoRed/80'>You have questions, we have answers.</p>
						<div className='md:inline-block'>
							<button
								className='shadow-4xl w-full rounded-full border border-baoRed bg-baoRed/80 px-6 py-4 font-semibold text-baoWhite transition duration-200 ease-in-out hover:bg-baoRed focus:ring focus:ring-indigo-300'
								type='button'
							>
								Read Our Full Docs
							</button>
						</div>
					</div>
				</div>
				<div className='w-full p-10 md:w-1/2'>
					<div className='ml-auto md:max-w-2xl'>
						<div className='flex flex-wrap'>
							{faqs.map(faq => (
								<Disclosure as='div' key={faq.question} className='w-full pt-6'>
									{({ open }) => (
										<>
											<div className='w-full rounded-lg border border-baoWhite p-4 text-baoWhite'>
												<dt>
													<Disclosure.Button className='flex w-full items-start justify-between text-left'>
														<span className='font-bakbak text-xl leading-7'>{faq.question}</span>
														<span className='ml-6 flex h-7 items-center'>
															{open ? (
																<MinusSmallIcon className='h-6 w-6' aria-hidden='true' />
															) : (
																<PlusSmallIcon className='h-6 w-6' aria-hidden='true' />
															)}
														</span>
													</Disclosure.Button>
												</dt>
												<Disclosure.Panel as='dd' className='mt-2 pr-12'>
													<p className='text-base leading-7 text-baoWhite'>{faq.answer}</p>
												</Disclosure.Panel>
											</div>
										</>
									)}
								</Disclosure>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Partners = () => {
	return (
		<div className='mx-auto max-w-6xl px-6 lg:px-8'>
			<Typography variant='h2' className='pb-8 text-center font-bakbak'>
				We only work with the most innovative teams
			</Typography>
			<div className='-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4'>
				<div className='glassmorphic-bg p-6 sm:p-10'>
					<Image
						className='m-auto max-h-12 w-full object-contain'
						src='/images/platforms/chainlink.svg'
						alt='Chainlink'
						width={48}
						height={48}
					/>
				</div>
				<div className='glassmorphic-bg p-6 sm:p-10'>
					<Image className='max-h-12 w-full object-contain' src='/images/platforms/balancer.svg' alt='Balancer' width={48} height={48} />
				</div>
				<div className='glassmorphic-bg p-6 sm:p-10'>
					<Image className='max-h-12 w-full object-contain' src='/images/platforms/aura.svg' alt='Aura' width={48} height={48} />
				</div>
				<div className='glassmorphic-bg p-6 sm:p-10'>
					<Image className='max-h-12 w-full object-contain' src='/images/platforms/curve.svg' alt='Curve' width={48} height={48} />
				</div>
				<div className='glassmorphic-bg p-6 sm:p-10'>
					<Image
						className='max-h-12 w-full object-contain'
						src='/images/platforms/b-protocol.svg'
						alt='B.Protocol'
						width={48}
						height={48}
					/>
				</div>
				<div className='glassmorphic-bg p-6 sm:p-10'>
					<Image className='max-h-12 w-full object-contain' src='/images/platforms/liquity.svg' alt='Liquity' width={48} height={48} />
				</div>
				<div className='glassmorphic-bg p-6 sm:p-10'>
					<Image className='max-h-12 w-full object-contain' src='/images/platforms/stake-dao.svg' alt='Stake DAO' width={48} height={48} />
				</div>
				<div className='glassmorphic-bg p-6 sm:p-10'>
					<Image className='max-h-12 w-full object-contain' src='/images/platforms/saddle.svg' alt='Saddle' width={48} height={48} />
				</div>
			</div>
		</div>
	)
}
