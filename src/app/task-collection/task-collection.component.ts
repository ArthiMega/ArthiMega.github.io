import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ToDoModel } from '../to-do/to-do.model';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/task.state';
import { getCounte } from '../state/counter.selector';

@Component({
  selector: 'app-task-collection',
  templateUrl: './task-collection.component.html',
  styleUrls: ['./task-collection.component.css']
})
export class TaskCollectionComponent implements OnInit, OnDestroy {
  taskList1: any
  @Input() tasks: ReadonlyArray<ToDoModel>[] = []
  @Output() remove = new EventEmitter()
  @Input() taskList: any;

  counterSubscription!: Subscription
  counter!: number
  counter$!: Observable<number>;

  constructor(private store: Store<{ counter: CounterState, task: { task: string }, }>) { }

  ngOnInit() {
    this.counter$ = this.store.select(getCounte)
    this.counterSubscription = this.store
      .select(getCounte)
      .subscribe(data => {
        console.log(" in Counter subscription");
        this.counter = data
      })
    console.log(this.counter$);
    this.store.select('task').subscribe(data => {
      this.taskList1 = data.task
      console.log("In Tassk Subscription");
    })

  }
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

}
