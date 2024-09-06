import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import styles from './ActiveVaults.module.css'
import dynamic from 'next/dynamic'
import yieldAnimation from '@/images/JSON/yield.json'
import { useEffect, useRef, useState } from 'react'

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export function ActiveVaults() {
  const [isInView, setIsInView] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const containerRef = useRef(null)
  const lottieRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        } else {
          setIsInView(false)
          setHasPlayed(false)
          if (lottieRef.current) {
            lottieRef.current.goToAndStop(0, true)
          }
        }
      },
      { threshold: 1.0 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isInView && !hasPlayed && lottieRef.current) {
      lottieRef.current.play()
      setHasPlayed(true)
    }
  }, [isInView, hasPlayed])

  return (
    <div ref={containerRef} className={styles.sectionContainer}>
      <Container className="px-8 py-16">
        <div className="flex items-center">
          {/* Left side: Lottie animation */}
          <div className="w-1/2">
            <div className="relative h-[500px] w-[500px]">
              {typeof window !== 'undefined' && (
                <Lottie
                  lottieRef={lottieRef}
                  animationData={yieldAnimation}
                  loop={false}
                  autoplay={false}
                />
              )}
            </div>
          </div>

          {/* Right side: Text content */}
          <div className="w-1/2 space-y-2 pl-8 text-left">
            <h1 className="mb-2 font-bakbak text-6xl tracking-tight text-[#1e2022]">
              Maximize Your Yield
            </h1>
            <p className="text-3xl font-bold text-[#1e2022]">
              Earn up to <span className={styles.subtlePulse}>50% APR</span>
            </p>
            <p className="text-xl text-[#1e2022]/80">
              Provide liquidity in our USD and ETH pegged pools to earn high
              yields with low risk
            </p>
            <div className="pt-3">
              <Button href="https://app.baofinance.io/earn" color="baoPink">
                Start Earning
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
