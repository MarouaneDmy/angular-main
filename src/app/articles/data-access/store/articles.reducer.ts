import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArticlesActions from './articles.actions';
import { Article } from 'src/app/articles/data-access/article.model';

export interface ArticlesState extends EntityState<Article> {
  isLoading: boolean;
  isError: boolean;
  editedArticle: Article | null;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  sortComparer: false
});

export const initialArticlesState: ArticlesState = adapter.getInitialState({
  isLoading: false,
  isError: false,
  editedArticle: null
});

const articlesReducer = createReducer(
  initialArticlesState,
  on(ArticlesActions.loadArticles, state => ({ ...state, isLoading: true })),
  on(ArticlesActions.loadArticlesSuccess, (state, { articles }) => {
    return adapter.addMany(articles, {
      ...initialArticlesState,
      isLoading: false,
      isError: false,
    });
  }),
  on(ArticlesActions.loadArticlesError, state => ({
    ...state,
    isLoading: false,
    isError: true,
  })),
  on(ArticlesActions.addArticle, (state) => {
    return { ...state, isLoading: true };
  }),
  on(ArticlesActions.addArticleSuccess, (state, { article }) => {
    return adapter.addOne(article, { ...state, isLoading: false, isError: false });
  }),
  on(ArticlesActions.addArticleError, (state) => {
    return { ...state, isLoading: false, isError: true };
  }),
  on(ArticlesActions.updateArticle, (state) => {
    return { ...state, isLoading: true };
  }),
  on(ArticlesActions.updateArticleSuccess, (state, { id, changes }) => {
    return adapter.updateOne({ id, changes }, { ...state, isLoading: false, isError: false });
  }),
  on(ArticlesActions.updateArticleError, (state) => {
    return { ...state, isLoading: false, isError: true };
  }),
  on(ArticlesActions.deleteArticle, (state) => {
    return { ...state, isLoading: true };
  }),
  on(ArticlesActions.deleteArticleSuccess, (state, { id }) => {
    return adapter.removeOne(id, { ...state, isLoading: false, isError: false });
  }),
  on(ArticlesActions.deleteArticleError, (state) => {
    return { ...state, isLoading: false, isError: true };
  }),
  on(ArticlesActions.loadEditedArticle, (state) => {
    return { ...state, isLoading: true, isError: false, editedArticle: null };
  }),
  on(ArticlesActions.loadEditedArticleSuccess, (state, { article }) => {
    return { ...state, isLoading: false, isError: false, editedArticle: article };
  }),
  on(ArticlesActions.loadEditedArticleError, (state) => {
    return { ...state, isLoading: false, isError: true };
  }),
);

export function reducer(state: ArticlesState | undefined, action: Action) {
  return articlesReducer(state, action);
}

export const selectArticlesState = createFeatureSelector<ArticlesState>(
  'articles'
);
