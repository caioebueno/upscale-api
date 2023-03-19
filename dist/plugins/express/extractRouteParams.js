"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_to_regexp_1 = require("path-to-regexp");
const extractRouteParams = (data) => {
    const matchFn = (0, path_to_regexp_1.match)(data.pathTemplate);
    const result = matchFn(data.path);
    if (result === false)
        return {};
    return result.params;
};
exports.default = extractRouteParams;
