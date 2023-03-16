type TVerifyRequired = {
	value: unknown
}

const verifyRequired = (data: TVerifyRequired): boolean => {
	if(data.value === undefined) return false
	return true
}

export default verifyRequired