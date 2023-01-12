import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Article } from 'src/app/articles/data-access/article.model';
import { environment } from 'src/environments/environment';

const ARTICLES: Article[] = [
    { id: 1, title: 'Titre 1', body: 'Un joli contenu', author: 'Estelle' },
    { id: 2, title: 'Titre 2', body: 'Un autre contenu', author: 'Estelle' },
    { id: 3, title: 'Titre 3', body: 'Un nouveau contenu', author: 'Estelle' },
  ];

@Injectable()
export class ArticlesService {

    private readonly apiUrl: string = `${environment.server}articles/`;

    constructor(
        private http: HttpClient
    ) { }

    public getArticles(): Observable<Article[]> {
        return of(ARTICLES).pipe(delay(2000));
        return this.http.get<Article[]>(this.apiUrl)
            .pipe(
                catchError(() => of([]))
            );
    }

    public getArticle(id: number): Observable<Article> {
        return of(ARTICLES.find(a => a.id == id)!);
        return this.http.get<Article>(`${this.apiUrl}${id}`)
            .pipe(
                catchError(() => of())
            );
    }

    public addArticle(article: Pick<Article, 'title' | 'body'>): Observable<Article | null> {
        return of({ ...article, id: Date.now(), author: 'Someone' });
        return this.http.post<Article>(this.apiUrl, article)
            .pipe(
                catchError(() => of(null))
            );
    }

    public updateArticle(id: number, changes: Partial<Article>): Observable<boolean> {
        return of(true);
        return this.http.patch<boolean>(`this.apiUrl${id}`, changes)
            .pipe(
                catchError(() => of(false))
            );
    }
    public deleteArticle(id: number): Observable<boolean> {
        return of(true);
        return this.http.delete<boolean>(`this.apiUrl${id}`)
            .pipe(
                catchError(() => of(false))
            );
    }

}
