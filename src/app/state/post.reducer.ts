import { createReducer, on } from "@ngrx/store";
import { loadPostSuccess } from "./post.action";

const _postReducer = createReducer(
    {},
    on(loadPostSuccess, (action:any, state:any) =>{
        console.log(action);
        return {
            ...state, 
            action,
        }
        
    })
)

export function postReducer (state:any, action:any){
    return _postReducer(state, action)
}