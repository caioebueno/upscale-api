import * as path from "path";

export const DEFAULT_CONFIG_FILE_PATH = path.join(__dirname, '..', '..', '..', '..', 'api.json')
export const DEFAULT_API_ERROR_CODE = 422
export const DEFAULT_API_ERROR_RESPONSE = {
	code: 'INVALID_PARAMS'
}