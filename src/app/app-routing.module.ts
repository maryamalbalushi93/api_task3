import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginpageComponent },
  {path:'register',component :RegistrationComponent},
  { path: 'add', component: AddComponent },
  {path:'list',component:UserListComponent},
  { path: 'update/:id', component: UpdateComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
