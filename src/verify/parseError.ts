import TParameterError, { TParameterErrorType } from '../types/parameterError'
import { TInformationLocation, TInformationType } from '../types/validation'

type TParseError = {
	name: string
	errorType: TParameterErrorType
	paramLocation: TInformationLocation
	paramType: TInformationType
	allowedValues?: string[]
}

const parseError = (data: TParseError): TParameterError => {
	return {
		name: data.name,
		errorType: data.errorType,
		paramLocation: data.paramLocation,
		paramType: data.paramType,
		allowedValues: data.allowedValues
	}
}

export default parseError