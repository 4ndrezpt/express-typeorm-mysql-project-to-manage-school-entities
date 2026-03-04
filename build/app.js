"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const studentsRoute_1 = __importDefault(require("./routes/studentsRoute"));
const teachersRoute_1 = __importDefault(require("./routes/teachersRoute"));
const coursesRoute_1 = __importDefault(require("./routes/coursesRoute"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello World from node-ts with express');
});
app.use("/students", studentsRoute_1.default);
app.use("/teachers", teachersRoute_1.default);
app.use("/courses", coursesRoute_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map