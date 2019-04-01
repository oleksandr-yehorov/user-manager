import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {UsersService} from '../shared/services/users.service';
import {AuthService} from '../shared/services/auth.service';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UsersService,
              private authService: AuthService,
              private router: Router) { }


  submitForm(form: NgForm){
    console.log('submitted form', form);
  }
  ngOnInit() {
  }

  openRegisterPage() {
    this.router.navigate(['/register']);
  }

  openUserPage() {
    /*const formData = this.form.value;
    this.userService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            // this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/users']);
          } else {
            // this.showMessage('Password incorrect');
          }
        } else {
          // this.showMessage('There is no user with this email');
        }*/
    this.router.navigate(['/users']);
  }

  /*constructor(private authService: AuthService) {}
  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            // logic
          } else {
            this.showMessage('Пароль не верный');
          }
        } else {
          this.showMessage('Такого пользователя не существует');
        }
      });
  }*/
}
