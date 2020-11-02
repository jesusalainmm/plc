import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-response-password-reset',
  templateUrl: './response-password-reset.component.html',
  styleUrls: ['./response-password-reset.component.css']
})
export class ResponsePasswordResetComponent implements OnInit {

  public error = [];
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null

  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private Notify: SnotifyService
    
  ) 
  {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token'];
    });

    //Notify.error("NOTIFY");
   }

  onSubmit() {
    this.authService.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    console.log(data);
    let _router = this.router;
    this.Notify.confirm(data.data, {
      buttons:[
        {
          text: 'Ok',
          action: toster =>{
            _router.navigateByUrl('/');
            this.Notify.remove(toster.id);
          }
        }
      ]
    })
    
    
  }

  handleError(error) {
    console.log(error);
    let response = error.error;
    if(typeof response.error !== 'undefined'){
      this.Notify.error(response.error);
    }
    if(typeof response.password !== 'undefined'){
      this.Notify.error(response.password);
    }
    if(typeof response.password_confirmation !== 'undefined'){
      this.Notify.error(response.password_confirmation);
    }
    //;
  }


  ngOnInit(): void {
  }

}
