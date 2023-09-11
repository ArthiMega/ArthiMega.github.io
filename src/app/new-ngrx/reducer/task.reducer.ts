import { createReducer, on } from "@ngrx/store";
import { initialTaskState } from "src/app/state/task.state";
import { addTask, deleteTask, updateTask } from "../action/task.action";

const _taskReducer = createReducer(
    initialTaskState,
    on(addTask, (state, action) =>{
    let task = {...action.task}
    task.id = (state.tasks.length + 1).toString()
        return {
            ...state,
            tasks:[...state.tasks, task]
        }
    }),
    on(updateTask, (state, action) => {
        const updatedTasks = state.tasks.map((task)=>{
            return action.task.id === task.id ? action.task: task
        })
        return {
            ...state,
            tasks:updatedTasks
        }
    }),
    on(deleteTask, (state, {id})=>{
        const updatedTask = state.tasks.filter((task) =>{
            return task.id !== id;
        })
        return{
            ...state,
            tasks: updatedTask,
        };
    })
    );

export function newTaskReducer(state:any, action:any){
    return _taskReducer(state, action)
}