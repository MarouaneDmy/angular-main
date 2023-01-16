import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from 'src/app/users/users-routing.module';
import { UsersListComponent } from './features/users-list/users-list.component';
import { UsersService } from 'src/app/users/data-access/users.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUserDialogComponent } from './features/add-user-dialog/add-user-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './data-access/store/users.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './data-access/store';



@NgModule({
  declarations: [
    UsersListComponent,
    AddUserDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature(UsersEffects)
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
