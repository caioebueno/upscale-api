import TParameterError, { TParameterErrorType } from "../types/parameterError"
import { TInformationLocation, TInformationType } from "../types/validation"

type TParseError = {
	name: string
	errorType: TParameterErrorType
	paramLocation: TInformationLocation
	paramType: TInformationType
}

const parseError = (data: TParseError): TParameterError => {
	return {
		name: data.name,
		errorType: data.errorType,
		paramLocation: data.paramLocation,
		paramType: data.paramType
	}
}

export default parseError