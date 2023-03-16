import { readFile } from "fs/promises"
import { DEFAULT_CONFIG_FILE_PATH } from "../constants"
import TConfigFile from "../types/configFile"

const getConfigFile = async () => {
	const configFile = await readFile(DEFAULT_CONFIG_FILE_PATH, 'utf8')
	try {
		const parsedConfigFile = JSON.parse(configFile) as TConfigFile
		return parsedConfigFile
	} catch(error) {
		throw 'Could not find or parse config file'
	}
}

export default getConfigFile
