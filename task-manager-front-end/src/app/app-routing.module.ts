import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponentComponent } from './TaskManger/task-list-component/task-list-component.component';
import { TaskFormComponentComponent } from './TaskManger/task-form-component/task-form-component.component';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'task'},
  {path:'task',component:TaskListComponentComponent},
  {path:'task/add',component:TaskFormComponentComponent},
  {path:'task/edit',component:TaskFormComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
