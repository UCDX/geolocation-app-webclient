import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/views/login/login.component';
import { NearbyUsersComponent } from './modules/views/nearby-users/nearby-users.component';
import { NearbyUserDetailsComponent } from './modules/views/nearby-user-details/nearby-user-details.component';
import { UpdateDetailsComponent } from './modules/views/update-details/update-details.component';
import { SignupComponent } from './modules/views/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'nearby-users', children: [
    { path: '', component: NearbyUsersComponent },
    { path: ':user-name', children: [
      { path: 'details', component: NearbyUserDetailsComponent }
    ] }
  ] },
  { path: 'update-details', component: UpdateDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
