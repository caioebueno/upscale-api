import { TInformationType } from "../types/validation"
import isNull from "./isNull"
import verifyDate from "./verifyDate"
import verifyNumber from "./verifyNumber"
import verifyText from "./verifyText"

type TVerifyValueData = {
	type: TInformationType
	value: unknown
}

const verifyValue = (data: TVerifyValueData): boolean => {
	if (data.type === 'STRING') return verifyText({
		value: data.value
	})
	if (data.type === 'NUMBER') return verifyNumber({
		value: data.value
	})
	if (data.type === 'DATE') return verifyDate({
		value: data.value
	})
	return false
}

export default verifyValue