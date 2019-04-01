import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthService {

  apiUrl = environment.apiUrl;

  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
  };

  logout() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  };

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  };

  constructor(private http: HttpClient) {}

   getUserByEmail(email: string) {
        return this.http.get<User>(`http://localhost:3000/users?email=${email}`);
   }

}
