import React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export type ButtonVariant = 'solid' | 'outline'
export type ButtonColor = 'baoPink' | 'baoWhite' | 'gray'

export interface ButtonProps {
  href?: string
  variant?: ButtonVariant
  color?: ButtonColor
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const baseStyles =
  'inline-flex justify-center uppercase rounded-lg font-bakbak tracking-wide text-sm outline-2 outline-offset-2 transition-colors px-5 py-3'

const variantStyles: Record<ButtonVariant, string> = {
  solid: '',
  outline: 'border',
}

const colorStyles: Record<ButtonColor, string> = {
  baoPink: 'bg-baoPink text-white hover:bg-opacity-90',
  baoWhite: 'bg-white text-cyan-900 hover:bg-opacity-90',
  gray: 'bg-gray-800 text-white hover:bg-gray-700',
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'solid',
  color = 'gray',
  className,
  children,
  onClick,
}) => {
  const classes = twMerge(
    baseStyles,
    variantStyles[variant],
    colorStyles[color],
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
