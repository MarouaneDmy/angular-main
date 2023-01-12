import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from 'src/app/users/users-routing.module';
import { UsersListComponent } from './features/users-list/users-list.component';
import { UsersService } from 'src/app/users/data-access/users.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
