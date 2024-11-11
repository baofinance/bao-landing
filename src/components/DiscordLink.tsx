import React from 'react'

interface DiscordLinkProps {
  containerClassName?: string
}

export function DiscordLink({ containerClassName = '' }: DiscordLinkProps) {
  return (
    <a
      href="https://discord.gg/BW3P62vJXT"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center rounded-full bg-[#5865F2] text-white transition-transform hover:scale-110 ${containerClassName}`}
    >
      {/* Discord SVG icon */}
      <svg
        className="h-6 w-6"
        viewBox="0 0 71 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ... (SVG path data) ... */}
      </svg>
    </a>
  )
}
