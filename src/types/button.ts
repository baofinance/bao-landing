import { ReactNode } from 'react'

export type ButtonColor = 'baoPink' | 'baoWhite' | 'baoBlack'

export interface ButtonProps {
  variant?: 'solid' | 'outline'
  color?: ButtonColor
  href?: string
  className?: string
  children: ReactNode
  disabled?: boolean
}
