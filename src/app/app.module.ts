import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppRoutingModule} from './app.routing.module';
import {UsersComponent} from './users/users.component';
import {UsersService} from './shared/services/users.service';
import {AuthService} from './shared/services/auth.service';
import {RegisterService} from './shared/services/register.service';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {FilterPipe} from './shared/pipes/filter.pipe';
import {UserInfoComponent} from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    LoaderComponent,
    UserInfoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UsersService,
  AuthService,
  RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
