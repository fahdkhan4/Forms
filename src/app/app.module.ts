import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TDFFormsComponent } from './components/tdf-forms/tdf-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TDFFormsComponent,
    ReactiveFormsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
