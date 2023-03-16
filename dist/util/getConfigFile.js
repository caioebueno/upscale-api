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
const promises_1 = require("fs/promises");
const constants_1 = require("../constants");
const getConfigFile = () => __awaiter(void 0, void 0, void 0, function* () {
    const configFile = yield (0, promises_1.readFile)(constants_1.DEFAULT_CONFIG_FILE_PATH, 'utf8');
    try {
        const parsedConfigFile = JSON.parse(configFile);
        return parsedConfigFile;
    }
    catch (error) {
        throw 'Could not find or parse config file';
    }
});
exports.default = getConfigFile;
