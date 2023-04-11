import TRequest, { TRequestMethod } from '../../types/request'
import { Request } from 'express'
import findRoutePath from '../../util/findRoutePath'
import extractRouteParams from './extractRouteParams'

const parseRequest = async (req: Request): Promise<TRequest | null> => {
	const findRoute = await findRoutePath(req.path, req.method)
	if(!findRoute) return null
	const request: TRequest = {
		body: req.body,
		method: req.method as TRequestMethod,
		params: extractRouteParams({
			path: req.path,
			pathTemplate: findRoute.path
		}),
		path: findRoute.path,
		query: req.query,
		validations: findRoute.validations
	}
	return request
}

export default parseRequest