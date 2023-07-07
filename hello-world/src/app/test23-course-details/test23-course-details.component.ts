import { ParsedVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-test23-course-details',
  template: `
    <h2>
      Routing-course-details
      <br>
      You are selected the course with Id = {{courseId}}
    </h2>

    <nav>
    <a (click)="toPrevious()"> Previous </a>
    <a (click)="toNext()"> next </a>
    <a (click)="goBack()">Back</a>
    <nav>

    <nav>
      <a (click)="showDuration()" > Course Duration </a>
      <a (click)="showFee()"> Course Fee Structure </a>
    </nav>

    <router-outlet></router-outlet>

  `,
  styles: [`
    
  `
  ]
})
export class Test23CourseDetailsComponent implements OnInit {
  
  public courseId: any;
  public courseName: any;

  constructor(private _activatedRoute: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    //Route Parameters
    //let cId = this._activatedRoute.snapshot.paramMap.get('id');
    //this.courseId = cId;

    //paramMap observable
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.courseId = id;
      this.courseId = parseInt(this.courseId);
    });
  }

  toNext(){
    let nextId = this.courseId + 1;
    //Absolute Navigation
    //this._route.navigate(['/course-mylist', nextId]);

    //Relative Navigation
    this._route.navigate([{id: nextId}], {relativeTo: this._activatedRoute});
    //this._route.navigate(['../', {id: nextId}], {relativeTo:this._activatedRoute});

  }

  toPrevious(){
    let previousId = this.courseId - 1;
    //Absolute Navigation
    //this._route.navigate(['/course-mylist', previousId]);

    //Relative Navigation
    this._route.navigate([{id: previousId}], {relativeTo:this._activatedRoute});
  }

  goBack(){
    let selectedId = this.courseId ? this.courseId: null;
    //absolute navigation
    //this._route.navigate(['/course-mylist', {id: selectedId}]);

    //Relative Navigation
    this._route.navigate(['../', {id: selectedId}], {relativeTo: this._activatedRoute});
  }

  showDuration(){
    this._route.navigate(['duration'], {relativeTo: this._activatedRoute});
  }

  showFee(){
    this._route.navigate(['fee'], {relativeTo: this._activatedRoute});
  }

}
