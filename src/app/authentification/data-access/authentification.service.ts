import { Injectable } from '@angular/core';
import { User } from 'src/app/users/data-access/users.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('userInfo'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  /**
   * The function takes a User object as a parameter, converts it to a JSON string, and stores it in
   * local storage
   * @param {User} userInfo - User - This is the user object that is passed in from the login
   * component.
   */

  public login(userInfo: User) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    this.currentUserSubject.next(userInfo);
    return userInfo;
  }
  public estConnecte() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout() {
    localStorage.removeItem('userInfo');
    this.currentUserSubject.next(null);
  }
}
