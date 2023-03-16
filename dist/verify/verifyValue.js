"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyText_1 = require("./verifyText");
const verifyValue = (data) => {
    if (data.type === 'STRING')
        return (0, verifyText_1.default)({
            value: data.value
        });
    return false;
};
exports.default = verifyValue;
