import { Logo } from '@/components/Logo'
import { forwardRef } from 'react'
import clsx from 'clsx'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppScreen({ children, className, ...props }) {
  return (
    <div
      className={clsx('flex select-none flex-col bg-baoBlack', className)}
      {...props}
    >
      <div className="flex gap-24 px-4 pt-4">
        <div>
          <Logo className="h-6 flex-none" />
        </div>

        {/* Account Button */}
        <div className="flex items-center gap-4">
          <div
            className="relative ml-1 mr-0 flex w-fit cursor-default overflow-hidden rounded-full border
				border-baoWhite/20 bg-baoWhite/5 px-2 font-bakbak text-base text-baoWhite"
          >
            baofriend.eth
          </div>
          <MenuIcon className="h-6 w-6 flex-none" />
        </div>
      </div>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('mt-6 flex-auto rounded-t-2xl bg-baoBlack', className)}
    >
      {children}
    </div>
  )
})
