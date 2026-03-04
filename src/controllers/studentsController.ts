import type { Request, Response } from "express";
import { Student } from '../models/studentsModel';
import { Course } from '../models/coursesModel';

class StudentsController {
  constructor() {
  }
  async readAll(req: Request, res: Response) {
    try {
      const data = await Student.find();
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) { res.status(500).send(err.message); }
    }
  }
  async readOne(req: Request, res: Response) {
    //get URL params
    const { id } = req.params;
    try {
      const data = await Student.findOneBy({ id: Number(id) });
      if (!data) { throw new Error('Record Not Found') }
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) { res.status(500).send(err.message); }
    }
  }

  async post(req: Request, res: Response) {
    console.log(req.body);
    try {
      const record = await Student.save(req.body);
      res.status(201).json(record);
    } catch (err) {
      if (err instanceof Error) { res.status(500).send(err.message); }
    }
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const updatedAt = new Date();
    req.body.updatedAt = updatedAt;
    //console.log(req.body);
    try {
      const record = await Student.findOneBy({ id: Number(id) });
      if (!record) { throw new Error('Record Not Found') }
      await Student.update({ id: Number(id) }, req.body);
      const recordUpdated = await Student.findOneBy({ id: Number(id) });
      res.status(200).json(recordUpdated);
    } catch (err) {
      if (err instanceof Error) { res.status(500).send(err.message); }
    }
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const record = await Student.findOneBy({ id: Number(id) });
      if (!record) { throw new Error('Record Not Found') }
      await Student.delete({ id: Number(id) });
      res.status(204).json({ msg: "record deleted..." });
    } catch (err) {
      if (err instanceof Error) { res.status(500).send(err.message); }
    }
  }
  patch(req: Request, res: Response) { res.json({ msg: "Patch one student" }) }

  async assocStudent(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { student_id, course_id } = req.body;
      const studentRecord = await Student.findOneBy({ id: Number(id) });
      const courseRecord = await Course.findOneBy({ id: Number(id) });
      if (!courseRecord) {
        throw new Error("that course was not founded; ");
      }
      if (!studentRecord) {
        throw new Error("that student was not founded; ");
      }

    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json(err.message);
      }
    }
  }
}
export default new StudentsController();
