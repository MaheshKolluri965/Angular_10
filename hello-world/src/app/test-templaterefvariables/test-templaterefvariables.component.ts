import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-templaterefvariables',
  template: `
    <p>
      Template Reference Variables Demo
    </p>

    <input #msg type="text">
    <button (click)="message(msg.value)" type="button" > Welcome </button>


    <!-- example 2 -->
    <br><br>
    <input #tweet type="text">
    <button (click)="twitter(tweet.value)" type="button"> tweet here </button>

    <!-- example 3 -->
    <br><br>
    <input #ping type="text">
    <button (click)="teams(ping.value)" type="button"> Ping here </button>

  `,
  styles: [
  ]
})
export class TestTemplaterefvariablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message(message: any){
    console.log(message);
  }

  twitter(tweet: any){
    alert(tweet);
  }

  teams(ping: any){
    alert(ping);
  }
}
