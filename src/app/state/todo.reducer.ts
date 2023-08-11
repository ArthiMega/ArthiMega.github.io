import { createReducer, on } from '@ngrx/store';
import * as TaskAction  from './todo.actions'
import { TodoApiActions } from './todo.actions';
import { ToDoModel } from '../to-do/to-do.model';
import { InitialState1 } from './task.state';

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

export const todoreducer = createReducer(
  InitialState1,
  on(TaskAction.add, (state:any)=>{
    return {
      ...state,
      task:state.task
    }
  })
)

export function TodoReducers(state:ToDoModel[] = [InitialState], action: TaskAction.Actions){
  switch(action.type){
    case TaskAction.AddTaskConst:
      return [...state, action.data]
    default:
      return state;
  }
}
