import { TRequestMethod } from "./request"
import TValidation from "./validation"

interface TConfigFile {
	[path: string]: TConfigFileMethod
}

type TConfigFileMethod = {
	[method in TRequestMethod]: TValidation[]
}

export default TConfigFile