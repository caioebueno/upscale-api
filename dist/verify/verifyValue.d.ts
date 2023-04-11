import { TInformationType } from '../types/validation';
type TVerifyValueData = {
    type: TInformationType;
    value: unknown;
    onOf?: string[];
};
type TVerifyValueResponse = TVerifyValuetError | TVerifyValueoodResponse;
type TVerifyValueoodResponse = {
    hasError: false;
};
type TVerifyValuetError = {
    hasError: true;
    allowedValues?: string[];
};
declare const verifyValue: (data: TVerifyValueData) => TVerifyValueResponse;
export default verifyValue;
