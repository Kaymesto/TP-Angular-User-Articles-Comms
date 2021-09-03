import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>(<Article[]>[]);
  usersObs: Observable<Article[]> = this.articlesSubject.asObservable();


  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.typicode_url}/posts`);
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${environment.typicode_url}/posts/${id}`);
  }

  getArticleComments(articleId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.typicode_url}/posts/${articleId}/comments`);
  }

  refreshArticles(): void {
    this.http.get<Article[]>(`${environment.typicode_url}/posts`)
      .subscribe((articles: Article[]) => {
        // Changement de la valeur portée par le subject
        this.articlesSubject.next(articles);
        // Tous ce qui subscribe à userObs sera notifié et recevra la valeur du behavior subject
      })
  }

  postArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${environment.typicode_url}/posts`, article);
  }

  putArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(`${environment.typicode_url}/posts/${article.id}`, article);
  }

  /**
   * Supprime un Article
   * @param article l'Article à supprimer
   * @returns Observable<any>
   */
  delArticle(article: Article): Observable<any> {
    return this.http.delete(`${environment.typicode_url}/posts/${article.id}`);
  }

}
