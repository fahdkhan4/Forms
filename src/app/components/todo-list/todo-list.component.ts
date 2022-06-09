
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  updated_value:any = ''

  todo_list!: FormGroup;
  checkbox_bool:any = false;
  edit_activity:any = true;
  value:any;
  edit_button:any = "Edit"
  activities:any=[]
  local_array:Array<String> =JSON.parse(localStorage.getItem('array') || '[]');

  constructor() {

  }

  disable_SubmitButton(){
    if(this.todo_list.get('user_detail')?.valid){
      return false
    }
    return true;
  }

  onSubmit(){
    this.value = this.todo_list.get('user_detail')?.value;

    if(this.local_array.length == 0 || this.local_array == null){
      this.activities.push(this.value)
      localStorage.setItem('array',JSON.stringify(this.activities))
      this.activities.splice(0,1);
    }
    else{
      this.local_array.push(this.value)
      localStorage.setItem('array',JSON.stringify(this.local_array))
    }

    this.local_array = JSON.parse(localStorage.getItem('array') || '[]');
    this.todo_list.get('user_detail')?.setValue('')
  }

  onDetails_Check(){
    if(this.local_array.length == 0){
      return true;
    }
    return false;
  }

  delete_item(value:any){
    var index:any = this.local_array.indexOf(value);
    this.local_array.splice(index,1)
    localStorage.setItem('array',JSON.stringify(this.local_array))
  }

  edit_Or_Done(value:any,value2:any){
    if(this.edit_button === "Edit"){
      this.edit_activity = false
      this.edit_button = "Done"
    }
    else{
      this.edit_activity = true;
      this.edit_button = "Edit"
      this.edit_data(value,value2);
    }
  }

  edit_data(value:any,value2:any){
    var index:any = this.local_array.indexOf(value)
    this.local_array[index] = value2;
    localStorage.setItem('array',JSON.stringify(this.local_array))
  }

  ngOnInit(): void {
    this.todo_list = new FormGroup({
      'user_detail': new FormControl(null,[Validators.required]),
    })

  }

}
