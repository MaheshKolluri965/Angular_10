import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-pb',
  template: `
    <p>
      Property Binding Demo!
    </p>
    <br>
    <input type="text" value="Angular10">
    <p>
    <input [id]="courseId" type="text" value="Property Binding">
    <br>
    <br>
    <input bind-disabled="isDisabled" id="{{courseId}}" type="text" value="Angular10">
    </p>
  `,
  styles: [
    `
    p{
      text-align: center;
      font-size: 20px;
      color: green
    }

    `
  ]
})
export class TestPbComponent implements OnInit {
  public courseId = "123";
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

}
