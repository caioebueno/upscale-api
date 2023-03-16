type TParameterErrorType = 'INVALID_TYPE' | 'REQUIRED';
type TParameterError = {
    name: string;
    type: TParameterErrorType;
};
export default TParameterError;
export type { TParameterErrorType };
