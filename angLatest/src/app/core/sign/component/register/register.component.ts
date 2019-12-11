import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegexService } from 'src/app/shopping/services/regex.service';
import { ServerRequestService } from 'src/app/shopping/services/server-request.service';
import { AppError } from 'src/app/shared/common/app.error';
import { BadInput } from 'src/app/shared/common/bad-input';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  MessageType = '';
  formSuccess= false;
  messageInfo = false;
  formError = false;

Regex;
registerUserData = {
  name: '',
  email: '',
  password: ''
};

constructor(private serverRequest: ServerRequestService, private regexService: RegexService,private router: Router) {}

  ngOnInit() {
    this.Regex = {
      alpha: this.regexService.alphaRegex,
      email: this.regexService.emailRegex,
      pwd: this.regexService.pwdRegex,
      number: this.regexService.numberRegex,
      zip: this.regexService.zipRegex
    };

  }

  // registerUser() {
  //   console.log(this.registerUserData);
  // }

  registerUser(newCourse: NgForm) {
    this.MessageType = '';
    this.messageInfo = false;
    this.formError = false;
    this.serverRequest.create('users', this.registerUserData)
    .subscribe(res => {
      console.log('res', res);
      if (res) {
        this.messageInfo = true;
        this.formSuccess = true;
        this.MessageType = 'Success'
        newCourse.reset();


   
        setTimeout(()=>{    //<<<---    using ()=> syntax
          this.router.navigate(['./login']);
     }, 1000);
     
         



       

        
      }
    },(error) => {
      console.log('error',error.originalError.error);
      this.messageInfo = true;
      this.formError = true;
      this.MessageType = error.originalError.error
});

  }


}
