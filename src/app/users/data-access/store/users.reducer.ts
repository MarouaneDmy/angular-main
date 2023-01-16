import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as UsersActions from './users.actions';
import { User } from 'src/app/users/data-access/user.model';

export interface UsersState extends EntityState<User> {
  isLoading: boolean;
  isError: boolean;
  editedUser: User | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: false
});

export const initialUsersState: UsersState = adapter.getInitialState({
  isLoading: false,
  isError: false,
  editedUser: null
});

const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.loadUsers, state => ({ ...state, isLoading: true })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => {
    return adapter.addMany(users, {
      ...initialUsersState,
      isLoading: false,
      isError: false,
    });
  }),
  on(UsersActions.loadUsersError, state => ({
    ...state,
    isLoading: false,
    isError: true,
  })),
  on(UsersActions.addUser, (state) => {
    return { ...state, isLoading: true };
  }),
  on(UsersActions.addUserSuccess, (state, { user }) => {
    return adapter.addOne(user, { ...state, isLoading: false, isError: false });
  }),
  on(UsersActions.addUserError, (state) => {
    return { ...state, isLoading: false, isError: true };
  }),
  on(UsersActions.updateUser, (state) => {
    return { ...state, isLoading: true };
  }),
  on(UsersActions.updateUserSuccess, (state, { id, changes }) => {
    return adapter.updateOne({ id, changes }, { ...state, isLoading: false, isError: false });
  }),
  on(UsersActions.updateUserError, (state) => {
    return { ...state, isLoading: false, isError: true };
  }),
  on(UsersActions.deleteUser, (state) => {
    return { ...state, isLoading: true };
  }),
  on(UsersActions.deleteUserSuccess, (state, { id }) => {
    return adapter.removeOne(id, { ...state, isLoading: false, isError: false });
  }),
  on(UsersActions.deleteUserError, (state) => {
    return { ...state, isLoading: false, isError: true };
  }),
  on(UsersActions.loadEditedUser, (state) => {
    return { ...state, isLoading: true, isError: false, editedUser: null };
  }),
  on(UsersActions.loadEditedUserSuccess, (state, { user }) => {
    return { ...state, isLoading: false, isError: false, editedUser: user };
  }),
  on(UsersActions.loadEditedUserError, (state) => {
    return { ...state, isLoading: false, isError: true };
  }),
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}

export const selectUsersState = createFeatureSelector<UsersState>(
  'users'
);
