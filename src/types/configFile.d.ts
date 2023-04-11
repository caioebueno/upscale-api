import TValidation from './validation'

interface TConfigFile {
	[path: string]: TConfigFileMethod
}

type TConfigFileMethod = {
	[method: string]: TValidation[]
}

export default TConfigFile
export { TConfigFileMethod }