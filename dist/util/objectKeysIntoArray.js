"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectKeysIntoArray = (data) => {
    const keys = [];
    for (const key in data) {
        keys.push(key);
    }
    return keys;
};
exports.default = objectKeysIntoArray;
