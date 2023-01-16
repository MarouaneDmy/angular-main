import { adapter, selectUsersState } from './users.reducer';
import { createSelector } from '@ngrx/store';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(selectUsersState);

export const selectLoadingState = createSelector(
  selectUsersState,
  state => state.isLoading
);

export const selectErrorState = createSelector(
  selectUsersState,
  state => state.isError
);

export const selectEditedUser = createSelector(
  selectUsersState,
  state => state.editedUser
);
