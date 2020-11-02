import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NavComponent } from './components/layouts/nav/nav.component';
import { AsideComponent } from './components/layouts/aside/aside.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PacientesComponent } from './components/citas_medicas/pacientes/pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    DataTablesModule,
    SnotifyModule,
    CommonModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AuthService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults}, 
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
