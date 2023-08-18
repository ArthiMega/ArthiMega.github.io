import { createReducer } from "@ngrx/store";
import { initialTaskState } from "src/app/state/task.state";

const _taskReducer = createReducer(initialTaskState,);

export function newTaskReducer(){
    // return _taskReducer()
}