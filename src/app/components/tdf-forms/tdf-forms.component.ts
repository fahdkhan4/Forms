import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-forms',
  templateUrl: './tdf-forms.component.html',
  styleUrls: ['./tdf-forms.component.scss']
})
export class TDFFormsComponent implements OnInit {

  constructor() { }
  review:any = '' 
  genders:any = ["Male","Female"]
 
  onSubmit(form:NgForm){
    console.log(form.value);
  }

  ngOnInit(): void {
  }

}
