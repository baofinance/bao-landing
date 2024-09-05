import React from 'react'
import { Container } from '@/components/Container'
import styles from './AnimatedBackground.module.css'
import { Button } from '@/components/Button'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { AnimatedBackground } from './AnimatedBackground'

export function Hero() {
  const words = ['Decentralized', 'Transparent', 'Secure']
  const { text, isTyping } = useTypingEffect(words, 100, 1000)

  return (
    <div className={styles.heroWrapper}>
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
              <p className="font-heading text-6xl leading-tight text-baoWhite lg:text-8xl xl:text-9xl">
                ON-CHAIN TOKENIZED DERIVATIVES
              </p>
              <p className="text-xl text-baoWhite/80 lg:text-2xl">
                For the rebels, builders, and dreamers of tomorrow&apos;s
                economy.
              </p>
              <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
                <div className="flex gap-x-12">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-baoPink">14K+</p>
                    <p className="text-sm text-baoWhite/80">$BAO Holders</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-baoPink">$300M+</p>
                    <p className="text-sm text-baoWhite/80">DeBank TVF</p>
                  </div>
                </div>
                <div className="flex gap-x-6">
                  <Button
                    href="https://info.bao.finance/docs"
                    variant="solid"
                    color="baoPink"
                  >
                    Learn More
                  </Button>
                  <Button
                    href="https://app.baofinance.io"
                    variant="solid"
                    color="baoPink"
                  >
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
