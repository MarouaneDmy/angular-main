import { Component, OnInit } from '@angular/core';
import { UsersStore } from 'src/app/users/data-access/users.store';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [UsersStore]
})
export class UsersListComponent implements OnInit {

  public users$ = this.usersStore.users$;
  public loading$ = this.usersStore.loading$;

  constructor(
    private readonly usersStore: UsersStore
  ) { }

  ngOnInit(): void {
    this.usersStore.getUsers();
  }

}
