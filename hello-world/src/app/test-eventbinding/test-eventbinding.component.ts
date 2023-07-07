import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-eventbinding',
  template: `
    <p>
      Event Binding Demo
    </p>
    
    <button (click)="onClick()" type="button"> Click Me </button>

    <h2>{{greetings }}</h2>
  `,
  styles: [
  ]
})
export class TestEventbindingComponent implements OnInit {

  public greetings = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Event binding working in console");
    alert("Event Binding alert working");
    this.greetings="Event Binding using a property in ts file and interpolation";
  }

}
