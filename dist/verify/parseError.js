"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseError = (data) => {
    return {
        name: data.name,
        type: data.type
    };
};
exports.default = parseError;
