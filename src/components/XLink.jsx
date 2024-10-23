import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

export function XLink() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 align-middle lg:mt-0 lg:flex-shrink-0">
      <Link
        href="https://x.com/BaoCommunity"
        aria-label="Follow BAO Finance on X"
        className="flex place-items-center space-x-2 rounded-3xl bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <Image
          src="/icons/x.png"
          width="36"
          height="36"
          className="-mx-2 invert"
          alt="X (formerly Twitter) icon"
        />
        <span className="inline justify-center align-middle font-bold text-white">
          Follow X
        </span>
      </Link>
    </div>
  )
}
