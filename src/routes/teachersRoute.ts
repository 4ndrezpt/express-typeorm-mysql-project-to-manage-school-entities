import express from 'express';
import TeachersController from '../controllers/teachersController';
const teachers = express.Router();

//getAll
teachers.get(('/'), TeachersController.readAll);
teachers.post('/', TeachersController.post);
teachers.route("/:id")
  .get(TeachersController.readOne)
  .put(TeachersController.update)
  .delete(TeachersController.delete)
  .patch(TeachersController.patch);
//getOne

export default teachers;
