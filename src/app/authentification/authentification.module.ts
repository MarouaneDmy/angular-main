import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationRoutingModule } from 'src/app/authentification/authentification-routing.module';
import { AuthentificationComponent } from './features/authentification.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersService } from '../users/data-access/users.service';

@NgModule({
  declarations: [
    AuthentificationComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UsersService
  ]
})
export class AuthentificationModule { }
