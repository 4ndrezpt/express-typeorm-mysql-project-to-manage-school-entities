import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { ManyToMany, JoinTable } from 'typeorm';
import { Course } from './coursesModel';
import { BaseEntity } from 'typeorm';

@Entity('students')
export class Student extends BaseEntity{
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
  @Column({ default: null })
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
    nullable: true,
    default : null
  })
  updatedAt: Date | null;
}
