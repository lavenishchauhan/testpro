import { Product } from '../../../shared/models/product';


import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shopping/services/cart.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  cartItem:Product;
  totalPrice
 


constructor(private cartService:CartService) { }

  async ngOnInit() {
    let getItem =  await this.cartService.getCart();
    this.cartItem = getItem.CartProduct;
    
    console.log( 'this.cartItem',  this.cartItem);


    
   
  }


}
