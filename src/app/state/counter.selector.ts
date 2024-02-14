import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./task.state";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounte = createSelector(getCounterState,(state) =>{
    return state.counter;
})

export const getLyrics = createSelector(getCounterState, (state)=>{
    return state.lyrics;
})