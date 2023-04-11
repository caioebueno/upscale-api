import TParameterError from '../types/parameterError'
import TRequest from '../types/request'
import getRequestValue from './getRequestValue'
import isNull from './isNull'
import parseError from './parseError'
import verifyRequired from './verifyRequired'
import verifyValue from './verifyValue'

type TVerifyData = {
	request: TRequest
}

type TVerifyRequestResponse = TVerifyRequestResponseError | TVerifyRequestResponseNoError

type TVerifyRequestResponseError = {
	error: true
	errorArray: TParameterError[]
}

type TVerifyRequestResponseNoError = {
	error: false
}

const verifyRequest = async (data: TVerifyData): Promise<TVerifyRequestResponse> => {
	const errors: TParameterError[] = []
	if (!data.request.validations) return {
		error: false
	}
	for (const validation of data.request.validations) {
		const informationValue = getRequestValue({
			request: data.request,
			validation: validation
		})
		if(informationValue === undefined && !validation.required) continue
		const verifyRequiredError = verifyRequired({
			value: informationValue
		})
		if (!verifyRequiredError) {
			errors.push(parseError({
				name: validation.name,
				errorType: 'REQUIRED',
				paramLocation: validation.location,
				paramType: validation.type
			}))
			continue
		}
		if(!validation.nullable && isNull(informationValue)) {
			errors.push(parseError({
				name: validation.name,
				errorType: 'NOT_NULLABLE',
				paramLocation: validation.location,
				paramType: validation.type
			}))
			continue
		}
		const verifyValueError = verifyValue({
			type: validation.type,
			value: informationValue,
			onOf: validation.onOf
		})
		if (verifyValueError.hasError) {
			errors.push(parseError({
				name: validation.name,
				errorType: 'INVALID_TYPE',
				paramLocation: validation.location,
				paramType: validation.type,
				allowedValues: verifyValueError.allowedValues
			}))
			continue
		}
	}
	if(errors.length === 0) return {
		error: false
	}
	return {
		error: true,
		errorArray: errors
	}
}

export default verifyRequest