import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BehaviorSubject, combineLatest, filter, map, Observable, of, startWith, tap } from 'rxjs';
import { AddArticleDialogComponent } from 'src/app/articles/features/add-article-dialog/add-article-dialog.component';
import { Article } from 'src/app/articles/data-access/article.model';
import { addArticle, ArticlesState, deleteArticle, loadArticles, selectAll } from 'src/app/articles/data-access/store';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  public readonly articles$: Observable<Article[]> = this.store.pipe(select(selectAll));
  public dialogCloseEvent$: Observable<Pick<Article, 'title' | 'body'>> = of(null);

  constructor(
    private readonly store: Store<ArticlesState>,
    private readonly dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadArticles());
  }

  public trackByArticle(i: number, _item: Article): number {
    return i;
  }

  public onDelete(id: number): void {
    this.store.dispatch(deleteArticle({ id }));
  }

  public onAdd(): void {
    const dialog: DynamicDialogRef = this.dialogService.open(AddArticleDialogComponent, {
      header: 'Ajouter un article',
      width: '70%'
    });
    this.dialogCloseEvent$ = dialog.onClose.pipe(
      filter((article) => !!article),
      tap((article: Pick<Article, 'title' | 'body'>) => {
        this.store.dispatch(addArticle({ article }));
      })
    );
  }

}
