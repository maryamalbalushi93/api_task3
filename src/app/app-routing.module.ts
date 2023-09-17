import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },

  { path: 'login', component: DashboardComponent },

  { path: 'add', component: AddComponent },
  { path: 'update', component: UpdateComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
