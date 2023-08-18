import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    if(!this.taskDetailsForm.valid)
    console.log(this.taskDetailsForm);
  }
  getNameErrorMessage() {
    return this.taskNameControl?.hasError('required') ? "Task Name is required" : ""
  }
  getOwnerErrorMessage() {
    return this.taskOwnerControl?.hasError('required') ? "Task Owner name is required" : ""
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
