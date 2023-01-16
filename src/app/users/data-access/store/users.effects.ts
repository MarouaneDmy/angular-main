import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/users/data-access/user.model';
import { UsersService } from 'src/app/users/data-access/users.service';
import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      switchMap(() => {
        console.log("oui");
        return this.usersService.getUsers().pipe(
          map((users) => {
            return UsersActions.loadUsersSuccess({ users });
          }),
          catchError(() => {
            return of(UsersActions.loadUsersError());
          })
        );
      })
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.addUser),
      switchMap((action) => {
        return this.usersService.addUser(action.user).pipe(
          map((res) => {
            return UsersActions.addUserSuccess({ user: res as User });
          }),
          catchError(() => {
            return of(UsersActions.addUserError());
          })
        );
      })
    )
  );

  // updateUser$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(UsersActions.updateUser),
  //     switchMap((action) => {
  //       return this.usersService.updateUser(action.id, action.changes).pipe(
  //         map(() => {
  //           return UsersActions.updateUserSuccess(action);
  //         }),
  //         catchError(() => {
  //           return of(UsersActions.updateUserError());
  //         })
  //       );
  //     })
  //   )
  // );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.deleteUser),
      switchMap((action) => {
        return this.usersService.deleteUser(action.id).pipe(
          map(() => {
            return UsersActions.deleteUserSuccess(action);
          }),
          catchError(() => {
            return of(UsersActions.deleteUserError());
          })
        );
      })
    )
  );

  loadEditedUsers = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadEditedUser),
      switchMap(({ id }) => {
        return this.usersService.getUser(id).pipe(
          map((user) => {
            return UsersActions.loadEditedUserSuccess({ user });
          }),
          catchError(() => {
            return of(UsersActions.loadEditedUserError());
          })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UsersService
  ) {}
}
