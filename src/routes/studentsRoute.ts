import express from  'express';
import StudentsController  from '../controllers/studentsController';
const students = express.Router();


//getAll
students.get(('/'), StudentsController.readAll);
students.post('/', StudentsController.post);
students.route("/:id")
  .get(StudentsController.readOne)
  .put(StudentsController.update)
  .delete(StudentsController.delete)
  .patch(StudentsController.patch);
//getOne

export default students;
