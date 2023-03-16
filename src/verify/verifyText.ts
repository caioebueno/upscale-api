type TVerifyText = {
	value: unknown
}

const verifyText = (data: TVerifyText): boolean => {
	if(typeof data.value === 'string') return true
	return false
}

export default verifyText