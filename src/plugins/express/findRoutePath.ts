import { pathToRegexp } from "path-to-regexp"
import getConfigFile from "../../util/getConfigFile"
import objectKeysIntoArray from "../../util/objectKeysIntoArray"

const findRoutePath = async (unparsedPath: string): Promise<string | null> => {
	const configFile = await getConfigFile()
	const pathsArray = objectKeysIntoArray(configFile)
	for (const path of pathsArray) {
		const pathRegex = pathToRegexp(path)
		if(pathRegex.exec(unparsedPath) !== null) return path
	}
	return null
}

export default findRoutePath