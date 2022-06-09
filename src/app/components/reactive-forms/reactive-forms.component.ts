import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  signup!:FormGroup;
  genders:any = ["Male","Female"]
  constructor() { }

  onSubmit(){
    console.log(this.signup.value);
  }

  ngOnInit(): void {
    this.signup = new FormGroup({
      'username' : new FormControl(null,Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'address_data':new FormGroup({
        'address' : new FormControl(null,[Validators.required]),
        'postalCode': new FormControl(null,[Validators.required]),
        'Area':new FormControl(null,Validators.required)
      }),
      'gender' : new FormControl('Male'),
    })
  }

}
