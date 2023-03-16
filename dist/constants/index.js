"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_API_ERROR_CODE = exports.DEFAULT_CONFIG_FILE_PATH = void 0;
const path = require("path");
exports.DEFAULT_CONFIG_FILE_PATH = path.join(__dirname, '..', '..', '..', '..', 'api.json');
exports.DEFAULT_API_ERROR_CODE = 422;
