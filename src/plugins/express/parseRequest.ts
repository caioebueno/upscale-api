import TRequest, { TRequestMethod } from "../../types/request"
import { Request } from 'express'

const parseRequest = (req: Request): TRequest => {
	const request: TRequest = {
		body: req.body,
		method: req.method as TRequestMethod,
		params: req.params,
		path: req.path,
		query: req.query
	}
	return request
}

export default parseRequest