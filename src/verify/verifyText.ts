type TVerifyText = {
	value: unknown
	onOf?: string[]
}

type TVerifyTextResponse = TVerifyTextError | TVerifyTextGoodResponse

type TVerifyTextGoodResponse = {
	hasError: false
}

type TVerifyTextError = {
	hasError: true
	allowedValues?: string[]
}

const verifyText = (data: TVerifyText): TVerifyTextResponse => {
	if(typeof data.value !== 'string') return {
		hasError: true,
	}
	if(data.onOf && !data.onOf.includes(data.value)) return {
		hasError: true,
		allowedValues: data.onOf
	}
	return {
		hasError: false
	}
}

export default verifyText