import TParameterError, { TParameterErrorType } from "../types/parameterError";
type TParseError = {
    name: string;
    type: TParameterErrorType;
};
declare const parseError: (data: TParseError) => TParameterError;
export default parseError;
