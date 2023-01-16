
export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: string;
  role: UserRole;
}


export enum UserRole {
  ADMIN,
  READER,
  WRITER,
}
