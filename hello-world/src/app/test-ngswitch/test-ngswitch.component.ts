import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ngswitch',
  template: `
    <p>
      ngSwitch Demo
    </p>

    <div [ngSwitch]="myChoice">
      <div class="switchCase">
        <div *ngSwitchCase="'one'"> First Block </div>
        <div *ngSwitchCase="'two'"> second Block </div>
        <div *ngSwitchCase="'three'"> third Block </div>
        <div *ngSwitchCase="'four'"> four Block </div>
        <div *ngSwitchDefault> Default Block </div>
      </div>
    </div>
  `,
  styles: [
    `
    .switchCase{
      font-size: 30px;
      font-style: italic;
      color: red;
    }

    `
  ]
})
export class TestNgswitchComponent implements OnInit {

  public myChoice = "one";

  constructor() { }

  ngOnInit(): void {
  }

}
