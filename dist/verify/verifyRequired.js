"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyRequired = (data) => {
    if (data.value === undefined)
        return false;
    return true;
};
exports.default = verifyRequired;
