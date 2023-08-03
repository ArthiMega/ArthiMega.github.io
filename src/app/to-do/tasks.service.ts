import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToDoModel } from './to-do.model';
@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Array<ToDoModel>> {
    return this.http
      .get<{ items: ToDoModel[] }>(
        'http://localhost:3000/allTasks'
      )
      .pipe(map((tasks) => tasks.items || []));
  }
}