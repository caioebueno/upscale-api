import { NextFunction, Request, Response } from 'express'
import { DEFAULT_API_ERROR_CODE, DEFAULT_API_ERROR_RESPONSE } from '../../constants'
import verifyRequest from '../../verify/verifyRequest'
import parseRequest from './parseRequest'

const verifyExpressInformation = async (req: Request, res: Response, next: NextFunction) => {
	const parsedRequest = parseRequest(req)
	const validation = await verifyRequest({
		request: parsedRequest
	})
	if(!validation.error) return next()
	return res.status(DEFAULT_API_ERROR_CODE).json({
		...DEFAULT_API_ERROR_RESPONSE,
		errors: validation.errorArray
	})
}

export default verifyExpressInformation