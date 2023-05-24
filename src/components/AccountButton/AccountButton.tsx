import React from 'react'
import Button from '../Button'

const AccountButton: React.FC = () => {
	return (
		<>
			<a href='https://app.bao.finance' target='_blank' rel='noopener noreferrer'>
				<Button size='sm'>Go to App</Button>
			</a>
		</>
	)
}

export default AccountButton
