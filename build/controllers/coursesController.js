"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoursesController {
    constructor() {
    }
    readAll(req, res) {
        try {
            res.json({ msg: "Read all of the students" });
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    readOne(req, res) {
        //get URL params
        const { id } = req.params;
        try {
            res.json({ msg: "Read one student" });
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    post(req, res) {
        try {
            res.json({ msg: "Post one student" });
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    update(req, res) {
        try {
            res.json({ msg: "Patch one student" });
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    delete(req, res) {
        try {
            res.json({ msg: "Patch one student" });
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    patch(req, res) { res.json({ msg: "Patch one student" }); }
}
exports.default = new CoursesController();
//# sourceMappingURL=coursesController.js.map