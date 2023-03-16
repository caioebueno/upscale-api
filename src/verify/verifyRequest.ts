import TParameterError from "../types/parameterError"
import TRequest from "../types/request"
import getConfigFile from "../util/getConfigFile"
import getRequestValue from "./getRequestValue"
import parseError from "./parseError"
import verifyRequired from "./verifyRequired"
import verifyValue from "./verifyValue"

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
	const configFile = await getConfigFile()
	const routeValidations = configFile[data.request.path] && configFile[data.request.path][data.request.method]
	if (!routeValidations) return {
		error: false
	}
	for (const validation of routeValidations) {
		const informationValue = getRequestValue({
			request: data.request,
			validation: validation
		})
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
		const verifyValueError = verifyValue({
			required: validation.required,
			type: validation.type,
			value: informationValue
		})
		if (!verifyValueError) {
			errors.push(parseError({
				name: validation.name,
				errorType: 'INVALID_TYPE',
				paramLocation: validation.location,
				paramType: validation.type
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