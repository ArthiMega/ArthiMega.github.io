import { createReducer, on } from '@ngrx/store';
import { TodoActions } from './todo.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(TodoActions.removeTask, (state, { taskId }) =>
    state.filter((id) => id !== taskId)
  ),
  on(TodoActions.addTask, (state, { taskId }) => {
    if (state.indexOf(taskId) > -1) return state;

    return [...state, taskId];
  })
);