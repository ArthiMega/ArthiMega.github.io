import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ToDoModel } from '../to-do/to-do.model';

export const selectTasks = createFeatureSelector<ReadonlyArray<ToDoModel>>('tasks');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectTaskCollection = createSelector(
  selectTasks,
  selectCollectionState,
  (tasks, collection) => {
    return collection.map((id) => tasks.find((task) => task.taskId === id)!);
  }
);