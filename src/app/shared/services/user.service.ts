import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // Création d'un behavior subject (voir rxjs https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject)
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(<User[]>[]);
  // Création d'un observable à partir du behavior subject
  usersObs: Observable<User[]> = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Retourne la liste des utilisateurs
   * @returns Observable<User[]>
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.typicode_url}/users`);
  }

  refreshUsers(): void {
    this.http.get<User[]>(`${environment.typicode_url}/users`)
      .subscribe((users:User[])=>{
        // Changement de la valeur portée par le subject
        this.usersSubject.next(users);
        // Tous ce qui subscribe à userObs sera notifié et recevra la valeur du behavior subject
      })
  }

  /**
   * Crée un utilisateur
   * @param user l'utilisateur à ajouter
   * @returns Observable<User>
   */
  postUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.typicode_url}/users`, user);
  }

  /**
   * Modifie un utilisateur
   * @param user l'utilisateur à modifier
   * @returns Observable<User>
   */
  putUser(user:User): Observable<User>{
    return this.http.put<User>(`${environment.typicode_url}/users/${user.id}`, user);
  }

  /**
   * Supprime un utiliser
   * @param user l'utilisateur à supprimer
   * @returns Observable<any>
   */
  delUser(user:User): Observable<any>{
    return this.http.delete(`${environment.typicode_url}/users/${user.id}`);
  }
}
