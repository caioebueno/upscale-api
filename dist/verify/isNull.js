"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNull = (value) => {
    if (value === 'null' || value === null)
        return true;
    return false;
};
exports.default = isNull;
