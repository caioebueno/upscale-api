import { TInformationLocation, TInformationType } from './validation'

type TParameterErrorType = 'INVALID_TYPE' | 'REQUIRED' | 'NOT_NULLABLE' | 'INVALID_VALUE'

type TParameterError = {
	name: string
	errorType: TParameterErrorType
	paramLocation: TInformationLocation
	paramType: TInformationType
	allowedValues?: string[]
}

export default TParameterError
export type { TParameterErrorType } 