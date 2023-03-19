type TInformationLocation = 'params' | 'query' | 'body'
type TInformationType = 'NUMBER' | 'STRING' | 'DATE'

interface TValidation {
	location: TInformationLocation
	name: string
	required: boolean
	type: TInformationType
	nullable: boolean
}

export default TValidation
export type { TInformationLocation, TInformationType }