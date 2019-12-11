import { AppError } from '../../../../shared/common/app.error';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../admin/services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegexService } from 'src/app/shopping/services/regex.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  formSuccess= false;
  MessageType = '';
  messageInfo = false;
  formError = false;

  Regex;
  invalidLogin: boolean;
  loginUserData = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private regexService: RegexService
    ) {

      this.Regex = {
        alpha: regexService.alphaRegex,
        email: regexService.emailRegex,
        pwd: regexService.pwdRegex,
        number: regexService.numberRegex,
        zip: regexService.zipRegex
      };



    }

  signIn(newCourse: NgForm) {

    console.log('login');

    this.authService.login('auth', this.loginUserData)
    .subscribe(res => {

      if (res) {
        this.messageInfo = true;
        this.formSuccess = true;
        this.MessageType = 'Success'

        console.log('error');
        newCourse.reset();
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');


        setTimeout(()=>{    //<<<---    using ()=> syntax
          this.router.navigate([returnUrl || './admin/products']);
     }, 100);





    
      } else {
        this.invalidLogin = true;
      }
    }, (error) => {
          console.log('error',error);
          this.messageInfo = true;
          this.formError = true;
          this.MessageType = error.error;
          //newCourse.reset();
    });
  }




}


