import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { getTasksById } from '../state/task.selector';
import { Task } from '../models/task.model';
import { Subscription } from 'rxjs';
import { updateTask } from '../new-ngrx/action/task.action';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnDestroy {
  task!: Task;
  taskDetailsForm!: FormGroup;
  taskSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.taskDetailsForm = this.fb.group({
      taskName: [null, Validators.required],
      taskOwner: [null, Validators.required]
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.taskSubscription = this.store
        .select(getTasksById, { id })
        .subscribe((data) => {
          this.task = data;
          this.updateFormWithTaskData();
        });
    });
  }

  updateFormWithTaskData() {
    this.taskDetailsForm.patchValue({
      taskName: this.task.taskName,
      taskOwner: this.task.taskOwner
    });
  }

  onUpdate() {
    const  taskName = this.taskDetailsForm.value.taskName
    const taskOwner = this.taskDetailsForm.value.taskOwner    

    const task:Task = {
      id:this.task.id,
      taskName,
      taskOwner
    }

    this.store.dispatch(updateTask({ task }))
    this.router.navigate(['to-do'])
  }

  ngOnDestroy() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
}
