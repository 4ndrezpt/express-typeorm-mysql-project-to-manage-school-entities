"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeachersController {
    constructor() {
    }
    readAll(req, res) {
        try {
            res.json({ msg: "Read all of the teachers" });
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
            res.json({ msg: "Read one teacher" });
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    post(req, res) {
        try {
            res.json({ msg: "Post one teacher" });
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    update(req, res) {
        try {
            res.json({ msg: "Update one teacher" });
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    delete(req, res) {
        try {
            res.json({ msg: "Delete one teacher" });
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    patch(req, res) { res.json({ msg: "Patch one teacher" }); }
}
exports.default = new TeachersController();
//# sourceMappingURL=teachersController.js.map