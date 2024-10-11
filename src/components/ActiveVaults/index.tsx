import React from 'react'
import { AnimatedBackground } from '../AnimatedBackground'

export function ActiveVaults() {
  return (
    <div className="relative overflow-hidden bg-baoWhite py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-5">
        <div className="absolute inset-0 animate-flicker1 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-0"></div>
        <div className="absolute inset-0 animate-flicker2 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-0"></div>
      </div>
      <div className="absolute inset-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-bakbak text-[clamp(30px,8vw,100px)] font-bold uppercase leading-none text-baoBlack">
            MINT
          </h2>
          <p className="font-bakbak text-[clamp(14px,1.5vw,22px)] uppercase text-baoBlack">
            PEGGED OR LEVERAGE TOKENS
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-0 right-0 top-8 h-0.5 bg-baoPink"></div>
          <ol className="relative flex justify-between gap-8">
            {[
              {
                title: 'Deposit ETH',
                description:
                  'Securely deposit your ETH to start minting tokens.',
              },
              {
                title: 'Choose Token Type',
                description:
                  'Select between pegged or leveraged tokens based on your strategy.',
              },
              {
                title: 'Use or Store',
                description:
                  'Utilize your tokens in DeFi protocols or securely store them in your wallet.',
              },
            ].map((step, index) => (
              <li key={index} className="flex flex-1 flex-col items-center">
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center bg-baoPink text-2xl font-bold text-baoWhite">
                  {index + 1}
                </div>
                <div className="group relative flex h-full flex-col bg-baoBlack p-6 text-center text-baoWhite transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-baoPink/15">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e21a53_1px,transparent_1px),linear-gradient(to_bottom,#e21a53_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                  <div className="relative z-10 mb-2 font-bakbak text-xl">
                    {step.title}
                  </div>
                  <div className="relative z-10 text-sm">
                    {step.description}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="text-md absolute right-5 top-5 rounded-sm bg-baoPink px-12 py-3 font-bold uppercase text-baoWhite">
        Coming Soon
      </div>
    </div>
  )
}
