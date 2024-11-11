import React from 'react'

interface DeBankLinkProps {
  containerClassName?: string
}

export function DeBankLink({ containerClassName = '' }: DeBankLinkProps) {
  return (
    <a
      href="https://debank.com/profile/0x39a0A5a0a9f9b9b2e99e3B9Cc8c3a5E7f9f6B6B6"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center rounded-full bg-[#FE815F] text-white transition-transform hover:scale-110 ${containerClassName}`}
    >
      {/* DeBank SVG icon */}
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ... (SVG path data) ... */}
      </svg>
    </a>
  )
}
