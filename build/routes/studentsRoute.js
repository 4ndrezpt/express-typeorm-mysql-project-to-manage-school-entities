"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentsController_1 = __importDefault(require("../controllers/studentsController"));
const students = express_1.default.Router();
//getAll
students.get(('/'), studentsController_1.default.readAll);
students.post('/', studentsController_1.default.post);
students.route("/:id")
    .get(studentsController_1.default.readOne)
    .put(studentsController_1.default.update)
    .delete(studentsController_1.default.delete)
    .patch(studentsController_1.default.patch);
//getOne
exports.default = students;
//# sourceMappingURL=studentsRoute.js.map