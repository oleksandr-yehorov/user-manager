import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegisterService} from '../shared/services/register.service';
import {Response} from 'selenium-webdriver/http';
import {Router} from '@angular/router';

interface Users {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  id: number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: Users[] = [];
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor(private router: Router, private registerService: RegisterService) {
  }

  submitForm(form: NgForm) {
    console.log('submitted form', form);
  }

  ngOnInit() {
  }

  // loadUsers();

  addUser() {
    this.registerService
      .addUser(this.email, this.password, this.firstName, this.lastName)
      .subscribe((parameters: { email: Users, password: Users, firstName: Users, lastName: Users }) => {
        let {email, password, firstName, lastName} = parameters;
        console.log(email);
        this.users.push(email);
        this.users.push(password);
        this.users.push(firstName);
        this.users.push(lastName);
      });
     this.email = '';
     this.password = '';
     this.firstName = '';
     this.lastName = '';
  }

  openLoginPage() {
      this.router.navigate(['/']);
    }
  }


