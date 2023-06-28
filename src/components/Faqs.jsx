import { Button } from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/pro-regular-svg-icons'
import { Disclosure } from '@headlessui/react'
import {
  BookOpenIcon,
  DocumentIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from '@heroicons/react/24/outline'

export const Faqs = () => {
  const faqs = [
    {
      question: 'What are synthetics?',
      answer:
        'Synthetic assets are an important part of a decentralized ecosystem. They allow decentralized infrastructure to offer assets that track the price of any system.',
    },
    {
      question: 'How do synthetics work?',
      answer:
        'Most people do not understand synthetics. They think that derivatives are only good for synthetic stocks. They just want to buy stocks like $APPL or $GME on the blockchain 24/7. While that is a good part of synthetics, it is just replicating our existing market on the blockchain. What is far more powerful and exciting is that with synthetics you can do something new. With synthetics you can turn any quantifiable discrete event into a financial feed that people can buy and sell.',
    },
    {
      question: 'What are soft and hard synthetics?',
      answer:
        'Soft synthetics and hard synthetics to refer to two different types of synthetic asset. Soft synthetics are baskets of tokens managed autonomously. Hard synthetics are synthetic assets that links price to data. That data could itself be a price, like $TSLA stock price, the price of 1 ounce of gold, or something more exotic like the number of goals Neymar Jr scores, rainfall levels or crime rates etc. The value of the synthetic asset is backed by collateral.',
    },
    {
      question: 'How does Bao do synthetics differently?',
      answer:
        'Right now existing protocols for synthetics require you to put your assets into a base token in order to collateralise the creation of your synthetic asset, taking on risk and losing your exposure to the underlying assets of your choice. Instead of this, users can now utilize Bao Baskets as collateral, enabling them to retain exposure to the underlying assets while simultaneously earning yield. Despite these inefficiencies the market for synthetics on Ethereum is already >$1B marketcap and >$1B TVL. We believe Bao will increase that dramatically by making it practical to partake in synthetic asset creation.',
    },
  ]

  return (
    <div className="mx-auto max-w-6xl pb-16 pt-20 sm:pb-24 sm:pt-32">
      <div className="-m-8 flex flex-wrap">
        <div className="w-full p-10 md:w-1/2">
          <div className="md:max-w-md">
            <h1 className="mr-2 inline-block font-bakbak text-4xl tracking-tight text-baoWhite">
              Frequently Asked Questions
            </h1>
            <p className="mb-11 font-medium leading-relaxed text-baoWhite/80">
              You have questions, we have answers.
            </p>
            <div className="md:inline-block">
              <Button
                href="https://docs.baofinance.io/"
                variant="transparent"
                color="white"
              >
                <FontAwesomeIcon
                  icon={faBookOpen}
                  height={24}
                  width={24}
                  color="#e53164"
                  className="mr-2 h-6 w-6"
                />{' '}
                Read Our Full Docs
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full p-10 md:w-1/2">
          <div className="ml-auto md:max-w-2xl">
            <div className="flex flex-wrap">
              {faqs.map((faq) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className="w-full pb-6 first:pt-6"
                >
                  {({ open }) => (
                    <>
                      <div className="w-full rounded-lg border border-baoWhite p-4 text-baoWhite">
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left">
                            <span className="text-lg font-bakbak leading-7">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-baoWhite/80">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </div>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
