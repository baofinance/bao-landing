import { Chip } from '@material-tailwind/react/components/Chip'

import classNames from 'classnames'

interface BadgeProps {
	children: any
	color?: string
	className?: string
}

const Badge: React.FC<BadgeProps> = ({ children, className = '', color }) => {
	return (
		<Chip
			className={classNames('rounded-full bg-baoRed px-2 py-1 align-middle font-bakbak text-sm text-baoWhite', className)}
			style={{ backgroundColor: `${color}` }}
			value={children}
		/>
	)
}

export default Badge
