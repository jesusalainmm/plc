import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { RequestPasswordResetComponent } from '../components/auth/password/request-password-reset/request-password-reset.component';
import { ResponsePasswordResetComponent } from '../components/auth/password/response-password-reset/response-password-reset.component';
import { ProfileComponent } from '../components/auth/profile/profile.component';
import { BeforeLoginService } from '../services/before-login.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService],
    children: [
      {
        path: 'login',
        component: LoginComponent   // {5}
      }
    ]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: "response-password-reset",
    component: ResponsePasswordResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: "request-password-reset",
    component: RequestPasswordResetComponent,
    canActivate: [BeforeLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
