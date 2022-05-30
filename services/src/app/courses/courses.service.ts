import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService{
    getCourses(){
        return ['C#', 'Java', 'JavaScript'];
    }
}