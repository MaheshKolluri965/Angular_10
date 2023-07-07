import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test16-pipes',
  template: `
    <p>
      Pipes Demo!
    </p>
    <h2> {{name}} </h2>

    <h2> {{name | lowercase}} </h2>
    <h2> {{name | uppercase}} </h2>
    <h2> {{name | titlecase}} </h2>
    <h2> {{name | slice:2}} </h2>
    <h2> {{name | slice:0:2}} </h2>
    <h2> {{person | json }} </h2>

    <h2> {{5.678 | number: '1.2-3'}} </h2>
    <h2> {{5.6784393 | number: '2.4-6'}} </h2>
    <h2> {{5.678 | number: '3.1-2'}} </h2>

    <h2> {{0.25 | percent}} </h2>
    <h2> {{0.25 | currency}} </h2>
    <h2> {{0.25 | currency: 'INR'}} </h2>
    
    <h2> {{date}} </h2>
    <h2> {{date | date: 'short'}} </h2>
    <h2> {{date | date: 'shortDate'}} </h2>
    <h2> {{date | date: 'shortTime'}} </h2>
    
    <h2> {{date | date: 'medium'}} </h2>
    <h2> {{date | date: 'mediumDate'}} </h2>
    <h2> {{date | date: 'mediumTime'}} </h2>

    <h2> {{date | date: 'long'}} </h2>
    <h2> {{date | date: 'longDate'}} </h2>
    <h2> {{date | date: 'longTime'}} </h2>


  `,
  styles: [
  ]
})
export class Test16PipesComponent implements OnInit {

  public name = "MJ Angular";

  public person= {
    "firstName" : "MJ",
    "course" : "Angular10"
  }

  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
