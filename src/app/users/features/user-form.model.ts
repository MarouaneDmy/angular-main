import { FormControl } from '@angular/forms';

export interface UserForm {
  email: FormControl<string>;
  password: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  age: FormControl<string>;
}
