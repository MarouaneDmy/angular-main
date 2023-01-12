import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

enum UserRole {
  ADMIN,
  READER,
  WRITER
}

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  role: UserRole
}

@Injectable()
export class UsersService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of([
      { firstName: 'Toto', lastName: 'Dupond', age: 10, role: UserRole.ADMIN },
      { firstName: 'Tutu', lastName: 'Dupont', age: 88, role: UserRole.READER },
      { firstName: 'Martin', lastName: 'Matin', age: 41, role: UserRole.WRITER }
    ]).pipe(delay(2000));
  }
}
