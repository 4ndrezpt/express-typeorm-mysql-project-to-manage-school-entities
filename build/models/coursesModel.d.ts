import { Teacher } from './teachersModel';
import { Student } from './studentsModel';
export declare class Course {
    id: number;
    teacher: Teacher;
    name: String;
    description: String;
    last_grade: String;
    createdAt: Date;
    updatedAt: Date;
    student: Student[];
}
//# sourceMappingURL=coursesModel.d.ts.map