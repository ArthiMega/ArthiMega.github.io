import { Component, OnInit } from '@angular/core';
import { AppState } from '../state/app.state';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { Store } from '@ngrx/store';
import { getTasks } from '../state/task.selector';
import { deleteTask } from '../new-ngrx/action/task.action';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  dataSource:any
  tasks$!: Observable<Task[]>
  displayedColumns: string[]= ["id","taskName", "taskOwner", "actions"]

  onDelete(id:string){
    if(confirm('Are you sure you you want to delete')){
      console.log('task completed!!!');
      this.store.dispatch(deleteTask({id}))
    }
  }

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(getTasks).subscribe(
      data=> this.dataSource = data
    )
  }

}
