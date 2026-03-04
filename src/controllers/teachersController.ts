import type { Request, Response } from "express";
import { Teacher } from '../models/teachersModel';

class TeachersController {
  constructor(){
  }
  async readAll(req: Request, res:Response){
    try {
      const data = await Teacher.find();
      res.status(200).json(data);
    }catch(err){
      if(err instanceof Error){ res.status(500).send(err.message); }
    }
  }
  async readOne(req: Request, res: Response){
    //get URL params
    const { id } = req.params;
    try {
      const data = await Teacher.findOneBy({ id: Number(id) });
      if(!data){ throw new Error('Record Not Found')}
      res.status(200).json(data);
    }catch(err){
      if(err instanceof Error){ res.status(500).send(err.message); }
    }
  }

 async post(req: Request, res: Response){
   console.log(req.body);
    try {
      const record = await Teacher.save(req.body);
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
      const record = await Teacher.findOneBy({ id: Number(id) });
      if(
        !record){ throw new Error('Record Not Found')}
        await Teacher.update({ id: Number(id) }, req.body);
        const recordUpdated = await Teacher.findOneBy({ id: Number(id) });
        res.status(204).json(recordUpdated);
    }catch(err){
      if(err instanceof Error){ res.status(500).send(err.message); }
    }
  }
  async delete(req: Request, res: Response){
    const { id } = req.params;
    try {
      const record = await Teacher.findOneBy({ id: Number(id) });
      if(!record){ throw new Error('Record Not Found')}
        await Teacher.delete({ id: Number(id) });
        res.status(204).json({ msg : "record deleted..."});
    }catch(err){
      if(err instanceof Error){ res.status(500).send(err.message); }
    }
  }
patch(req: Request, res: Response){ res.json({msg: "Patch one Teacher"})}
}
export default new TeachersController();
