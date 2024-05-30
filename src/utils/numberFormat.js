import BN from 'bignumber.js'

export const getDisplayBalance = (balance, decimals = 18, precision) => {
	const n = new BN(balance.toString()).div(new BN(10).pow(decimals))
	if (n.gt(0) && n.lt(1)) {
		return n.toFormat(typeof precision === 'number' ? precision : 4)
	} else if (n.lt(0) && n.gt(-1)) {
		return n.toFormat(typeof precision === 'number' ? precision : 4)
	} else {
		return n.toFormat(typeof precision === 'number' ? precision : 2)
	}
}