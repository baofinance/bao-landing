import React, { useState, useEffect, useMemo } from 'react'
import { Container } from '@/components/Container'
import { AnimatedBackground } from '../AnimatedBackground'
import { Button } from '@/components/Button'

export function Hero() {
  const roles = useMemo(() => ['REBELS', 'BUILDERS', 'DREAMERS'], [])
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isTyping) {
      if (displayedText.length < roles[currentRoleIndex].length) {
        timer = setTimeout(() => {
          setDisplayedText(
            roles[currentRoleIndex].slice(0, displayedText.length + 1)
          )
        }, 100)
      } else {
        timer = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50)
      } else {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timer)
  }, [currentRoleIndex, displayedText, isTyping, roles])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Container className="relative flex h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="max-w-4xl lg:max-w-none">
            <div className="flex flex-col space-y-6">
              <div className="w-full max-w-[1200px] p-0 text-left">
                <div className="flex items-center font-bakbak text-[clamp(18px,2.5vw,36px)] font-bold uppercase leading-none text-baoWhite">
                  TOKENIZED DERIVATIVES
                </div>
              </div>
              <div className="w-full max-w-[1200px] p-0 text-left">
                <h1 className="font-bakbak text-[clamp(36px,5.5vw,80px)] font-bold uppercase leading-tight text-baoWhite">
                  For the{' '}
                  <span className="relative inline-block align-bottom">
                    <span className="invisible">{roles[currentRoleIndex]}</span>
                    <span className="absolute left-0 top-0">
                      {displayedText}
                    </span>
                  </span>
                  <br />
                  of tomorrow&apos;s economy.
                </h1>
              </div>
              <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
                <div className="flex gap-x-6">
                  <Button
                    href="https://info.bao.finance/docs"
                    variant="solid"
                    color="baoWhite"
                    className="text-lg"
                  >
                    Learn More
                  </Button>
                  <Button
                    href="https://app.baofinance.io"
                    variant="solid"
                    color="baoPink"
                    className="text-lg"
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
