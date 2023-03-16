"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyDate_1 = require("./verifyDate");
const verifyNumber_1 = require("./verifyNumber");
const verifyText_1 = require("./verifyText");
const verifyValue = (data) => {
    if (data.type === 'STRING')
        return (0, verifyText_1.default)({
            value: data.value
        });
    if (data.type === 'NUMBER')
        return (0, verifyNumber_1.default)({
            value: data.value
        });
    if (data.type === 'DATE')
        return (0, verifyDate_1.default)({
            value: data.value
        });
    return false;
};
exports.default = verifyValue;
