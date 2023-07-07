import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-test17-student-details',
  template: `
    <h2>
    Services Example1-Student Details 
    </h2>

    <h3>Course Names using Dependency Injection as a framework</h3> 
    <ul *ngFor="let l of courseName">
      <li> {{l.id}} --- {{l.course}}  </li>
    </ul>

    <h3>Student Details using Dependency injection as a framework</h3>
    <ul *ngFor="let x of student">
      <li> {{x.id}}. {{x.name}} -- {{x.course}} </li>
    </ul>
      
    <h3> Student Details Using Observables </h3>
    <ul *ngFor="let x of studentDetails">
      <li> {{x.id}}. {{x.name}} --- {{x.course}} </li>
    </ul>

  `,
  styles: [
  ]
})
export class Test17StudentDetailsComponent implements OnInit {

  public student : any;

  public courseName: any;

  public studentDetails: any;

  constructor(private _stdService: StudentService, private _stdCourse: StudentService) { }

  ngOnInit(): void {
    
    this._stdService.getDetails().subscribe(data => this.studentDetails = data);

    //DI
    this.student = this._stdService.getStudent();
    this.courseName = this._stdCourse.getCourse();
  }

}
