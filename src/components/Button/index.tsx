import React from 'react'
import Link from 'next/link'

type ButtonColor = 'baoPink' | 'baoWhite' | 'baoBlack'

interface ButtonProps {
  variant?: 'solid' | 'outline'
  color?: ButtonColor
  href?: string
  className?: string
  children: React.ReactNode
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  color = 'baoPink',
  href,
  className = '',
  children,
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantStyles: Record<
    'solid' | 'outline',
    Record<ButtonColor, string>
  > = {
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

  console.log('Button styles:', styles)

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

// Export ButtonProps explicitly
export type { ButtonProps }
