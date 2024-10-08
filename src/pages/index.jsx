import Head from 'next/head'
import { CallToAction } from '../components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Borrow } from '@/components/Borrow'
import { ActiveVaults } from '@/components/ActiveVaults'
import BaoDerivatives from '@/components/BaoDerivatives'
import { Earn } from '@/components/Earn'
import { Vision } from '@/components/Vision'
import { Integrations } from '@/components/Integrations'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Security = dynamic(() => import('@/components/Security'), {
  loading: () => <div>Loading...</div>,
})

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
        <Earn />
        <Vision />
        <ActiveVaults />
        <Borrow />

        <SecondaryFeatures />
        <Security />
        <Integrations />
      </main>
      <Footer />
    </>
  )
}
