import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/users/data-access/user.model';

export const loadUsers = createAction(
  '[Users] Load'
);
export const loadUsersSuccess = createAction(
  '[Users] Load Success',
  props<{ users: User[] }>()
);
export const loadUsersError = createAction(
  '[Users] Load Error'
);

export const addUser = createAction(
  '[Users] Add one',
  props<{ user: Pick<User, 'email' | 'password' | 'firstName' | 'lastName' | 'age'> }>()
);
export const addUserSuccess = createAction(
  '[Users] Add one success',
  props<{ user: User }>()
);
export const addUserError = createAction(
  '[Users] Add one error'
);

export const updateUser = createAction(
  '[Users] Update one',
  props<{ id: number; changes: Partial<User> }>()
);
export const updateUserSuccess = createAction(
  '[Users] Update one success',
  props<{ id: number; changes: Partial<User> }>()
);
export const updateUserError = createAction(
  '[Users] Update one error'
);

export const deleteUser = createAction(
  '[Users] Delete one',
  props<{ id: number }>()
);
export const deleteUserSuccess = createAction(
  '[Users] Delete one success',
  props<{ id: number }>()
);
export const deleteUserError = createAction(
  '[Users] Delete one error'
);

export const loadEditedUser = createAction(
  '[Users] Load Edited User',
  props<{ id: number }>()
);
export const loadEditedUserSuccess = createAction(
  '[Users] Load Edited User Success',
  props<{ user: User }>()
);
export const loadEditedUserError = createAction(
  '[Users] Load Edited User Error'
);
