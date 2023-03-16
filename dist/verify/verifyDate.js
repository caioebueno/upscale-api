"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyDate = (data) => {
    if (!isNaN(Date.parse(String(data.value))))
        return true;
    return false;
};
exports.default = verifyDate;
