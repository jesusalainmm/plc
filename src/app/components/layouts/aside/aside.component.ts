import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  public loggedIn: boolean;
  public idUser: number;
  public dataUser;
  public aside;

  constructor(
    private status: StatusService,
    private Token: TokenService,
    private authService: AuthService
    ) {    }

  ngOnInit(): void {
    this.status.authStatus.subscribe(value => this.loggedIn = value);
    if(this.loggedIn){
      this.dataUser = JSON.parse(this.Token.getdatauser());
      this.idUser = this.dataUser["id"];
      console.log('idUser', this.idUser);      
      this.loadaside(this.idUser);
    }
  }

  loadaside(id){
    this.authService.menu(id).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.aside = data.data;
    for (let array of data.data){
      console.info(array.submenu[0].s1_id_submenu1);
    }
   
    console.log('aside', this.aside);    
  }

  handleError(error) {
    console.log(error);    
    console.log(error.error.error);
  }

  exist(submenu){
    if(submenu[0].s1_id_submenu1 > 0){
      return true;
    }
    return false;
  }

}