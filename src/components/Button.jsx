import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-full py-2 px-3 text-base outline-2 outline-offset-2 transition-colors font-bakbak',
  outline:
    'inline-flex justify-center rounded-full border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-base outline-2 outline-offset-2 transition-colors font-bakbak',
  transparent:
    'inline-flex justify-center rounded-full py-2 px-3 text-base outline-2 outline-offset-2 transition-colors border font-bakbak',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    red: 'bg-baoRed text-baoWhite hover:bg-baoRed/80 active:bg-baoRed/90 active:text-baoWhite/80',
  },
  outline: {
    white: 'border-baoWhite/20 text-baoWhite hover:border-baoRed/20 active:bg-baoRed active:text-baoWhite/80',
  },
  transparent: {
    white: 'bg-baoWhite/5 text-baoWhite hover:border-baoRed hover:bg-baoRed/20 border-baoWhite/20',
  },
}

export const Button = forwardRef(function Button(
  { variant = 'solid', color = 'red', className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})
