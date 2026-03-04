import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { Teacher } from './teachersModel';
import { Student } from './studentsModel';
import { ManyToOne, JoinColumn } from 'typeorm';
import { ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from 'typeorm';


@Entity('courses')
export class Course extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    nullable: false
  })
  teacher_id: number;

  @ManyToOne(()=> Teacher, (teacher)=> teacher.courses )
  @JoinColumn(
    {
      name : 'teacher_id',
      referencedColumnName : 'id'
    })//column name
  teacher: Teacher;

  @Column()
  name: String;
  @Column({ type: 'text'})
  description: String;
  @Column({
    type : 'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;
  @Column({
    type : 'datetime',
    nullable: true,
    default : null
  })
  updatedAt: Date | null;
  @ManyToMany(() => Student, (student)=> student.course, { cascade : true })
  @JoinTable({
    name: 'courses_x_student',
    joinColumn: { name: 'course_id' },
    inverseJoinColumn: { name: 'student_id' }
  })
  student: Student[];
}
