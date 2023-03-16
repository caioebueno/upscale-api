import { TInformationLocation, TInformationType } from "./validation";
type TParameterErrorType = 'INVALID_TYPE' | 'REQUIRED';
type TParameterError = {
    name: string;
    errorType: TParameterErrorType;
    paramLocation: TInformationLocation;
    paramType: TInformationType;
};
export default TParameterError;
export type { TParameterErrorType };