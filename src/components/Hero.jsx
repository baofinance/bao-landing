import React from 'react'
import { Container } from '@/components/Container'
import styles from './AnimatedBackground.module.css'
import { Button } from '@/components/Button'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { AnimatedBackground } from './AnimatedBackground'
import logoWhiteOutline from '@/images/logos/logo-white-outline.svg'
import Image from 'next/image'
import { BookOpenIcon } from '@heroicons/react/24/outline'

export function Hero() {
  const words = ['Decentralized', 'Transparent', 'Secure']
  const { text, isTyping } = useTypingEffect(words, 100, 1000)

  return (
    <div>
      <AnimatedBackground />
      <Container className="relative flex h-screen items-center">
        <div className="w-full">
          <div className="max-w-2xl lg:max-w-none">
            <div className="flex flex-col space-y-6">
              <p className="font-heading flex h-[1.2em] items-center text-3xl leading-tight text-baoWhite lg:text-5xl">
                {text}
                <span
                  className={`${styles.cursor} ${
                    isTyping ? styles.blinking : ''
                  }`}
                >
                  |
                </span>
              </p>
              <p className="mb-6 font-bakbak text-5xl tracking-tight text-baoWhite lg:text-7xl xl:text-8xl">
                ON-CHAIN TOKENIZED DERIVATIVES
              </p>
              <p className="text-xl text-baoWhite/80 lg:text-2xl">
                For the rebels, builders, and dreamers of tomorrow&apos;s
                economy.
              </p>
              <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
                <div className="flex gap-x-6">
                  <Button
                    href="https://info.bao.finance/docs"
                    variant="solid"
                    color="baoPink"
                    className="font-inter flex items-center px-8 py-4 text-xl font-normal"
                  >
                    <BookOpenIcon className="mr-2 h-6 w-6 text-baoWhite" />
                    Learn More
                  </Button>
                  <Button
                    href="https://app.baofinance.io"
                    variant="solid"
                    color="baoPink"
                    className="font-inter flex items-center px-8 py-4 text-xl font-normal"
                  >
                    <Image
                      src={logoWhiteOutline}
                      alt="Bao Finance Logo"
                      className="mr-4 h-8 w-8"
                      unoptimized
                    />
                    Launch App
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
