import { Injectable } from '@angular/core';
import { User, UsersService } from 'src/app/users/data-access/users.service';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  public currentUser: Observable<User>;

  constructor() { }
  /**
   * The function takes a User object as a parameter, converts it to a JSON string, and stores it in
   * local storage
   * @param {User} userInfo - User - This is the user object that is passed in from the login
   * component.
   */
  public login(userInfo: User){
    localStorage.setItem("userInfo",  JSON.stringify(userInfo));
  }
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
