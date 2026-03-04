import type { Request, Response } from "express";
import { Teacher } from '../models/teachersModel';
import { Course } from '../models/coursesModel';

class CoursesController {
  constructor(){
  }
  async readAll(req: Request, res:Response){
    try {
      const data = await Course.find();
      res.status(200).json(data);
    }catch(err){
      if(err instanceof Error){ res.status(500).send(err.message); }
    }
  }
  async readOne(req: Request, res: Response){
    //get URL params
    const { id } = req.params;
    try {
      const data = await Course.findOneBy({ id: Number(id) });
      if(!data){ throw new Error('Record Not Found')}
      res.status(200).json(data);
    }catch(err){
      if(err instanceof Error){ res.status(500).send(err.message); }
    }
  }

 async post(req: Request, res: Response){
   //console.log(req.body);
    try {
      const { teacher_id } = req.body;
      const existentTeacher = await Teacher.findOneBy({ id: Number(teacher_id) });
      if(!existentTeacher){
        throw new Error("This teacher doesn't exist in database");
      }
        const record = await Course.save(req.body);
        res.status(201).json(record);

    } catch(err){
      if(err instanceof Error){ res.status(500).send(err.message); }
    }
  }
  async update(req: Request, res: Response){
    const { id } = req.params;
    const updatedAt = new Date();
    req.body.updatedAt = updatedAt;
    //console.log(req.body);
    try {
      const record = await Course.findOneBy({ id: Number(id) });
      if(
        !record){ throw new Error('Record Not Found')}
        await Course.update({ id: Number(id) }, req.body);
        const recordUpdated = await Course.findOneBy({ id: Number(id) });
        res.status(204).json(recordUpdated);
    }catch(err){
      if(err instanceof Error){ res.status(500).send(err.message); }
    }
  }
  async delete(req: Request, res: Response){
    const { id } = req.params;
    try {
      const record = await Course.findOneBy({ id: Number(id) });
      if(!record){ throw new Error('Record Not Found')}
        await Course.delete({ id: Number(id) });
        res.status(204).json({ msg : "record deleted..."});
    }catch(err){
      if(err instanceof Error){ res.status(500).send(err.message); }
    }
  }
patch(req: Request, res: Response){ res.json({msg: "Patch one Course"})}
}
export default new CoursesController();
