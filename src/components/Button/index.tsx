import React from 'react'
import Link from 'next/link'

export interface ButtonProps {
  variant?: 'solid' | 'outline'
  color?: 'baoPink' | 'baoWhite' | 'baoBlack'
  href?: string
  className?: string
  children: React.ReactNode
  disabled?: boolean
}

export function Button({
  variant = 'solid',
  color = 'baoPink',
  href,
  className = '',
  children,
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantStyles = {
    solid: {
      baoPink:
        'bg-baoPink text-baoWhite hover:bg-baoPink/80 focus:ring-baoPink',
      baoWhite:
        'bg-baoWhite text-baoBlack hover:bg-baoWhite/80 focus:ring-baoWhite',
      baoBlack:
        'bg-baoBlack text-baoWhite hover:bg-baoBlack/80 focus:ring-baoBlack',
    },
    outline: {
      baoPink:
        'border border-baoPink text-baoPink hover:bg-baoPink hover:text-baoWhite focus:ring-baoPink',
      baoWhite:
        'border border-baoWhite text-baoWhite hover:bg-baoWhite hover:text-baoBlack focus:ring-baoWhite',
      baoBlack:
        'border border-baoBlack text-baoBlack hover:bg-baoBlack hover:text-baoWhite focus:ring-baoBlack',
    },
  }

  const styles = `${baseStyles} ${variantStyles[variant][color]} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={styles} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
