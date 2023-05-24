import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IconLink = ({ href, icon, label }: IconLinkProps) => {
	return (
		<a className='xs:pl-2 xs:pr-2 pl-3 pr-3 no-underline hover:text-baoRed' target='_blank' href={href} aria-label={label} rel='noreferrer'>
			<FontAwesomeIcon icon={icon} />
		</a>
	)
}

type IconLinkProps = {
	href: string
	icon: IconProp
	label: string
}
