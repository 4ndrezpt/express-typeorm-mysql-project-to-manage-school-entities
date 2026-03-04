import express ,{ Request, Response }  from 'express';
import cors from 'cors';
import morgan from 'morgan';
import students from './routes/studentsRoute';
import teachers from './routes/teachersRoute';
import courses  from './routes/coursesRoute';


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req : Request, res: Response) => {
  res.send('Hello World from node-ts with express');
});

app.use("/students", students);
app.use("/teachers", teachers);
app.use("/courses", courses);


export default app;
