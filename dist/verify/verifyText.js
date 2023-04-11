"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyText = (data) => {
    if (typeof data.value !== 'string')
        return {
            hasError: true,
        };
    if (data.onOf && !data.onOf.includes(data.value))
        return {
            hasError: true,
            allowedValues: data.onOf
        };
    return {
        hasError: false
    };
};
exports.default = verifyText;
