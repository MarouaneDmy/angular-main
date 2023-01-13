import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from 'src/app/authentification/features/authentification.component';

const childRoutes: Routes = [  
  { path: '', component: AuthentificationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class AuthentificationRoutingModule {}
