import type { Request, Response } from "express";
declare class CoursesController {
    constructor();
    readAll(req: Request, res: Response): void;
    readOne(req: Request, res: Response): void;
    post(req: Request, res: Response): void;
    update(req: Request, res: Response): void;
    delete(req: Request, res: Response): void;
    patch(req: Request, res: Response): void;
}
declare const _default: CoursesController;
export default _default;
//# sourceMappingURL=coursesController.d.ts.map