import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap, tap } from 'rxjs';
import { User, UsersService } from 'src/app/users/data-access/users.service';

interface UsersState {
  users: User[];
  loading: boolean;
}

@Injectable()
export class UsersStore extends ComponentStore<UsersState> {

  constructor(private readonly usersService: UsersService) {
    super({ users: [], loading: false });
  }

  public users$: Observable<User[]> = this.select(state => state.users);
  public loading$: Observable<boolean> = this.select(state => state.loading);

  public getUsers = this.effect(($) => $.pipe(
    tap(() => this.setState({users: [], loading: true })),
    switchMap(() =>
      this.usersService.getUsers().pipe(
        tap({
          next: (users) => this.setState({ users, loading: false }),
          error: () => this.setState({ users: [], loading: false }),
        }),
        catchError(() => EMPTY)
      )
    )
  ));

}
