"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teachersController_1 = __importDefault(require("../controllers/teachersController"));
const teachers = express_1.default.Router();
//getAll
teachers.get(('/'), teachersController_1.default.readAll);
teachers.post('/', teachersController_1.default.post);
teachers.route("/:id")
    .get(teachersController_1.default.readOne)
    .put(teachersController_1.default.update)
    .delete(teachersController_1.default.delete)
    .patch(teachersController_1.default.patch);
//getOne
exports.default = teachers;
//# sourceMappingURL=teachersRoute.js.map