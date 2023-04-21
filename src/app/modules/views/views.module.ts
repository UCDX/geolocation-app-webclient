import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { NearbyUsersComponent } from './nearby-users/nearby-users.component';
import { NearbyUserDetailsComponent } from './nearby-user-details/nearby-user-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    NearbyUsersComponent,
    NearbyUserDetailsComponent,
    UpdateDetailsComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoginComponent,
    NearbyUsersComponent,
    NearbyUserDetailsComponent,
    UpdateDetailsComponent
  ]
})
export class ViewsModule { }
