import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from  './login/login.component';
import { RegisterComponent} from './register/register.component';
import {ShowUsersComponent} from './show-users/show-users.component';
import {AppComponent} from './app.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'show-user', component: ShowUsersComponent },
  {path : '', component : AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
