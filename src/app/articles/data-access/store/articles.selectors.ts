import { adapter, selectArticlesState } from './articles.reducer';
import { createSelector } from '@ngrx/store';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(selectArticlesState);

export const selectLoadingState = createSelector(
  selectArticlesState,
  state => state.isLoading
);

export const selectErrorState = createSelector(
  selectArticlesState,
  state => state.isError
);

export const selectEditedArticle = createSelector(
  selectArticlesState,
  state => state.editedArticle
);