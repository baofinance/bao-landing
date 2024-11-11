import React from 'react'

interface SnapshotLinkProps {
  containerClassName?: string
}

export function SnapshotLink({ containerClassName = '' }: SnapshotLinkProps) {
  return (
    <a
      href="https://snapshot.org/#/baovotes.eth"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center rounded-full bg-[#1D1D1D] text-white transition-transform hover:scale-110 ${containerClassName}`}
    >
      {/* Snapshot SVG icon */}
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
