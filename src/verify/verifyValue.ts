import { TInformationType } from '../types/validation'
import verifyDate from './verifyDate'
import verifyNumber from './verifyNumber'
import verifyText from './verifyText'

type TVerifyValueData = {
	type: TInformationType
	value: unknown
	onOf?: string[]
}

type TVerifyValueResponse = TVerifyValuetError | TVerifyValueoodResponse

type TVerifyValueoodResponse = {
	hasError: false
}

type TVerifyValuetError = {
	hasError: true
	allowedValues?: string[]
}

const verifyValue = (data: TVerifyValueData): TVerifyValueResponse => {
	if (data.type === 'STRING') return verifyText({
		value: data.value,
		onOf: data.onOf
	})
	if (data.type === 'NUMBER') return {
		hasError: !verifyNumber({
			value: data.value
		})
	}
	if (data.type === 'DATE') return {
		hasError: !verifyDate({
			value: data.value
		})
	}
	return {
		hasError: false
	}
}

export default verifyValue