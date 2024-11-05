import React from 'react'
import {
  faDiscord,
  faGithub,
  faMedium,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBolt,
  faBook,
  faBug,
  faComments,
  faD,
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
  return (
    <footer className="bg- bottom-0 left-0 m-auto mb-8 flex w-full justify-center bg-baoBlack p-16">
      <a
        className="xs:pl-2 xs:pr-2 hover:text-baoRed pl-3 pr-3 text-baoWhite no-underline"
        target="_blank"
        href="https://discord.gg/BW3P62vJXT"
        aria-label="Discord"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faDiscord} height={24} width={24} />
      </a>
      <a
        className="xs:pl-2 xs:pr-2 hover:text-baoRed pl-3 pr-3 text-baoWhite no-underline"
        target="_blank"
        href="https://twitter.com/BaoCommunity"
        aria-label="X (Twitter)"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faXTwitter} height={24} width={24} />
      </a>
      <a
        className="xs:pl-2 xs:pr-2 hover:text-baoRed pl-3 pr-3 text-baoWhite no-underline"
        target="_blank"
        href="https://medium.com/baomunity"
        aria-label="Medium"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faMedium} height={24} width={24} />
      </a>
      <a
        className="xs:pl-2 xs:pr-2 hover:text-baoRed pl-3 pr-3 text-baoWhite no-underline"
        target="_blank"
        href="https://gov.bao.finance/"
        aria-label="Governance Forum"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faComments} height={24} width={24} />
      </a>
      <a
        className="xs:pl-2 xs:pr-2 hover:text-baoRed pl-3 pr-3 text-baoWhite no-underline"
        target="_blank"
        href="https://snapshot.org/#/baovotes.eth/"
        aria-label="Snapshot"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faBolt} height={24} width={24} />
      </a>
      <a
        className="xs:pl-2 xs:pr-2 hover:text-baoRed pl-3 pr-3 text-baoWhite no-underline"
        target="_blank"
        href="https://docs.bao.finance/"
        aria-label="Documentation"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faBook} height={24} width={24} />
      </a>
      <a
        className="xs:pl-2 xs:pr-2 hover:text-baoRed pl-3 pr-3 text-baoWhite no-underline"
        target="_blank"
        href="https://github.com/baofinance"
        aria-label="GitHub"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} height={24} width={24} />
      </a>
      <a
        className="xs:pl-2 xs:pr-2 hover:text-baoRed pl-3 pr-3 text-baoWhite no-underline"
        target="_blank"
        href="https://www.immunefi.com/bounty/baofinance"
        aria-label="Bug Bounty Program"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faBug} height={24} width={24} />
      </a>
    </footer>
  )
}
