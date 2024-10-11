import React from 'react'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>
}
