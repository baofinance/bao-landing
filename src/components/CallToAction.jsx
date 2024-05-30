import { DiscordLink } from '@/components/DiscordLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="join-us-on-discord"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#e53164" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-bakbak tracking-tight text-white sm:text-4xl">
            Ready to help us build?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether you are a developer, designer, or just a crypto enthusiast,
            join our community and help us build the future of finance.
          </p>
          <div className="mt-8 flex justify-center">
            <DiscordLink color="white" />
          </div>
        </div>
      </Container>
    </section>
  )
}
