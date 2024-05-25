import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, catchError, combineLatest, concat, debounceTime, elementAt, filter, from, interval, map, merge, of, reduce, switchMap } from 'rxjs';
import { TaskManagerService } from './services/task-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputDataToChild = 'Data from parent component';
  title = 'angular-practise';
  list=[1,2,3,4,5]
  
  submited:boolean=false
  studentForm: FormGroup;
  constructor(public fb:FormBuilder,public taskMangerService:TaskManagerService){
    this.studentForm=this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      age:['', Validators.required],

    })
    
      
    
  }
  ngOnInit(){
    this.taskMangerService.getTaskManagerList().subscribe((val)=>{
      console.log("val", val)
    })
  }

  
  }


  

 
 
   
    



    


   

  




