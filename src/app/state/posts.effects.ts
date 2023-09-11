import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../servises/api.service";
import { loadPostFailure, loadPostSuccess, lodtPost } from './post.action'
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class PostEffects {
    getPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(lodtPost),
            mergeMap(() => {
                return this.postService.getPosts().pipe(
                    map((data) => {
                        return loadPostSuccess({ posts: [data] });
                    }),
                    catchError((error) => of(loadPostFailure({ err: "dfgh" }))
                    )
                );
            })
        ))

    constructor(
        private actions$: Actions,
        private postService: ApiService
    ) { }
}


