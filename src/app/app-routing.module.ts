import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TDFFormsComponent } from './components/tdf-forms/tdf-forms.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


const routes: Routes = [
  {path:'TDF',component:TDFFormsComponent},
  {path:'Reactive',component:ReactiveFormsComponent},
  {path:'',component:TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
