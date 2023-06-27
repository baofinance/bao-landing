import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ProtocolData } from '@/components/ProtocolData'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bao Finance - Delicisouly wrapped finance!</title>
        <meta
          name="description"
          content="Bao Finance is building omnichain, decentralized and secure synthetic liquidity, tokens and markets. Accessible to all. Stoppable by
          no-one."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Faqs />
        {/* <ProtocolData /> */}
      </main>
      <Footer />
    </>
  )
}
