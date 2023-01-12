import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from 'src/app/users/features/users-list/users-list.component';

const childRoutes: Routes = [  
  { path: '', component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
