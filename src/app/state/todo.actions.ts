import { Action } from '@ngrx/store';
import { createActionGroup, props } from '@ngrx/store';
import { ToDoModel } from '../to-do/to-do.model';
export const AddTaskConst = '[Add Task] Component'
export const RemoveTaskConst = '[Remove Task] Component'

export const TodoActions = createActionGroup({
  source: 'Todos',
  events: {
    'Add Task': props<{ taskId: string }>(),
    'Remove Task': props<{ taskId: string }>(),
  },
});

export const TodoApiActions = createActionGroup({
  source: 'Todo API',
  events: {
    'Retrieved Todo List': props<{ tasks: ReadonlyArray<ToDoModel> }>(),
  },
});

export class AddTask implements Action {
  readonly type = AddTaskConst;
  constructor(public data : number){}
}

export class RemoveTask implements Action {
  readonly type = RemoveTaskConst;
  constructor(public id : number){}
}

export type Actions = AddTask | RemoveTask