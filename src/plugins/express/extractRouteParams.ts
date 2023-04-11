import { match } from 'path-to-regexp'
import { TParams } from '../../types/request'

type TExtractRouteParamsData = {
	pathTemplate: string
	path: string
}

const extractRouteParams = (data: TExtractRouteParamsData): TParams => {
	const matchFn = match(data.pathTemplate)
	const result = matchFn(data.path)
	if(result === false) return {}
	return result.params as TParams
}

export default extractRouteParams