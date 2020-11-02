import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public loggedIn: boolean;
  constructor(
    private staus: StatusService,
    private Token: TokenService
    ) { }

  ngOnInit(): void {
    this.staus.authStatus.subscribe(value => this.loggedIn = value);
  }
}
