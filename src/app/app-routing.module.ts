import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesComponent } from './components/citas_medicas/pacientes/pacientes.component';
import { HomeComponent } from './components/home/home.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AfterLoginService]
  },
  { 
    path: '', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [BeforeLoginService]
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
    canActivate: [AfterLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
