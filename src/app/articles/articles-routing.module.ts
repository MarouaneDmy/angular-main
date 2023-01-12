import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from 'src/app/articles/features/articles-list/articles-list.component';

const childRoutes: Routes = [  
  { path: '', component: ArticlesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
