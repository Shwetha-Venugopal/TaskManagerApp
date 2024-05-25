import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor(private http:HttpClient) { }


  getTaskManagerList(){
    return this.http.get('http://localhost:8000/api/taskManagerList/')
  }
}
