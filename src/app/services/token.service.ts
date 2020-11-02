import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login: 'http://localhost/plc/laravel/api/auth/login',
    signup: 'http://localhost/plc/laravel/api/auth/login'
  };

  constructor() { }

  handle(token) {
    this.set(token);
    //console.log(this.isValid());
  }

  set(token) {
    localStorage.setItem('token', token.token);
    localStorage.setItem('user', JSON.stringify(token.user));
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isValid() {
    const token = this.get();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false ;
      }  
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.');
    //console.log('payload_1', this.decode(payload[0]));
    //console.log('payload_2', this.decode(payload[1]));    
    return this.decode(payload[1]);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

  getdatauser(){
    return localStorage.getItem('user');
  }

}
