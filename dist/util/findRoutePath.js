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
const path_to_regexp_1 = require("path-to-regexp");
const getConfigFile_1 = require("./getConfigFile");
const objectKeysIntoArray_1 = require("./objectKeysIntoArray");
const findRoutePath = (unparsedPath, method) => __awaiter(void 0, void 0, void 0, function* () {
    const configFile = yield (0, getConfigFile_1.default)();
    const findPath = iteratePaths(configFile, unparsedPath, method);
    return findPath;
});
const iteratePaths = (data, unparsedPath, method) => {
    const pathsArray = (0, objectKeysIntoArray_1.default)(data);
    for (const path of pathsArray) {
        const pathRegex = (0, path_to_regexp_1.pathToRegexp)(path);
        if (pathRegex.exec(unparsedPath) !== null) {
            const pathObject = data[path];
            const validationArray = pathObject[method];
            return {
                path,
                validations: validationArray
            };
        }
    }
    return null;
};
exports.default = findRoutePath;
