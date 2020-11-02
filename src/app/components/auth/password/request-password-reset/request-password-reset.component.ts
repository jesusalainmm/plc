import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.css']
})
export class RequestPasswordResetComponent implements OnInit {

  public form = {
    email: null
  };

  constructor(
    private Notify: SnotifyService,
    private authService: AuthService,
    private router: Router
    ) { }

  onSubmit() {
    this.Notify.info("Espere por favor...", {timeout:5000});
    this.authService.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.Notify.error(error.error.error)
    );
  }

  handleResponse(data) {
    this.Notify.success(data.data,{timeout:0});
    this.form.email == null;
  }


  ngOnInit(): void {
  }

}
