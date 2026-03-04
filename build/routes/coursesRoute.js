"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const coursesController_1 = __importDefault(require("../controllers/coursesController"));
const courses = express_1.default.Router();
//getAll
courses.get(('/'), coursesController_1.default.readAll);
courses.post('/', coursesController_1.default.post);
courses.route("/:id")
    .get(coursesController_1.default.readOne)
    .put(coursesController_1.default.update)
    .delete(coursesController_1.default.delete)
    .patch(coursesController_1.default.patch);
//getOne
exports.default = courses;
//# sourceMappingURL=coursesRoute.js.map