import Head from 'next/head'
import { CallToAction } from '../components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ActiveVaults } from '@/components/ActiveVaults'
import BaoDerivatives from '@/components/BaoDerivatives'
import { Security } from '@/components/Security' // Add this import

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
        <Security /> {/* Add the Security component here */}
        <SecondaryFeatures />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
