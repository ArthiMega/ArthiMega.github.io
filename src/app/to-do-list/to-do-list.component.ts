import { Component, OnInit } from '@angular/core';
import { AppState } from '../state/app.state';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { Store } from '@ngrx/store';
import { getTasks } from '../state/task.selector';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  dataSource:any
  tasks$!: Observable<Task[]>
  displayedColumns: string[]= ["id","taskName", "taskOwner", "actions"]

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(getTasks).subscribe(
      data=> this.dataSource = data
    )
  }

}
