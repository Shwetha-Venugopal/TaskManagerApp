import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponentComponent } from './TaskManger/task-list-component/task-list-component.component';
import { TaskDetailComponentComponent } from './TaskManger/task-detail-component/task-detail-component.component';
import { TaskFormComponentComponent } from './TaskManger/task-form-component/task-form-component.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponent,
    TaskDetailComponentComponent,
    TaskFormComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
