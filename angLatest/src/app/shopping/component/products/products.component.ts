import { CartService } from 'src/app/shopping/services/cart.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ServerRequestService } from 'src/app/shopping/services/server-request.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {
  products:any = [];
  filteredProducts:any = [];
  category:any;
  cartItem:any;

  loading = true;

  constructor(private serverRequest: ServerRequestService,
  private route: ActivatedRoute, private cartService:CartService) { 

    let ItemCart = this.GetCartItem();
    ItemCart.then( quan =>{
      this.cartItem = quan;
    })

    this.serverRequest.getAll('products')
    .subscribe(res => {
      console.log('params res',res);

      if(res){
        this.loading=false;
      }
           


      this.products = res;

     


    //  this.filteredProducts =  this.products ;

     // Add  quantity Key For show product page
      // for(var i=0;  i < this.products.length; i++ )
      // {
      //   for(var a=0;  a < this.cartItem.length; a++ )
      //   {
      //     if( this.products[i]._id === this.cartItem[a].cartId )
      //     {
      //       this.products[i].quantity = this.cartItem[a].quantity;
      //     }
        
      //   } 
      // }


      //== queryParamMap ===
      if(this.products){
        this.route.queryParamMap
        .subscribe( params => {
        console.log('params',params);
          this.category = params.get('category');
          this.filteredProducts = (this.category)? this.products.filter(prod => prod.category === this.category)  : this.products;
          console.log('products',this.filteredProducts);
        });
       }
    }, (error: Response) => {
      if (error.status === 404) {
         console.log('Http failure response for');
      } else {
         throw error;
      }
    });

  }

//  GetCart(id){
//   return new Promise((resolve, reject)=>{
//     this.serverRequest.getAll('carts/' + id)
//     .subscribe(res => {
//       //console.log('vohi res', res);
//       resolve(res);
//     });
//   })
// }




async GetCartItem() {
  let getItem =  await this.cartService.getCart();
  return getItem.CartProduct;
}



// for(let i=0;  i < this.products.length; i++ ){
//   let productQuan = this.GetCart(this.products[i]._id);
//   productQuan.then( quan =>{
//     this.products[i].quantity = quan[0].quantity;
//   })
// }



 

}
