import React from 'react'
import { Container } from '@/components/Container'
import styles from './Hero.module.scss'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { AnimatedBackground } from './AnimatedBackground'
import { Button } from '@/components/Button'  // Add this line

export function Hero() {
  const words = ['Decentralized', 'Transparent', 'Secure', 'On-Chain']
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
                <span className={`${styles.cursor} ${isTyping ? styles.blinking : ''}`}>|</span>
              </p>
              <div className={styles.heroheader}>
                <p>TOKENIZED</p>
                <p>DERIVATIVES</p>
              </div>
              <p className={styles.taglineText}>
                For the rebels, builders, and dreamers of tomorrow&apos;s economy.
              </p>
              <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
                <div className="flex gap-x-6">
                  <Button
                    href="https://info.bao.finance/docs"
                    variant="solid"
                    color="baoWhite"
                    className="font-inter px-8 py-4 text-xl font-normal text-baoBlack bg-baoWhite hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Learn More
                  </Button>
                  <Button
                    href="https://app.baofinance.io"
                    variant="solid"
                    color="baoPink"
                    className="font-inter px-8 py-4 text-xl font-normal"
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
