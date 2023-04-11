import TParameterError, { TParameterErrorType } from '../types/parameterError';
import { TInformationLocation, TInformationType } from '../types/validation';
type TParseError = {
    name: string;
    errorType: TParameterErrorType;
    paramLocation: TInformationLocation;
    paramType: TInformationType;
    allowedValues?: string[];
};
declare const parseError: (data: TParseError) => TParameterError;
export default parseError;
