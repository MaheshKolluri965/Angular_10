import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-test23-course-list',
  template: `
    <h2>
      Routing-course-list Example
    </h2>

    <ul class="items">
      <li (click)="onSelect(x)" [class.selected]="isSelected(x)" *ngFor="let x of course">
        <span class="badge"> {{x.id}} {{x.name}} </span> 
      </li>
    </ul>

  `,
  styles: [`
  h2{
    color: blue;
    text-align: center;
    font-family: play;
    font-weight: bold;
    font-size: 30px; 
  }
  
/* Navigation link styles */
  
ul {
  padding: 15px 20px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
  margin-left: 20px;
}

  li {
    padding: 15px 20px;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
    background-color: #1cde3c;
    border-radius: 4px;
    margin-left: 20px;
  }

  li.selected{
    background-color: blue;
  }

  li :visited, a:link {
    color: #3643b6;
  }
  li :hover {
    color: #fff;
    background-color: #3643b6;
  }

  `]
})
export class Test23CourseListComponent implements OnInit {


  public course = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "HTML"},
    {"id": 3, "name": "CSS"},
    {"id": 4, "name": "JS"},
    {"id": 5, "name": "TS"},
    {"id": 6, "name": "SprigBoot"},
    {"id": 7, "name": "AWS"}, 
  ];

  public selectedId: any;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //paramMap observable
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.selectedId = id;
      this.selectedId = parseInt(this.selectedId);
    });
  }

  onSelect(x: any){
    //Absolute navigation
    //this._router.navigate(['/course-mylist', x.id])

    //Relative Navigation
    this._router.navigate([x.id], {relativeTo: this._activatedRoute});
  }

  isSelected(x: any){
    return x.id === this.selectedId;
  }

}
