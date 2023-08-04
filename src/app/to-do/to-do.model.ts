// export interface ToDoModel {
//     taskId:number;
//     taskDetails: {
//         task:string;
//         status:boolean;
//         taskHandlers: Array<string>
//     }
// }

export interface ToDoModel {
    taskId:number|string;
    taskDetails: {
        task:string;
        status:boolean;
        taskHandlers: Array<string>
    }
}
