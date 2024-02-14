
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
  constructor(public data: number) { }
}

export class RemoveTask implements Action {
  readonly type = RemoveTaskConst;
  constructor(public id: number) { }
}

export type Actions = AddTask | RemoveTask

//wertyuiop[poiuytrewqwertyghuop[hgfdsadfghjkl;lkjhgfdsasdfghjklkjhgfdsasdfghjkljhgasdfuiop-----------------------------------]]

import { createAction } from "@ngrx/store";

export const add = createAction('add')
export const remove = createAction('remove')
export const reset = createAction('reset')

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const reset1 = createAction('reset')

export const costonIncrement = createAction(
  'customincrement',
   props<{count:number}>()
);

export const editeText = createAction(
  'customedit'
)