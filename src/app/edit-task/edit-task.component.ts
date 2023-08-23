import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {


  taskDetailsForm = this.fb.group({
    taskName: ['', Validators.required],
    taskOwner: ['', Validators.required]
  })
  taskOwnerControl = this.taskDetailsForm.get('taskOwner')
  taskNameControl = this.taskDetailsForm.get('taskName')

  getNameErrorMessage() {
    return this.taskNameControl?.hasError('required') ? "Task Name is required" : ""
  }
  getOwnerErrorMessage() {
    return this.taskOwnerControl?.hasError('required') ? "Task Owner name is required" : ""
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
