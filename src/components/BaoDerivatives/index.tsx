import React, { useEffect, useRef } from 'react'
import { BaoETHLogo, BaoUSDLogo, BaoBTCLogo, BaoQuestionLogo } from './Logos'
import { Button, ButtonProps } from '../Button'

const BaoDerivatives: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const pixelSizes = [16, 24, 32]
    const rows = 10
    const cols = Math.ceil(canvas.width / pixelSizes[0])

    const colors = ['#1e2022', '#faf2e3', 'rgba(250, 242, 227, 0.5)']

    let animationFrameId: number
    let lastUpdateTime = 0
    const updateInterval = 1000

    const pixels: { color: string; size: number }[][] = []

    // Initialize pixels
    for (let y = 0; y < rows; y++) {
      pixels[y] = []
      for (let x = 0; x < cols; x++) {
        const progress = y / rows
        const colorIndex = Math.min(
          Math.floor(progress * colors.length * 1.5),
          colors.length - 1
        )
        pixels[y][x] = {
          color: colors[colorIndex],
          size: pixelSizes[Math.floor(Math.random() * pixelSizes.length)],
        }
      }
    }

    const animate = (currentTime: number) => {
      if (currentTime - lastUpdateTime >= updateInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Update a smaller portion of pixels
        for (let i = 0; i < (rows * cols) / 50; i++) {
          const y = Math.floor(Math.random() * rows)
          const x = Math.floor(Math.random() * cols)
          const progress = y / rows
          const colorIndex = Math.min(
            Math.floor(progress * colors.length * 1.5),
            colors.length - 1
          )
          pixels[y][x] = {
            color: colors[colorIndex],
            size: pixelSizes[Math.floor(Math.random() * pixelSizes.length)],
          }
        }

        // Draw all pixels
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const pixel = pixels[y][x]
            ctx.fillStyle = pixel.color
            ctx.fillRect(x * pixel.size, y * pixel.size, pixel.size, pixel.size)
          }
        }

        lastUpdateTime = currentTime
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = 200
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const DISCORD_INVITE_LINK = 'https://discord.gg/BW3P62vJXT'

  const buttonProps = (
    buttonIndex: number,
    children: React.ReactNode,
    specialLinks?: string[]
  ): Omit<ButtonProps, 'children'> => ({
    href: specialLinks
      ? specialLinks[buttonIndex]
      : buttonIndex === 0
      ? 'https://app.baofinance.io/swap'
      : 'https://app.baofinance.io/vaults',
    className: `w-full px-4 py-2`,
    color: buttonIndex === 0 ? 'baoPink' : 'baoWhite',
  })

  return (
    <section className="relative overflow-hidden bg-[#faf2e3] pb-24 pt-24 lg:pb-32 lg:pt-32">
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 w-full"
        style={{ height: '200px' }}
      />
      {/* Animated waves background */}
      <div className="absolute inset-0 h-full w-full">
        {/* ... (keep existing wave SVGs) ... */}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              logo: <BaoUSDLogo />,
              title: 'baoUSD',
              description:
                'Backed by ETH and other ETH backed tokens. A safe haven for those that favor decentralization and transparency.',
              buttons: ['Get baoUSD', 'Borrow baoUSD'],
              comingSoon: false,
            },
            {
              logo: <BaoETHLogo />,
              title: 'baoETH',
              description:
                'Backed by ETH. baoETH solves high borrow rates for ETH. Unlike traditional markets, baoETH does not need to be deposited before it is borrowed unlocking greater capital efficiency for borrowers.',
              buttons: ['Get baoETH', 'Borrow baoETH'],
              comingSoon: false,
            },
            {
              logo: <BaoBTCLogo />,
              title: 'baoBTC',
              description:
                'A decentralized, Bitcoin-pegged token on Ethereum, backed by ETH. Unlike wBTC and other alternatives, it avoids centralized control, offering a secure and transparent option for using Bitcoin in DeFi applications.',
              buttons: ['Get baoBTC', 'Borrow baoBTC'],
              comingSoon: true,
            },
            {
              logo: <BaoQuestionLogo />,
              title: 'bao???',
              description:
                "Unleash the future: Weather-proof your portfolio, tokenize real estate, or trade sentiment. With diverse data feeds, we're crafting financial instruments that pulse with real-world rhythms. Welcome to DeFi's new frontier.",
              buttons: ['Explore Ideas', 'Suggest a Derivative'],
              comingSoon: false,
              specialLinks: [
                'https://info.bao.finance/docs/synth-use-cases',
                DISCORD_INVITE_LINK,
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center rounded-xl bg-baoBlack p-8 text-center shadow-lg outline outline-1 outline-baoWhite/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-baoPink">
                {item.logo}
              </div>
              <h3 className="mb-4 mt-8 font-bakbak text-2xl font-bold text-baoWhite">
                {item.title}
              </h3>
              <p className="mb-8 flex-grow text-sm text-baoWhite">
                {item.description}
              </p>
              <div className="flex w-full flex-col gap-4">
                {item.buttons.map((button, buttonIndex) => {
                  if (item.comingSoon) {
                    return (
                      <div
                        key={buttonIndex}
                        className={`w-full rounded-md px-4 py-2 text-center font-medium ${
                          buttonIndex === 0
                            ? 'bg-baoPink/50 text-baoWhite'
                            : 'bg-baoWhite/50 text-baoBlack'
                        } cursor-not-allowed opacity-50`}
                      >
                        {button}
                      </div>
                    )
                  }

                  return (
                    <Button
                      key={buttonIndex}
                      {...buttonProps(buttonIndex, button, item.specialLinks)}
                    >
                      {button}
                    </Button>
                  )
                })}
              </div>
              {item.comingSoon && item.title !== 'bao???' && (
                <div className="absolute right-2 top-2 rounded-sm bg-baoPink px-2 py-0.5 text-[.6rem] font-bold uppercase text-baoWhite">
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BaoDerivatives
