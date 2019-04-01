import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {AbstractControl} from '@angular/forms';

@Injectable()

export class UsersService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getUsers() {
      return this.http.get(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
      return this.http.get<User>(`${this.apiUrl}/${id}`);
    }

    editUser(user: User): Observable<User> {
      return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }
  deleteUser(id: number) {
      return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`http://5c965c2d939ad600149a94eb.mockapi.io/users?email=${email}`);
  }
}


// deleteUser(id: number) {
  // return this.http.delete(`${config.apiUrl}/users/${id}`);
// }
