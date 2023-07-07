import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ngif',
  template: `
    <p>
      ngIf Demo
    </p>

    <h1 *ngIf="true" > Hello {{name}} </h1>
    <h1 *ngIf="false" > Hi {{name}} </h1>
    
    <!-- First type -->
    <h1 *ngIf="status; else elseBlock" > Hello {{name}} </h1>

    <!-- second type -->
    <h1 *ngIf="status; then trueBlock else elseBlock"></h1>

    <ng-template #trueBlock>
      <h1> This is true block </h1>
    </ng-template>

    <ng-template #elseBlock>
      <h1> Welcome {{name}}, This is else block </h1>
    </ng-template>




  `,
  styles: [
  ]
})
export class TestNgifComponent implements OnInit {

  public name = "MJ";
  public status = false;
  constructor() { }

  ngOnInit(): void {
  }

}
