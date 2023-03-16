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
const constants_1 = require("../../constants");
const verifyRequest_1 = require("../../verify/verifyRequest");
const parseRequest_1 = require("./parseRequest");
const verifyExpressInformation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedRequest = (0, parseRequest_1.default)(req);
    const validation = yield (0, verifyRequest_1.default)({
        request: parsedRequest
    });
    if (!validation.error)
        return next();
    return res.status(constants_1.DEFAULT_API_ERROR_CODE).json(validation.errorArray);
});
exports.default = verifyExpressInformation;
