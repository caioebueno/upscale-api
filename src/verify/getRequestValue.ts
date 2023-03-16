import TRequest from "../types/request"
import TValidation from "../types/validation"

type TGetRequestValue = {
	request: TRequest
	validation: TValidation
}

const getRequestValue = (data: TGetRequestValue): unknown => {
	return data.request[data.validation.location][data.validation.name]
}

export default getRequestValue