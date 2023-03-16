"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyText = (data) => {
    if (typeof data.value === 'string')
        return true;
    return false;
};
exports.default = verifyText;
