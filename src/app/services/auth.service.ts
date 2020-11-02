import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserI } from '../interfaces/user';
import { JwtResponseI } from '../interfaces/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';


@Injectable()
export class AuthService {
  public authorization: string;
  constructor(
    private http: HttpClient,
    private Token: TokenService
    ) { }
  private baseUrl = 'http://localhost/plc/laravel/';
  

  login(data) {
    return this.http.post(`${this.baseUrl}api/auth/login`, data);
  }

  menu(idUser) {
    this.authorization = this.Token.get();
    console.log('Bairer', this.authorization);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.authorization
    });    
    return this.http.post(`${this.baseUrl}api/menu`, {id: idUser}, {headers: headers});
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}api/auth/sendPasswordResetLink`, data);
  }
 
  changePassword(data) {
    return this.http.post(`${this.baseUrl}api/auth/resetPassword`, data);
  }

}
