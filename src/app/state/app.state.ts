import { CounterState, TasksState } from "./task.state";
import { counterReducer, taskReducer, taskReducer1 } from "./todo.reducer";

export interface AppState{
    counter: CounterState,
    task:TasksState
}

export const appReducer = {
    counter: counterReducer,
    task:taskReducer1
}