import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../components/auth/login/login.component';
import { ProfileComponent } from '../components/auth/profile/profile.component';
import { RequestPasswordResetComponent } from '../components/auth/password/request-password-reset/request-password-reset.component';
import { ResponsePasswordResetComponent } from '../components/auth/password/response-password-reset/response-password-reset.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from '../services/auth.service';



@NgModule({
  declarations: [LoginComponent, ProfileComponent, RequestPasswordResetComponent, ResponsePasswordResetComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
