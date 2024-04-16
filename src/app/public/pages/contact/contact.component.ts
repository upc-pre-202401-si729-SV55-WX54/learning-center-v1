import { Component } from '@angular/core';
import {CoursesService} from "../../../learning/services/courses.service";
import {Course} from "../../../learning/model/course.entity";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  courses : Array<Course> = [];

  constructor(private courseService: CoursesService) {  }

  ngOnInit(){

    this.courseService.getAll().subscribe((data: Course)=> {
      this.courses = [data];
    })

  }

}
