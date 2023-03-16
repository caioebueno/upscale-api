"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseRequest = (req) => {
    const request = {
        body: req.body,
        method: req.method,
        params: req.params,
        path: req.path,
        query: req.query
    };
    return request;
};
exports.default = parseRequest;
