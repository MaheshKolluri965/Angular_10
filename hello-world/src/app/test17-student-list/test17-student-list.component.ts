import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-test17-student-list',
  template: `
    <h2>
      Services Example1-Student List
    </h2>

    <h3> Student Names Using Dependenacy Injection as a framework </h3>
    <ul *ngFor="let x of studentName">
      <li> {{x.name}} </li>
    </ul>

    <h3> Student Details Using Dependenacy Injection as a framework </h3>
    <ul *ngFor="let x of student">
      <li> {{x.id}}. {{x.name}} --- {{x.course}} </li>
    </ul>

    <h3> Student Details Using Observables </h3>
    <ul *ngFor="let x of studentDetails">
      <li> {{x.id}}. {{x.name}} --- {{x.course}} </li>
    </ul>

    <h3>{{errMsg}}</h3>

  `,
  styles: [
  ]
})
export class Test17StudentListComponent implements OnInit {

  public studentName: any;

  public student: any;

  public studentDetails: any;
  
  public errMsg: any;

  constructor(private _stdServices: StudentService) { }


  ngOnInit(): void {
    this._stdServices.getDetails().subscribe({
      next: (data) => this.studentDetails = data, 
      error: (e) => this.errMsg = e
    });

    //Deprecated
    //this._stdServices.getDetails().subscribe(data => this.studentDetails = data, e => this.errMsg = e);
    //DI
    this.studentName = this._stdServices.getStudent();
    this.student = this._stdServices.getStudent();
  }

}
