import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ActiveVaults } from '@/components/ActiveVaults'
import BaoDerivatives from '@/components/BaoDerivatives'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bao Finance - Onchain Tokenized Derivatives</title>
        <meta
          name="description"
          content="Secure, Decentralized and transparent on-chain tokenized derivatives"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <BaoDerivatives />
        <ActiveVaults />
        <SecondaryFeatures />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
