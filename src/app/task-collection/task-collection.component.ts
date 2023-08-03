import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoModel } from '../to-do/to-do.model';

@Component({
  selector: 'app-task-collection',
  templateUrl: './task-collection.component.html',
  styleUrls: ['./task-collection.component.css']
})
export class TaskCollectionComponent implements OnInit {

  @Input() tasks : ReadonlyArray<ToDoModel>[] = []
  @Output() remove = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
