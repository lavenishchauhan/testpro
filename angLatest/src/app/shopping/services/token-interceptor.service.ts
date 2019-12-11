import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = localStorage.getItem('token');
    if (!!jwt) {
     req = req.clone({
       setHeaders: {
         Authorization: `${jwt}`
       }
     });
   }
   return next.handle(req);
 }


  // intercept(req, next) {
  //  const authService = this.injector.get(AuthService);
  //  console.log('token', authService);

  //   const tokenizedReq = req.clone({
  //     setHeaders: {
  //       Authorization: authService.getToken()
  //     }
  //   });
  //   return next.handle(tokenizedReq);
  // }

}
