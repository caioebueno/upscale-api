type TVerifyText = {
    value: unknown;
    onOf?: string[];
};
type TVerifyTextResponse = TVerifyTextError | TVerifyTextGoodResponse;
type TVerifyTextGoodResponse = {
    hasError: false;
};
type TVerifyTextError = {
    hasError: true;
    allowedValues?: string[];
};
declare const verifyText: (data: TVerifyText) => TVerifyTextResponse;
export default verifyText;
