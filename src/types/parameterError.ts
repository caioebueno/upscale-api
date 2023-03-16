import { TInformationLocation } from "./validation"

type TParameterErrorType = 'INVALID_TYPE' | 'REQUIRED'

type TParameterError = {
	name: string
	errorType: TParameterErrorType
	paramLocation: TInformationLocation
}

export default TParameterError
export type { TParameterErrorType } 