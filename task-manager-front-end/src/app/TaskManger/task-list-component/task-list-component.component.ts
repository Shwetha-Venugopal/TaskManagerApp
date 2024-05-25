import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskManagerService } from 'src/app/services/task-manager.service';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent {
  taskList:any
  constructor(public TaskManagerService:TaskManagerService,public router:Router){}
  ngOnInit(){
    this.getList()
  }

  getList(){
    this.TaskManagerService.getTaskManagerList().subscribe((el)=>{
      this.taskList=el
    })

  }

  addTask(){
    this.router.navigate(['task/add'])
    this.TaskManagerService.taskData=''
  }

  editRowData(eve:any){
    this.router.navigate(['task/edit'])
    this.TaskManagerService.taskData=eve

  }

  deleteRowData(eve:any){
   this.TaskManagerService.deleteTaskList(eve.id).subscribe((el)=>{
    console.log(el)
    this.getList()
   })
  }



}
