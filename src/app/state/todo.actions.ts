import { createActionGroup, props } from '@ngrx/store';
import { ToDoModel } from '../to-do/to-do.model';

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