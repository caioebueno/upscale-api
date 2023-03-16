type TBody =  {
	[key: string]: unknown
}

type TQuery =  {
	[key: string]: unknown
}

type TParams =  {
	[key: string]: unknown
}

type TRequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'

interface TRequest {
	path: string,
	method: TRequestMethod,
	query: TQuery,
	body: TBody,
	params: TParams
}

export default TRequest
export type { TRequestMethod }