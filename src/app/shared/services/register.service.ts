import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()

export class RegisterService {

  apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) {}

  addUser(email, password, firstName, lastName: string) {
    const data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    };
    return this.http.post(this.apiUrl, data);
  }
}
