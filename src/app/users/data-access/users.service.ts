import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of } from 'rxjs';
import { User, UserRole } from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const USERS: User[] = [
  {
    id: 1,
    email: 'toto.dupond@gmail.com',
    password: 'password1234',
    firstName: 'Toto',
    lastName: 'Dupond',
    age: '10',
    role: UserRole.ADMIN,
  },
  {
    id: 2,
    email: 'tutu.dupont@gmail.com',
    password: 'azerty12',
    firstName: 'Tutu',
    lastName: 'Dupont',
    age: '88',
    role: UserRole.WRITER,
  },
  {
    id: 3,
    email: 'martin.matin@outlook.com',
    password: 'chatpotte123',
    firstName: 'Martin',
    lastName: 'Matin',
    age: '41',
    role: UserRole.READER,
  },
];

@Injectable()
export class UsersService {
  private readonly apiUrl: string = `${environment.server}users/`;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return of(USERS);
    return this.http.get<User[]>(this.apiUrl).pipe(catchError(() => of([])));
  }

  public getUser(id: number): Observable<User> {
    return of(USERS.find((a) => a.id == id)!);
    return this.http
      .get<User>(`${this.apiUrl}${id}`)
      .pipe(catchError(() => of()));
  }

  public addUser(
    user: Pick<User, 'email' | 'password' | 'firstName' | 'lastName' | 'age'>
  ): Observable<User | null> {
    return of({ ...user, id: Date.now(), role: UserRole.WRITER });
    return this.http
      .post<User>(this.apiUrl, user)
      .pipe(catchError(() => of(null)));
  }

  public deleteUser(id: number): Observable<boolean> {
    return of(true);
    return this.http
      .delete<boolean>(`this.apiUrl${id}`)
      .pipe(catchError(() => of(false)));
  }
}
