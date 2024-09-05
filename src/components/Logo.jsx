import React from 'react';
import Image from 'next/image';
import logoSrc from '../images/logos/logo-solid-text-horizontal.svg';

export function Logo(props) {
  return (
    <Image
      src={logoSrc}
      alt="Bao Finance"
      width={200} // Adjust this value based on your desired logo size
      height={50} // Adjust this value based on your desired logo size
      priority
      {...props}
    />
  );
}

// If you still need the Logomark component, keep it as is
export function Logomark(props) {
  // ... (keep the existing Logomark component if needed)
}
