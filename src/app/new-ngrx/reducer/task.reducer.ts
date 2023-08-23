import { createReducer, on } from "@ngrx/store";
import { initialTaskState } from "src/app/state/task.state";
import { addTask } from "../action/task.action";

const _taskReducer = createReducer(
    initialTaskState,
    on(addTask, (state, action) =>{
    let task = {...action.task}
    task.id = (state.tasks.length + 1).toString()
        return {
            ...state,
            tasks:[...state.tasks, task]
        }
    })
    );

export function newTaskReducer(state:any, action:any){
    return _taskReducer(state, action)
}