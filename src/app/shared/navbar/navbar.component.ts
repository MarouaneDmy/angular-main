import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { User, UsersService } from '../../users/data-access/users.service';
import { AuthentificationService } from '../../authentification/data-access/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[];
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthentificationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  ngOnInit() {
    this.items = [
      { label: 'StarterKit', routerLink: ['/'] },
      { label: 'Articles', icon: 'pi pi-fw pi-book', routerLink: ['/'] },
      { label: 'Users', icon: 'pi pi-fw pi-users', routerLink: ['/users'] },
      {
        label: 'Profil',
        icon: 'pi pi-fw pi-user-edit',
        routerLink: ['/profil'],
      },
    ];
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/authentification']);
  }
}
