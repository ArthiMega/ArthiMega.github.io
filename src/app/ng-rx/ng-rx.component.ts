import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskService } from '../to-do/tasks.service';
import { selectTaskCollection, selectTasks } from '../state/todo.selectors';
import { TodoActions, TodoApiActions } from '../state/todo.actions';

@Component({
  selector: 'app-ng-rx',
  templateUrl: './ng-rx.component.html',
  styleUrls: ['./ng-rx.component.css']
})
export class NgRxComponent implements OnInit {

  tasks$ = this.store.select(selectTasks) 
  taskCollection$ = this.store.select(selectTaskCollection)

  onAdd(taskId: string){
    this.store.dispatch(TodoActions.addTask({taskId}))
  }

  onRemove(taskId: string){
    this.store.dispatch(TodoActions.removeTask({taskId}))
  }
  constructor(private store: Store, private taskservice : TaskService) { }

  ngOnInit() {
    this.taskservice
    .getTasks()
    .subscribe((tasks:any) =>{
      this.store.dispatch(TodoApiActions.retrievedTodoList({tasks}))
    })
  }

}
