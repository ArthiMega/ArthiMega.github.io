import { Task } from "../models/task.model"

export const InitialState1 = {
    task: ["Eating"]
}

export interface CounterState {
    counter: number,
    lyrics: string
}

export const initialCounterState: CounterState = {
    counter: 0,
    lyrics: "un aluppa pathavan"
}

export interface TasksState {
    tasks: Task[]
}

export const initialTaskState: TasksState = {
    tasks: [
        {
            id:'1',
            taskName: "Codding",
            taskOwner: "Arthi"
        },
        {
            id:'2',
            taskName:"Eating",
            taskOwner:"Arthi"
        }
    ]
}