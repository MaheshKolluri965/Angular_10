import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  template: `
    <p>
      Welcome to Admin Page
    </p>
  `,
  styles: [
  ]
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
