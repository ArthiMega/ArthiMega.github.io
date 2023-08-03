import { createReducer, on } from '@ngrx/store';

import { TodoApiActions } from './todo.actions';
import { ToDoModel } from '../to-do/to-do.model';

export const initialState: ReadonlyArray<ToDoModel > = [];

export const taskReducer = createReducer(
  initialState,
  on(TodoApiActions.retrievedTodoList, (_state, { tasks }) => tasks)
);