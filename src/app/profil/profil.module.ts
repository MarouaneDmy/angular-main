import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilRoutingModule } from './profil-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../users/data-access/users.service';
import { ProfilComponent } from './features/profil.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ProfilComponent],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  providers: [UsersService],
})
export class ProfilModule {}
