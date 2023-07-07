import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-inp',
  template: `
    <h1>
      {{name}} Demo!
    </h1>
    <p>one way binding</p>
    <p>
    {{"This is "+ name}}
    </p>
    <p>
    {{name.length}}
    </p>
    <p>
    {{name.toUpperCase()}}
    </p>
    <p>
    {{username()}}
    </p>

  `,
  styles: [
    `
    h1{
      text-align: center;
      font-size: 30px;
      color: red
    }
    p{
      text-align: center;
      font-size: 15px;
      color: red
    }

   ` 
  ]
})
export class TestInpComponent implements OnInit {

  public name = "Interpolation";
  constructor() { }

  ngOnInit(): void {
  }

  username(){
    return this.name;
  }

}
