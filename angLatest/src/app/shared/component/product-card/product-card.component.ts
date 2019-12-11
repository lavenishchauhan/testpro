
import { Product } from '../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ServerRequestService } from 'src/app/shopping/services/server-request.service';
import { CartService } from 'src/app/shopping/services/cart.service';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product:Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart;

 

  constructor( private serverRequest: ServerRequestService,  private cartService: CartService) { }
  ngOnInit() {
   // console.log(this.shoppingCart);
  }

  async addToCart(changeQuantity){
    //console.log('this.product.quantity', this.product);

    if(isNaN(this.product.quantity)){
      this.product.quantity = 1;
    }
    else{ this.product.quantity = this.shoppingCart +=changeQuantity;}
   
    
    let cartQuantity = await this.cartService.CreateCart(this.product);
    console.log('cartQuantity', cartQuantity);

    this.shoppingCart = cartQuantity;

  }

}
