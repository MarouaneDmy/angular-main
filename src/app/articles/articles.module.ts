import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticlesRoutingModule } from 'src/app/articles/articles-routing.module';
import { ArticlesService } from 'src/app/articles/data-access/articles.service';
import { ArticlesEffects, reducer } from 'src/app/articles/data-access/store';
import { ArticlesListComponent } from 'src/app/articles/features/articles-list/articles-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddArticleDialogComponent } from './features/add-article-dialog/add-article-dialog.component';

@NgModule({
    declarations: [
        ArticlesListComponent,
        AddArticleDialogComponent
    ],
    imports: [
        SharedModule,
        ArticlesRoutingModule,
        StoreModule.forFeature('articles', reducer),
        EffectsModule.forFeature(ArticlesEffects)
    ],
    providers: [
        ArticlesService
    ]
})
export class ArticlesModule { }