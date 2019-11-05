import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { MatButtonModule,MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,MatIconModule,
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
