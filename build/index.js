"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const connection_1 = require("./config/connection");
async function main() {
    try {
        await connection_1.AppDataSource.initialize();
        console.log("Connection succeded");
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
    app_1.default.listen(3000, () => {
        console.log('server connected at por: ', 3000);
    });
}
main();
//# sourceMappingURL=index.js.map