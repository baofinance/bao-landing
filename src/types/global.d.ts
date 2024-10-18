declare global {
  type ButtonColor = 'baoPink' | 'baoWhite' | 'baoBlack'

  interface ButtonProps {
    variant?: 'solid' | 'outline'
    color?: ButtonColor
    href?: string
    className?: string
    children: React.ReactNode
    disabled?: boolean
  }
}

export {}
