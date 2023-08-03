export interface ToDoModel {
    taskId:string;
    taskDetails: {
        task:string;
        status:boolean;
        taskHandlers: Array<string>
    }
}
