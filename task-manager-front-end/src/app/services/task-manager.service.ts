import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  taskData:any

  constructor(private http:HttpClient) { }


  getTaskManagerList(){
    return this.http.get('http://localhost:8000/api/taskManagerList/')
  }

  saveTaskMangerTask(taskManagerData:any){
    return this.http.post('http://localhost:8000/api/taskManagerList/',taskManagerData)
  }

  updateTaskManager(eve:any){
    return this.http.put(`http://localhost:8000/api/taskManagerList/${eve.id}`,eve)
  }

  deleteTaskList(id:any){
    return this.http.delete(`http://localhost:8000/api/taskManagerList/${id}`)
  }
}
