import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, Observable, switchMap, tap, of } from 'rxjs';
import { UsersService } from 'src/app/users/data-access/users.service';
import { User } from 'src/app/users/data-access/user.model';

interface UsersState {
  users: User[];
  loading: boolean;
}

@Injectable()
export class UsersStore extends ComponentStore<UsersState> {
  constructor(
    private readonly usersService: UsersService,
    private readonly actions$: Actions
  ) {
    super({ users: [], loading: false });
  }

  public users$: Observable<User[]> = this.select((state) => state.users);
  public loading$: Observable<boolean> = this.select((state) => state.loading);
}
