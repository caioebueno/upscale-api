"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const findRoutePath_1 = require("./findRoutePath");
const extractRouteParams_1 = require("./extractRouteParams");
const parseRequest = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const path = yield (0, findRoutePath_1.default)(req.path);
    if (!path)
        return null;
    const request = {
        body: req.body,
        method: req.method,
        params: (0, extractRouteParams_1.default)({
            path: req.path,
            pathTemplate: path
        }),
        path,
        query: req.query
    };
    return request;
});
exports.default = parseRequest;
