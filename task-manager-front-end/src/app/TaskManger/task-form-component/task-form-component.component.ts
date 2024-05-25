import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskManagerService } from 'src/app/services/task-manager.service';

@Component({
  selector: 'app-task-form-component',
  templateUrl: './task-form-component.component.html',
  styleUrls: ['./task-form-component.component.css']
})
export class TaskFormComponentComponent {
  taskForm:FormGroup
  taskData:any
  taskList: any;
  constructor(public fb:FormBuilder,public taskService:TaskManagerService,public router:Router){
    this.taskForm=this.fb.group({
      id:[],
      title:[],
      assignedTo:[],
      updatedAt:[],
      createdAt:[],
      dueDate:[],
      priority:[],
      status:[],
      description:[]

    })
  }

  ngOnInit(){
    this.getList()
    this.taskData=this.taskService.taskData
    console.log(this.taskData)
    this.taskForm.patchValue(this.taskData)
  }
  getList(){
    this.taskService.getTaskManagerList().subscribe((el)=>{
      this.taskList=el
    })

  }

  submitTaskForm(){
    if(this.taskForm.value.id===null){
      let formVal={...this.taskForm.value,id:this.taskList.length+1}
      console.log(formVal)
      this.taskService.saveTaskMangerTask(formVal).subscribe((res:any)=>{
        console.log(res)
        
        
      })
      this.cancelForm()
    }else{
      this.taskService.updateTaskManager(this.taskForm.value).subscribe((res)=>{
        console.log(res)
        this.cancelForm()
        
      })
      this.cancelForm()
    }
    
  }

  cancelForm(){
    this.router.navigate(['task'])
  }





}
