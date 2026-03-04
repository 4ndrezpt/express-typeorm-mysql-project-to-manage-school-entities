import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Student } from '../models/studentsModel';
import { Teacher } from '../models/teachersModel';
import { Course } from '../models/coursesModel';
dotenv.config();

const MYSQL_HOST  = process.env.MYSQL_HOST;
const MYSQL_DATABASE= process.env.MYSQL_DATABASE;
const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_CHARSET = process.env.MSQL_CHARSET;

console.log(MYSQL_HOST);

export const AppDataSource = new DataSource({
  type : "mysql",
  host : MYSQL_HOST,
  port : 3306,
  username : MYSQL_USER,
  database : MYSQL_DATABASE,
  password : MYSQL_PASSWORD,
  charset : MYSQL_CHARSET,
  logging: true,
  entities : [Student, Teacher, Course],
  synchronize : true
})
