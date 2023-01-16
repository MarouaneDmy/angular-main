import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './features/profil.component';

const childRoutes: Routes = [{ path: '', component: ProfilComponent }];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ProfilRoutingModule {}
