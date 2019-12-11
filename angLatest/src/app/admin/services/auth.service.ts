import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable()
export class AuthService {
 private url = 'https://myproductdev.herokuapp.com/api/';

  constructor(private http: HttpClient, private router: Router,) {
  }

  login(endpoint, resource) {
    return this.http.post(this.url + endpoint, JSON.stringify(resource), {
          headers: new HttpHeaders({
          'Content-Type': 'application/json'
          }),
      }).pipe(map((response) => {
        console.log('response', response);
        const result: any = response;
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      }));
  }



  logout() {
    localStorage.removeItem('token');
    window.location.href = "./";
   // this.router.navigate(['./']);

  }




  isLoggedIn() {
   return  tokenNotExpired();

  // const jwtHelper = new JwtHelper();
  // const token = localStorage.getItem('token');

  // if (!token) {
  //   console.log('token', token);
  //   return false;
  // }
  // const expirationDate = jwtHelper.getTokenExpirationDate(token);
  // const isExpired = jwtHelper.isTokenExpired(token);
  // console.log('expirationDate', jwtHelper.getTokenExpirationDate(token));
  // console.log('isExpired', isExpired);
  // console.log('token isExpired', token);
  // return !isExpired;

  }



  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null ;
    }
    const jwtHelper = new JwtHelper();

    if (jwtHelper.decodeToken(token)) {
      const isAdmin = jwtHelper.decodeToken(token);
      return isAdmin.tokenpro.admin;
    } else {
      return null ;
    }
    // console.log(jwtHelper.decodeToken(token));
    // return jwtHelper.decodeToken(token);
  }










  getToken() {
    console.log('getItem token', localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    return token;
  }

}

