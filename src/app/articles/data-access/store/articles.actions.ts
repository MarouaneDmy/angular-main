import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/articles/data-access/article.model';

export const loadArticles = createAction(
  '[Articles] Load'
);
export const loadArticlesSuccess = createAction(
  '[Articles] Load Success',
  props<{ articles: Article[] }>()
);
export const loadArticlesError = createAction(
  '[Articles] Load Error'
);

export const addArticle = createAction(
  '[Articles] Add one',
  props<{ article: Pick<Article, 'title' | 'body'> }>()
);
export const addArticleSuccess = createAction(
  '[Articles] Add one success',
  props<{ article: Article }>()
);
export const addArticleError = createAction(
  '[Articles] Add one error'
);

export const updateArticle = createAction(
  '[Articles] Update one',
  props<{ id: number; changes: Partial<Article> }>()
);
export const updateArticleSuccess = createAction(
  '[Articles] Update one success',
  props<{ id: number; changes: Partial<Article> }>()
);
export const updateArticleError = createAction(
  '[Articles] Update one error'
);

export const deleteArticle = createAction(
  '[Articles] Delete one',
  props<{ id: number }>()
);
export const deleteArticleSuccess = createAction(
  '[Articles] Delete one success',
  props<{ id: number }>()
);
export const deleteArticleError = createAction(
  '[Articles] Delete one error'
);

export const loadEditedArticle = createAction(
  '[Articles] Load Edited Article',
  props<{ id: number }>()
);
export const loadEditedArticleSuccess = createAction(
  '[Articles] Load Edited Article Success',
  props<{ article: Article }>()
);
export const loadEditedArticleError = createAction(
  '[Articles] Load Edited Article Error'
);