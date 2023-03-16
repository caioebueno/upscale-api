import TParameterError, { TParameterErrorType } from "../types/parameterError"
import { TInformationLocation } from "../types/validation"

type TParseError = {
	name: string
	errorType: TParameterErrorType
	paramLocation: TInformationLocation
}

const parseError = (data: TParseError): TParameterError => {
	return {
		name: data.name,
		errorType: data.errorType,
		paramLocation: data.paramLocation
	}
}

export default parseError