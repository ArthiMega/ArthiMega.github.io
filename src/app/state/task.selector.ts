import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "./task.state";

const getTaskState = createFeatureSelector<TasksState>('newtask')

export const getTasks = createSelector(getTaskState, (state)=>{
    // console.log(state.tasks, "in task selector");
    return state.tasks;
})

export const getTasksById = createSelector(getTaskState, (state:any, props:any) => {
    console.log(props, "props"); // 1,2,3 ...
    return state.tasks.find((task:any) => task.id === props.id)
})