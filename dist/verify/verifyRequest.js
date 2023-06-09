"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRequestValue_1 = require("./getRequestValue");
const isNull_1 = require("./isNull");
const parseError_1 = require("./parseError");
const verifyRequired_1 = require("./verifyRequired");
const verifyValue_1 = require("./verifyValue");
const verifyRequest = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = [];
    if (!data.request.validations)
        return {
            error: false
        };
    for (const validation of data.request.validations) {
        const informationValue = (0, getRequestValue_1.default)({
            request: data.request,
            validation: validation
        });
        if (informationValue === undefined && !validation.required)
            continue;
        const verifyRequiredError = (0, verifyRequired_1.default)({
            value: informationValue
        });
        if (!verifyRequiredError) {
            errors.push((0, parseError_1.default)({
                name: validation.name,
                errorType: 'REQUIRED',
                paramLocation: validation.location,
                paramType: validation.type
            }));
            continue;
        }
        if (!validation.nullable && (0, isNull_1.default)(informationValue)) {
            errors.push((0, parseError_1.default)({
                name: validation.name,
                errorType: 'NOT_NULLABLE',
                paramLocation: validation.location,
                paramType: validation.type
            }));
            continue;
        }
        const verifyValueError = (0, verifyValue_1.default)({
            type: validation.type,
            value: informationValue,
            onOf: validation.onOf
        });
        if (verifyValueError.hasError) {
            errors.push((0, parseError_1.default)({
                name: validation.name,
                errorType: 'INVALID_TYPE',
                paramLocation: validation.location,
                paramType: validation.type,
                allowedValues: verifyValueError.allowedValues
            }));
            continue;
        }
    }
    if (errors.length === 0)
        return {
            error: false
        };
    return {
        error: true,
        errorArray: errors
    };
});
exports.default = verifyRequest;
