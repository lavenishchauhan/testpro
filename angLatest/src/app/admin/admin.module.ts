import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AdminOrdersComponent } from './component/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from '../shopping/services/token-interceptor.service';


@NgModule({
    declarations: [
        ProductFormComponent,
        AdminOrdersComponent,
        AdminProductsComponent
    ],
    exports:[
       // ProductFormComponent,
      //  AdminOrdersComponent,
      //  AdminProductsComponent 
    ],
    providers: [
        AuthService,
        AuthGuard,
        AdminAuthGuard,
         {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
          }
      ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
              path: 'admin',
              component: AdminOrdersComponent,
              canActivate: [AuthGuard]
             // canActivate: [AuthGuard, AdminAuthGuard]
            },
      
            
            {
              path: 'admin/products',
              component: AdminProductsComponent,
              canActivate: [AuthGuard]
              // canActivate: [AuthGuard, AdminAuthGuard]
            },
            {
              path: 'admin/products/new',
              component: ProductFormComponent,
              canActivate: [AuthGuard]
              // canActivate: [AuthGuard, AdminAuthGuard]
            },
      
            {
              path: 'admin/products/:_id',
              component: ProductFormComponent,
              canActivate: [AuthGuard]
              // canActivate: [AuthGuard, AdminAuthGuard]
            },
          ])
    ],
})
export class AdminModule { }
