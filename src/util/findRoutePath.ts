import { pathToRegexp } from 'path-to-regexp'
import getConfigFile from './getConfigFile'
import objectKeysIntoArray from './objectKeysIntoArray'
import TConfigFile from '../types/configFile'
import TValidation from '../types/validation'

const findRoutePath = async (unparsedPath: string, method: string): Promise<{
	path: string
	validations: TValidation[]
} | null> => {
	const configFile = await getConfigFile()
	const findPath =  iteratePaths(configFile, unparsedPath, method)
	console.log('Found path:', findPath)
	return findPath
}

const iteratePaths = (data: TConfigFile, unparsedPath: string, method: string): {
	path: string
	validations: TValidation[]
} | null => {
	const pathsArray = objectKeysIntoArray(data)
	for (const path of pathsArray) {
		const pathRegex = pathToRegexp(path)
		if (pathRegex.exec(unparsedPath) !== null) {
			const pathObject = data[path]
			const validationArray = pathObject[method]
			return {
				path,
				validations: validationArray
			}
		}
	}
	return null
}

export default findRoutePath