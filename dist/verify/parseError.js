"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseError = (data) => {
    return {
        name: data.name,
        errorType: data.errorType,
        paramLocation: data.paramLocation,
        paramType: data.paramType,
        allowedValues: data.allowedValues
    };
};
exports.default = parseError;
