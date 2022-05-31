import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
  {path: '', component: AddUserComponent},
  {path: 'list-user', component: ListUserComponent},
  {path: 'edit-user', component: EditUserComponent},
  {path: 'login-user', component: LoginUserComponent},
  {path: 'registration-user', component: RegistrationUserComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    LoginUserComponent,
    RegistrationUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
