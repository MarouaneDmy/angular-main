import { Injectable } from '@angular/core';
import { User, UsersService } from 'src/app/users/data-access/users.service';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  public currentUser: Observable<User>;

  constructor() { }
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
