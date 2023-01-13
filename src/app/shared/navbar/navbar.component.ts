import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User, UsersService } from '../../users/data-access/users.service';
import { AuthentificationService } from  '../../authentification/data-access/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[];

//   constructor(
//     private authentificationService: AuthentificationService,
//     private usersService: UsersService
// ) {
//     this.currentUser = this.authentificationService.currentUserValue;
// }

  ngOnInit() {
    this.items = [
      { label: 'StarterKit' },
      { label: 'Articles', icon: 'pi pi-fw pi-book', routerLink: ['/'] },
      { label: 'Users', icon: 'pi pi-fw pi-users', routerLink: ['/users'] },
      { label: 'Profil', icon: 'pi pi-fw pi-user-edit', routerLink: ['/'] },
    ];
  }

  // en attendant d'avoir le vrai currentUser ensuite => currentUser : User;
  currentUser = {
    email: 'toto.dupond@gmail.com',
    password: 'password1234',
    firstName: 'Toto',
    lastName: 'Dupond',
    age: 10,
  };

  connected = false;
}
