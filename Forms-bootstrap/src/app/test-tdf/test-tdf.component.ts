import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormRegisterService } from '../form-register.service';


@Component({
  selector: 'app-test-tdf',
  templateUrl: './test-tdf.component.html',
  styleUrls: ['./test-tdf.component.css']
})
export class TestTdfComponent implements OnInit {

  course = ['Angular', 'React', 'Vue', 'Bootstrap', 'MongoDB', "10th class"];

  userModel = new User('', 'mahesh@gmail.com', 1234557889, 'male', 'default', 99, true);

  courseHasError = true;
  ValidateCourse(value: any){
    if(value === 'default'){
      this.courseHasError = true;
    }
    else{
      this.courseHasError = false
    }
  }


  submitted = false;
  errorMsg = "";

  onSubmit(){
    //console.log(this.userModel);
    this.submitted = true;
    this._registerService.enroll(this.userModel).subscribe({
      next: (data) => console.log('Success!', data),
      //error: (error) => console.error('Error', error)
      error: (error) => this.errorMsg = error.statusText
    }
    );
  }

  constructor( private _registerService: FormRegisterService) { }

  ngOnInit(): void {
  }

}
