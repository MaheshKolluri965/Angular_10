import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-test-componentinteraction',
  template: `
    <p>
      Component Interaction Demo
    </p>

    <h1> {{fromParent}} </h1>
    <h1> {{parent}} </h1>

    <button (click)="fireEvent()"> Click here </button>
  `,
  styles: [
  ]
})
export class TestComponentinteractionComponent implements OnInit {

  //Parent to Child 
  @Input() public fromParent: any;
  //using alias
  @Input('fromParent') public parent: any;

  //Child to Parent
  @Output() public childInfo = new EventEmitter();

  fireEvent(){
    this.childInfo.emit("this is from child")
   }

  constructor() { }

  ngOnInit(): void {
  }
  

}
