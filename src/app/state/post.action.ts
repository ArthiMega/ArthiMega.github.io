import {createAction, props} from '@ngrx/store'
export const LOAD_POST = '[posts page] load post';
export const LOAD_POST_SUCCESS = '[post page] load page success'
export const LOAD_POST_FAILURE = '[post page] load page failure'


export const lodtPost = createAction(
    LOAD_POST
)

export const loadPostSuccess = createAction(
    LOAD_POST_SUCCESS,
    props<{posts:any[]}>()
)

export const loadPostFailure = createAction(
    LOAD_POST_FAILURE,
    props<{err:any}>()
)
