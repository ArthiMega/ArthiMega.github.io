import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask } from '../new-ngrx/action/task.action';
import { Task } from '../models/task.model';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskDetailsForm = this.fb.group({
    taskName: ['', Validators.required],
    taskOwner: ['', Validators.required]
  })
  taskOwnerControl = this.taskDetailsForm.get('taskOwner')
  taskNameControl = this.taskDetailsForm.get('taskName')


  onSubmit() {
    if(!this.taskDetailsForm.valid){
      return;
    }
    if(this.taskDetailsForm.value.taskName && this.taskDetailsForm.value.taskOwner){
      const task:Task = {
        taskName: this.taskDetailsForm.value.taskName,
        taskOwner:this.taskDetailsForm.value.taskOwner
      }
      console.log(this.taskDetailsForm);
      
    this.store.dispatch(addTask({task}))
    }
    console.log(this.taskDetailsForm);
  }
  getNameErrorMessage() {
    return this.taskNameControl?.hasError('required') ? "Task Name is required" : ""
  }
  getOwnerErrorMessage() {
    return this.taskOwnerControl?.hasError('required') ? "Task Owner name is required" : ""
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

}
