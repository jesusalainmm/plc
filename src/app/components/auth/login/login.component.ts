import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StatusService } from 'src/app/services/status.service';
import { TokenService } from 'src/app/services/token.service';
import { UserI } from '../../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = {
    login: null,
    password: null
  }

  public error = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private token: TokenService,
    private status: StatusService
  ) { }

  onLogin(): void {
    console.log('Login', this.form);
    this.authService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    console.log(data);
    this.token.handle(data);
    this.status.changeAuthStatus(true);
    this.router.navigateByUrl('/');
  }

  handleError(error) {
    console.log(error);    
    this.error = error.error.error;
  }

  ngOnInit(): void {
  }


}
