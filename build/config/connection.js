"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const dotenv = __importStar(require("dotenv"));
const typeorm_1 = require("typeorm");
const studentsModel_1 = require("../models/studentsModel");
const teachersModel_1 = require("../models/teachersModel");
const coursesModel_1 = require("../models/coursesModel");
dotenv.config();
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_CHARSET = process.env.MSQL_CHARSET;
console.log(MYSQL_HOST);
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: MYSQL_HOST,
    port: 3306,
    username: MYSQL_USER,
    database: MYSQL_DATABASE,
    password: MYSQL_PASSWORD,
    charset: MYSQL_CHARSET,
    logging: true,
    entities: [studentsModel_1.Student, teachersModel_1.Teacher, coursesModel_1.Course],
    synchronize: true
});
//# sourceMappingURL=connection.js.map