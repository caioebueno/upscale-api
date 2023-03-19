import TRequest, { TRequestMethod } from "../../types/request"
import { Request } from 'express'
import findRoutePath from "./findRoutePath"
import extractRouteParams from "./extractRouteParams"

const parseRequest = async (req: Request): Promise<TRequest | null> => {
	const path = await findRoutePath(req.path)
	if(!path) return null
	const request: TRequest = {
		body: req.body,
		method: req.method as TRequestMethod,
		params: extractRouteParams({
			path: req.path,
			pathTemplate: path
		}),
		path,
		query: req.query
	}
	return request
}

export default parseRequest