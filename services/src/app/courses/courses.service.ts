import { Injectable } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable()
export class CoursesService{

    private _courses: string[] = ['C#', 'Java', 'JavaScript'];

    constructor(private _logService: LogService){
        console.log('Service Course');
    }

    getCourses(){
        this._logService.consoleLog('foobar');
        return this._courses;
    }

    addCourse(course: string){
        this._logService.consoleLog('creatting new course: ' + course)
        this._courses.push(course);
    }
}
