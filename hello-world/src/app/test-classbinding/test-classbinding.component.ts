import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-classbinding',
  template: `
    <p>
      classbinding Demo!
    </p>
    <h2 class="TextColor"> Class Binding </h2>
    <h2 [class]="textColor"> Class Binding </h2>
    <h2 [class]="textSize"> Class Binding </h2>
    <h2 [class]="textType"> Class Binding </h2>
    
    <!-- Conditional stmt -->
    <h2 [class.TextType]="required"> Class Binding using condition stmt </h2>

    <!-- Multiple classes -->
    <h2 [ngClass]="Group"> Class Binding using ngClass </h2>



  `,
  styles: [
    `
    p{
      text-align: center;
      font-size: 40px;
      color: blueviolet;
    }

    h2{
      text-align: center;
      font-size: 30px;
    }

    .TextColor{
      color: green;
    }

    .TextSize{
      font-size: 60px;
    }

    .TextType{
      font-style: italic;
    }

    `
  ]
})
export class TestClassbindingComponent implements OnInit {

  public textColor="TextColor";
  public textSize="TextSize";
  public textType="TextType";

  public required=true;

  public Group = {
    "TextColor" : this.required,
    "TextSize" : this.required,
    "TextType" : this.required
  }

  constructor() { }

  ngOnInit(): void {
  }

}
