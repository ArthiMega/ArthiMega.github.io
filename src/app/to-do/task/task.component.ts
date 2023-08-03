import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoModel } from '../to-do.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() tasks: ReadonlyArray<ToDoModel> = []
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
