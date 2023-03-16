type TVerifyDate = {
	value: unknown
}

const verifyDate = (data: TVerifyDate): boolean => {
	if(!isNaN(Date.parse(String(data.value)))) return true
	return false
}

export default verifyDate