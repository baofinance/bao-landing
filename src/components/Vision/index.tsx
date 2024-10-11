import React from 'react'
import {
  FaExclamationTriangle,
  FaLightbulb,
  FaDatabase,
  FaRocket,
} from 'react-icons/fa'
import { Button } from '../Button'

export function Vision() {
  return (
    <section className="relative overflow-hidden bg-baoBlack py-24 text-baoWhite">
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <h2 className="mb-4 text-center font-bakbak text-[clamp(30px,6vw,80px)] font-bold leading-tight">
          A DUMPLING VS WALL STREET
        </h2>
        <p className="mb-12 text-center font-bakbak text-[clamp(18px,2vw,24px)]">
          WHY WE NEED ONCHAIN DERIVATIVES
        </p>

        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: FaExclamationTriangle,
              title: 'The Problem',
              description:
                "Traditional finance doesn't work for most people. It's a system designed for wealthy suits, where they own the data, control the marketplace, and change the rules when things don't go their way.",
            },
            {
              icon: FaLightbulb,
              title: 'The Solution',
              description:
                "We're not just putting finance on the blockchain. We're reimagining it. With tokenized derivatives, we can create a financial system that's truly open, transparent, and accessible to all.",
            },
            {
              icon: FaDatabase,
              title: 'The Power of Data',
              description:
                "By creating tokenized derivatives for any quantifiable event, we're building the world's most accurate and open financial data system. This is the key to unlocking true financial freedom.",
            },
            {
              icon: FaRocket,
              title: 'Our Journey',
              description:
                "We're at the start of a revolution. It won't be easy, but together, we can build a financial system that works for everyone, not just the privileged few.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center rounded-lg bg-baoWhite p-8 pt-16 text-baoBlack transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-baoPink">
                <item.icon className="text-3xl text-baoWhite" />
              </div>
              <h3 className="mb-4 text-center font-bakbak text-2xl">
                {item.title}
              </h3>
              <p className="text-center text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-8 text-xl">
            We may be little dumplings, but together, we can take on Wall
            Street.
          </p>
          <Button
            variant="solid"
            color="baoPink"
            href="https://app.baofinance.io"
            className="!mx-auto hidden !max-w-[15rem] !px-5 !py-3 lg:block"
          >
            Join the Revolution
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Vision
