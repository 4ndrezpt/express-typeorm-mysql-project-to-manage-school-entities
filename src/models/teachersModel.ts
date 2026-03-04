import { BaseEntity, Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { OneToMany } from 'typeorm';
import { Course } from './coursesModel';

@Entity('teachers')
export class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn()
  id : number;
  @Column()
  document: String;
  @Column()
  first_name: String;
  @Column()
  last_name : String;
  @Column()
  email: String;
  @Column({ type : "date"})
  bornAt: String;
  @Column()
  phone: String;
  @Column()
  last_grade: String;
  @Column({
    type : 'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;
  @Column({
    type : 'datetime',
    nullable : true,
    default : null
  })
  updatedAt: Date | null;

  @OneToMany(() => Course, (course) => course.teacher)
  courses : Course[]
}
