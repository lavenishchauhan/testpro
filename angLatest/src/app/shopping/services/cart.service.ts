import { Product } from '../../shared/models/product';
import { ServerRequestService } from './server-request.service';
import { Injectable } from '@angular/core';




interface Result {
  cartId: any,
  quantity: any;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
 cartObject ;
 cartSum:number= 0 ;

constructor(private serverRequest: ServerRequestService) { }


getCart():Promise<any>{
  return new Promise((resolve, reject) => {
    this.serverRequest.getAll('carts')
    .subscribe( (res : Result) =>{
      this.cartObject = res;
      //console.log('this.cartObject', this.cartObject);
      this.cartSum  = 0;
      // get cart number
      for(let i=0;  i < this.cartObject.length; i++ ){
        this.cartSum += this.cartObject[i].quantity;
      }
     // console.log('cartsum', this.cartSum);

     let cartIteam = { totalIteam:this.cartSum, CartProduct:  this.cartObject }

      resolve( cartIteam);

     



    })
  });
}

CreateCart(product:Product){
  // console.log('product', product.quantity);
    return new Promise((resolve, reject) => {
      let addNewCart = {
        cartId : product._id,
        title : product.title,
        price : product.price,
        category : product.category,
        quantity : product.quantity,
        imgUrl : product.imgUrl,
      }
      this.serverRequest.create('carts',addNewCart)
      .subscribe((res : Result) => {
        const result = {
          key:res.cartId,
           quantity:res.quantity,
        } 
       // console.log('res', res);
        //this.getCart();
        resolve(result.quantity);
      });
    });
};












}
