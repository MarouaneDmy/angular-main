import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Article } from 'src/app/articles/data-access/article.model';
import { ArticlesService } from 'src/app/articles/data-access/articles.service';
import * as ArticlesActions from './articles.actions';

@Injectable()
export class ArticlesEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.loadArticles),
      switchMap(() => {
        return this.articlesService.getArticles().pipe(
          map(articles => {
            return ArticlesActions.loadArticlesSuccess({ articles });
          }),
          catchError(() => {
            return of(ArticlesActions.loadArticlesError());
          })
        );
      })
    )
  );

  addArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.addArticle),
      switchMap((action) => {
        return this.articlesService.addArticle(action.article).pipe(
          map((res) => {
            return ArticlesActions.addArticleSuccess({ article: res as Article });
          }),
          catchError(() => {
            return of(ArticlesActions.addArticleError());
          })
        );
      })
    )
  );

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.updateArticle),
      switchMap((action) => {
        return this.articlesService.updateArticle(action.id, action.changes).pipe(
          map(() => {
            return ArticlesActions.updateArticleSuccess(action);
          }),
          catchError(() => {
            return of(ArticlesActions.updateArticleError());
          })
        );
      })
    )
  );
  
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.deleteArticle),
      switchMap((action) => {
        return this.articlesService.deleteArticle(action.id).pipe(
          map(() => {
            return ArticlesActions.deleteArticleSuccess(action);
          }),
          catchError(() => {
            return of(ArticlesActions.deleteArticleError());
          })
        );
      })
    )
  );

  loadEditedArticles = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.loadEditedArticle),
      switchMap(({ id }) => {
        return this.articlesService.getArticle(id).pipe(
          map(article => {
            return ArticlesActions.loadEditedArticleSuccess({ article });
          }),
          catchError(() => {
            return of(ArticlesActions.loadEditedArticleError());
          })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly articlesService: ArticlesService
  ) { }

}


