import React from 'react'

export const BaoLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z"
      fill="currentColor"
    />
    <path
      d="M34.5 40C34.5 36.9624 36.9624 34.5 40 34.5H60C63.0376 34.5 65.5 36.9624 65.5 40V60C65.5 63.0376 63.0376 65.5 60 65.5H40C36.9624 65.5 34.5 63.0376 34.5 60V40Z"
      stroke="currentColor"
      strokeWidth="5"
    />
  </svg>
)
