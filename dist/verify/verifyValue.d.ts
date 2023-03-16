import { TInformationType } from "../types/validation";
type TVerifyValueData = {
    type: TInformationType;
    required: boolean;
    value: unknown;
};
declare const verifyValue: (data: TVerifyValueData) => boolean;
export default verifyValue;
