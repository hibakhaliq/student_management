import { exitCode } from "process";

class School {
    name: string;
    students: Student[] = [];
    teachers: Teacher[] = [];
    constructor(name:string){
        this.name = name
     }
    
    addStudent(stdObj: Student){
    this.students.push(stdObj)
    }
    addTeacher(teObj:Teacher) {
    this.teachers.push(teObj) 
    
}


}
    
    


    class Student {
        name: string;
        rollNumber: number;
        SchoolName: string;

        constructor(name: string, rollNumber: number, schoolName: string){
            this.name = name;
            this.rollNumber = rollNumber;
            this.SchoolName= schoolName;
        }
    }
      class Teacher extends Student{}

      //school name
      let school1 = new School("Beacon House")
      let school2 = new School("Mama Parsi")
      let school3 = new School("BVS")

      //student name
      let s1 = new Student("Hiba",5667,school1.name)
      let s2 = new Student("Hiba",5667,school2.name)
      let s3 = new Student("Hiba",5667,school3.name)

      //Teacher
      let t1 = new Teacher("Ayesha",26,school1.name)
      let t2 = new Teacher("Amna",45,school2.name)
      let t3 = new Teacher("Afiya",28,school3.name)

      //
      school1.addStudent(s1)
      school2.addStudent(s2)
      school3.addStudent(s3)

      //
      school1.addTeacher(t1)
      school2.addTeacher(t2)
      school3.addTeacher(t3)

      console.log(t1)
      console.log(t2)
      console.log(t3)

      console.log(school1)
      console.log(school2)
      console.log(school3)
