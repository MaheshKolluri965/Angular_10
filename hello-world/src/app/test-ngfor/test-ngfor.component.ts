import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ngfor',
  template: `
    <p>
      ngFor Demo
    </p>

    <div *ngFor="let x of subjects; index as i">
      <h2> {{i+1}}. {{x}} </h2>
    </div>
    <br>
    <div *ngFor="let x of subjects; first as f">
      <h2> First Element: {{f}}. {{x}} </h2>
    </div>
    <br>
    <div *ngFor="let x of subjects; last as l">
      <h2> Last Element: {{l}}. {{x}} </h2>
    </div>
    <br>
    <div *ngFor="let x of subjects; even as e">
      <h2> Even: {{e}}. {{x}} </h2>
    </div>
    <br>
    <div *ngFor="let x of subjects; odd as od">
      <h2> Odd: {{od}}. {{x}} </h2>
    </div>


  `,
  styles: [
  ]
})
export class TestNgforComponent implements OnInit {

  public subjects= ["Angular", "React", "vue", "java", "springboot"];

  constructor() { }

  ngOnInit(): void {
  }

}
