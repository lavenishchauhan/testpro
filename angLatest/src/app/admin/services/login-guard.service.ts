import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class loginAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    const user = this.authService.currentUser;

   // if (user) {console.log('user', user);  return true; }

    if ( !user && !user) {
      return true;
    } else {
      this.router.navigate(['./admin/products']);
      return false;
    }
  }
}
