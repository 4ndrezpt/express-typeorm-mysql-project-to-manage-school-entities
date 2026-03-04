import express from 'express';
import CoursesController from '../controllers/coursesController';
const courses = express.Router();

//getAll
courses.get(('/'), CoursesController.readAll);
courses.post('/', CoursesController.post);
courses.route("/:id")
  .get(CoursesController.readOne)
  .put(CoursesController.update)
  .delete(CoursesController.delete)
  .patch(CoursesController.patch);
//getOne

export default courses;
