"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyNumber = (data) => {
    if (!isNaN(Number(data.value)))
        return true;
    return false;
};
exports.default = verifyNumber;
