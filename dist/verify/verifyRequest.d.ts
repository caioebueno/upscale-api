import TParameterError from '../types/parameterError';
import TRequest from '../types/request';
type TVerifyData = {
    request: TRequest;
};
type TVerifyRequestResponse = TVerifyRequestResponseError | TVerifyRequestResponseNoError;
type TVerifyRequestResponseError = {
    error: true;
    errorArray: TParameterError[];
};
type TVerifyRequestResponseNoError = {
    error: false;
};
declare const verifyRequest: (data: TVerifyData) => Promise<TVerifyRequestResponse>;
export default verifyRequest;
