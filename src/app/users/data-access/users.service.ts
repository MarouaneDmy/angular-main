import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

enum UserRole {
  ADMIN,
  READER,
  WRITER
}

export interface User {
  email: string;
  password: string;
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
      { email: 'toto.dupond@gmail.com', password: 'password1234', firstName: 'Toto', lastName: 'Dupond', age: 10, role: UserRole.ADMIN },
      { email: 'tutu.dupont@gmail.com', password: 'azerty12', firstName: 'Tutu', lastName: 'Dupont', age: 88, role: UserRole.READER },
      { email: 'martin.matin@outlook.com', password: 'chatpotte123', firstName: 'Martin', lastName: 'Matin', age: 41, role: UserRole.WRITER }
    ]).pipe(delay(2000));
  }
}

