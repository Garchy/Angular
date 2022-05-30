import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService{

    private _courses: string[] = ['C#', 'Java', 'JavaScript'];

    getCourses(){
        return this._courses;
    }

    addCourse(course: string){
        this._courses.push(course);
    }
}
