import { Component } from '@angular/core';
import { User, UsersService } from 'src/app/users/data-access/users.service';
import { AuthentificationService } from 'src/app/authentification/data-access/authentification.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent {
  currentUser: User;
  constructor(private authenticationService: AuthentificationService) {
    this.currentUser = this.authenticationService.currentUserValue;
    console.log(this.currentUser);
  }

  update() {
    console.log('En cours de modification');
  }
}
