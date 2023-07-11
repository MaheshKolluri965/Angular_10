import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormArray, Form } from '@angular/forms';
import { nameValidator, nameValidators } from '../shared_validations/usernameValidator';
import { passwordValidator } from '../shared_validations/password.validator';
import { FormRegisterService } from '../form-register.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  /* 
  registrationForm = new FormGroup({
    userName : new FormControl('Mahesh'),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl('')
    })
  });
  */
  constructor(private _myFB: FormBuilder, private _regServer: FormRegisterService) { }

  /*
  registrationForm = this._myFB.group({
    //userName: ['', Validators.required],
    
    userName: ['', [Validators.required, Validators.minLength(2), nameValidator, nameValidators(/Mahesh/),
                    nameValidators(/password/), nameValidators(/MJ/)]],
    email: [''],
    subcribe: [false],
    password: [''],
    confirmPassword: [''],
    address: this._myFB.group({
      city: [''],
      state: [''],
      pincode: ['']
    })
  }, {validator: passwordValidator});
  */
 
  registrationForm: any;
  ngOnInit():void {
    this.registrationForm = this._myFB.group({
      //userName: ['', Validators.required],
      
      userName: ['', [Validators.required, Validators.minLength(2), nameValidator, nameValidators(/Mahesh/),
                      nameValidators(/password/), nameValidators(/MJ/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this._myFB.group({
        city: [''],
        state: [''],
        pincode: ['']
      }),
      alternativeEmails: this._myFB.array([])
    }, {validator: passwordValidator});

    this.registrationForm.get('subscribe').valueChanges.subscribe((checkedValue: any) => {
      const email = this.registrationForm.get('email');
      
      if(checkedValue){
        email.setValidators(Validators.required);   
      }
      else{
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
  }

  get userName(){
    return this.registrationForm.get('userName');
  }

  get register(){
    return this.registrationForm.get('confirmPassword');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternativeEmails') as FormArray;
  }

  addAlternateEmails(){
    this.alternateEmails.push(this._myFB.control(''));
  }

  displayValues(){
    this.registrationForm.patchValue({
      userName: 'MJ',
      password: 'test',
      confirmPassword:'test',
      address: {
        city: 'test city',
        state: 'test state',
        pincode: '12345'
      }
    })
      /*
    this.registrationForm.setValue({
      userName: 'MJ',
      password: 'test',
      confirmPassword:'test',
      address: {
        city: 'test city',
        state: 'test state',
        pincode: '12345'
      }
    })
    */
  }

  onSubmit(registrationForm: any){
    this._regServer.enroll(this.registrationForm.value).subscribe(
      data => console.log("sucess", data)
    )

  }

}
