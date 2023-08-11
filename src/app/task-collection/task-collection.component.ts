import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoModel } from '../to-do/to-do.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task-collection',
  templateUrl: './task-collection.component.html',
  styleUrls: ['./task-collection.component.css']
})
export class TaskCollectionComponent implements OnInit {
  taskList1 :any
  @Input() tasks : ReadonlyArray<ToDoModel>[] = []
  @Output() remove = new EventEmitter()
  @Input() taskList:any;

  constructor( private store: Store<{task:{task:string}}>) { }

  ngOnInit() {
    this.store.select('task').subscribe(data =>{
      this.taskList1 = data.task
    })
  }

}
