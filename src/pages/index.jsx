import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ActiveVaults } from '@/components/ActiveVaults'
import { Journey } from '@/components/Journey'
import { Protocol } from '@/components/Protocol'
import { Security } from '@/components/Security'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bao Finance - Deliciously wrapped finance!</title>
        <meta
          name="description"
          content="Bao Finance is building omnichain, decentralized and secure synthetic liquidity, tokens and markets. Accessible to all. Stoppable by
          no-one."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <ActiveVaults />
        <SecondaryFeatures />
        <Security />
        <Protocol />
        <Journey />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
