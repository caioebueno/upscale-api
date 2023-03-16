"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRequestValue = (data) => {
    return data.request[data.validation.location][data.validation.name];
};
exports.default = getRequestValue;
