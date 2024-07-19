import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

export function SnapshotLink() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 align-middle lg:mt-0 lg:flex-shrink-0">
      <Link
        href="https://discord.gg/BW3P62vJXT"
        aria-label="Join Bao Finance on Discord"
        className="flex space-x-2 rounded-3xl bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-baoWhite shadow-sm duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <Image src="/icons/snapshot.png" width="24" height="24" />
        <span className="inline justify-center align-middle font-bold">
          Join Snapshot
        </span>
      </Link>
    </div>
  )
}
