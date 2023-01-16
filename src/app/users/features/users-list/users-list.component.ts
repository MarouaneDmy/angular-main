import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { filter, Observable, of, tap } from 'rxjs';
import { selectAll } from '../../data-access/store';
import {
  addUser,
  deleteUser,
  loadUsers,
} from '../../data-access/store/users.actions';
import { UsersState } from '../../data-access/store/users.reducer';
import { User } from '../../data-access/user.model';
import { UsersService } from '../../data-access/users.service';
import { UsersStore } from '../../data-access/users.store';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import {SplitButtonModule} from 'primeng/splitbutton';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [UsersStore],
})
export class UsersListComponent implements OnInit {
  public users$: Observable<User[]> = this.store.pipe(select(selectAll));;
  public loading$ = this.usersStore.loading$;
  public dialogCloseEvent$: Observable<
    Pick<User, 'firstName' | 'lastName' | 'age'  | 'email' | 'password'>
  > = of(null);

  constructor(
    private readonly store: Store<UsersState>,
    private readonly usersStore: UsersStore,
    private readonly dialogService: DialogService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  public trackByUser(i: number, _item: User): number {
    return i;
  }

  public onDelete(id: number): void {
    this.store.dispatch(deleteUser({ id }));
  }

  public onAdd(): void {
    const dialog: DynamicDialogRef = this.dialogService.open(
      AddUserDialogComponent,
      {
        header: 'Ajouter un utilisateur',
        width: '70%',
      }
    );
    this.dialogCloseEvent$ = dialog.onClose.pipe(
      filter((user) => !!user),
      tap((user: Pick<User,  'email' | 'password' |  'firstName' | 'lastName' | 'age'>) => {
        this.store.dispatch(addUser({ user }));
      })
    );
  }
}
