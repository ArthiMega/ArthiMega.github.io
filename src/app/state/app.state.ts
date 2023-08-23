import { newTaskReducer } from "../new-ngrx/reducer/task.reducer";
import { CounterState, TasksState } from "./task.state";
import { counterReducer, taskReducer1 } from "./todo.reducer";

export interface AppState{
    counter: CounterState,
    task:TasksState
}

export const appReducer = {
    counter: counterReducer,
    task:taskReducer1,
    newtask:newTaskReducer
}