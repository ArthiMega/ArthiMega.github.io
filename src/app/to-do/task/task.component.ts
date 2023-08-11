import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoModel } from '../to-do.model';
import { Store } from '@ngrx/store';
import { add, remove, reset } from 'src/app/state/todo.actions';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() tasks: ReadonlyArray<ToDoModel> = []
  @Output() add = new EventEmitter()
  @Output() remove = new EventEmitter()
  @Output() recet = new EventEmitter()

  onAddTask(task:any){
    this.add.emit(task)
  }

  onRemoveTask(){
    this.remove.emit()
  }

  onRecetTask(){
    this.recet.emit()
  }
  addTask(){
    this.store.dispatch(add())
  }

  removeTask(){
    this.store.dispatch(remove())
  }

  resetTask(){
    this.store.dispatch(reset())
  }
  constructor( private store :Store<{task:{task:string}}>) { }

  ngOnInit() {
  }

}
