import { ServerRequestService } from './../shopping/services/server-request.service';
import { AuthService } from '../admin/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogin;
  isAdmin;
  currentUser;
  constructor(private authService: AuthService, private serverRequest: ServerRequestService) {
    this.isLogin = authService.isLoggedIn();
   console.log('authService.isLoggedIn', authService.isLoggedIn() );
  console.log('authService.currentUser', authService.currentUser );

  if(authService.isLoggedIn()){
    this.showUser();
  }

  
  }


// showPost
showUser() {
  this.serverRequest.getUser('users/me')
  .subscribe(res => {
  console.log('resuser', res);
this.currentUser =  res;
this.currentUser = this.currentUser.name;

  }, (error: Response) => {
    if (error.status === 404) {
       console.log('Http failure response for');
    } else {
       throw error;
    }
  });
}




  ngOnInit() {
    // this.isAdmin = this.authService.currentUser();
  }





}
