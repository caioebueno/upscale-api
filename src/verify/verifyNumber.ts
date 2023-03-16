type TVerifyNumber = {
	value: unknown
}

const verifyNumber = (data: TVerifyNumber): boolean => {
	if(!isNaN(Number(data.value))) return true
	return false
}

export default verifyNumber