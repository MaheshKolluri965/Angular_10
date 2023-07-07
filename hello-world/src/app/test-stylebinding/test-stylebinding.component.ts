import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-stylebinding',
  template: `
    <p>
      stylebinding Demo
    </p>

    <h2 [style.color]="'blue'"> Style Binding </h2>

    <!-- Style binding using Property value -->
    <h2 [style.color]="myColor"> Style Binding </h2>

    <!-- Style Binding using conditional stmts -->
    <h2 [style.color]="required ? 'green' : 'red' "> Style Binding </h2>
  
    <!-- Style Binding using multiple styles -->
    <h2 [ngStyle]="myStyles"> Style Binding </h2>


  `,
  styles: [
  ]
})
export class TestStylebindingComponent implements OnInit {

  public myColor = "orange";
  public required = false;

  public myStyles = {
    color: "gold",
    fontStyle: "italic",
    fontSize: "50px"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
