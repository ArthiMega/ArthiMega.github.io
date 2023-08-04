import { createReducer, on } from '@ngrx/store';
import * as TaskAction  from './todo.actions'
import { TodoApiActions } from './todo.actions';
import { ToDoModel } from '../to-do/to-do.model';

export const initialState: ReadonlyArray<ToDoModel > = [];
const InitialState : ToDoModel = {
  taskId:101,
  taskDetails: {
      task:"eating",
      status:true,
      taskHandlers: ["Arthi", "kum", "merlins", "teacher","neesha"]
  }
}

export const taskReducer = createReducer(
  initialState,
  on(TodoApiActions.retrievedTodoList, (_state, { tasks }) => tasks)
);

export function TodoReducers(state:ToDoModel[] = [InitialState], action: TaskAction.Actions){
  switch(action.type){
    case TaskAction.AddTaskConst:
      return [...state, action.data]
    default:
      return state;
  }
}
