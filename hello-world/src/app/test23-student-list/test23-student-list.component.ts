import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test23-student-list',
  template: `
    <h2>
      Routing-student-list Example
    </h2>
  `,
  styles: [`
    h2{
      color: blue;
      text-align: center;
      font-family: play;
      font-weight: bold;
      font-size: 30px; 
    }
  `]
})
export class Test23StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
