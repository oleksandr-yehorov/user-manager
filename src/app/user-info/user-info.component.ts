import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';
import {Subscription} from 'rxjs';
import {UsersService} from '../shared/services/users.service';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component ({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  id: number;
  firstName: string;
  lastName: string;
  user: User;
  private activatedRoute: ActivatedRoute;
  private subscription: Subscription;

  constructor( private usersService: UsersService,
               private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params ['id'];
      this.firstName = params ['firstname'];
      this.lastName = params ['lastname'];
    });

    this.subscription = this.activatedRoute.params.subscribe(
      params => (this.id = params.id)
    );
    this.usersService.getUser(this.id).subscribe(data => (this.user = data));
  }

  backToUsers() {
    this.router.navigate(['/users']);
  }
}
