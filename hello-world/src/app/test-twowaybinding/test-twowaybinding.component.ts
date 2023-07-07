import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-twowaybinding',
  template: `
    <p>
      Two-way Data Binding Demo
    </p>

    <input [(ngModel)]=data1 type="text">
    <br>
    {{data1}}
    <br>

    <!-- two way binding + template ref -->
    <input [(ngModel)]=data #msg type="text">
    <br>
    {{data}}
    <br>
    <button (click)="message(msg.value)" type="button"> Click Me </button>
    
    <!-- example 2 -->
    <br><br>
    <input [(ngModel)]=data2 type="number">
    <button (click)="onClick()" type="button"> Click </button>
    <br>
    {{data2}}

    <!-- example 3 -->
    <br><br>
    <input [(ngModel)]=data3 type="text">
    <button type="button"> ping </button>
    <br>
    {{data3}}

  `,
  styles: [
  ]
})
export class TestTwowaybindingComponent implements OnInit {

  public data = "";
  public data1 = "";
  public data2 = "";
  public data3 = "";

  constructor() { }

  ngOnInit(): void {
  }

  message(message: any){
    alert(message);
  }

  onClick(){
    console.log(this.data2);
  }

}
