import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "./task.state";

const getTaskState = createFeatureSelector<TasksState>('newtask')

export const getTasks = createSelector(getTaskState, (state)=>{
    // console.log(state.tasks, "in task selector");
    
    return state.tasks;
})