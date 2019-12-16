import { loginAuthGuard } from './../admin/services/login-guard.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { SharedModule } from './../shared/shared.module';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { ProductsComponent } from './component/products/products.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ProductFilterComponent } from './component/products/product-filter/product-filter.component';
import { ServerRequestService } from './services/server-request.service';
import { CartService } from './services/cart.service';



@NgModule({
    declarations: [
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        MyOrdersComponent,
        OrderSuccessComponent,
        ProductFilterComponent
    ],
    exports:[
    ],
    providers: [
        ServerRequestService,
        CartService
      ],
    imports: [
        CommonModule,  
        FormsModule,
        SharedModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProductsComponent,  canActivate: [loginAuthGuard] 
              },
              { path: 'shoppingcart', component: ShoppingCartComponent },
           
          ])
    ],
})
export class ShoppingModule { }
