import TRequest from "../types/request";
import TValidation from "../types/validation";
type TGetRequestValue = {
    request: TRequest;
    validation: TValidation;
};
declare const getRequestValue: (data: TGetRequestValue) => unknown;
export default getRequestValue;
