import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import {Response} from 'selenium-webdriver/http';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface Users {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  id: number;
}

@Component ({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users: Users[] = [];
   id: number;
   searchValue = 'email';
   searchPlaceholder = 'search';
   apiUrl = environment.apiUrl;

   constructor( private http: HttpClient,
                private usersService: UsersService,
                private router: Router) {}

  loadUsers() {
    this.usersService.getUsers()
      .subscribe((users: Users[]) => {this.users = users; });
    this.usersService.getUsers()
      .subscribe((response) => console.log(response));
  }

  ngOnInit() {
    this.loadUsers();
  }

  viewUserInfo() {
    this.router.navigate(['/users']);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
    this.router.navigate(['/users']);
  }

  openUserPage() {
     // this.router.navigate([`/users:`{:id},id);
  }
}
