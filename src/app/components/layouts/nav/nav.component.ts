import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from 'src/app/services/status.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public loggedIn: boolean;
  public nameUser: string;
  public dataUser;
  constructor(
    private staus: StatusService,
    private router: Router,
    private Token: TokenService
    ) { }

  ngOnInit(): void {
    this.staus.authStatus.subscribe(value => this.loggedIn = value);
    if(this.loggedIn){
      this.dataUser = JSON.parse(this.Token.getdatauser());
      this.nameUser = this.dataUser["1_nombre_usu"]+' '+this.dataUser["2_nombre_usu"]+' '+this.dataUser["1_apellido_usu"]+' '+this.dataUser["2_apellido_usu"];
      //console.log('nameUser', this.nameUser);      
    }
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.staus.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
