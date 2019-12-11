import { Product } from '../../shared/models/product';
import { AuthService } from '../../admin/services/auth.service';
import { Component, Input } from '@angular/core';
import { NgLocaleLocalization } from '@angular/common';




@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent  {
   constructor(private authService: AuthService) {

  }

 

}

/*https://stackblitz.com/edit/angular-interval-observable-demo?file=app%2Fapp.component.ts */

