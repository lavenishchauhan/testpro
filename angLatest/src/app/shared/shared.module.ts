import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './component/product-card/product-card.component';
import { TotalItemsCountComponent } from './component/total-items-count/total-items-count.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ ProductCardComponent, TotalItemsCountComponent,],
  imports: [
    CommonModule,  
    FormsModule,
    HttpClientModule,
  ],

  exports:[ ProductCardComponent,TotalItemsCountComponent,  CommonModule,  
    FormsModule,
    HttpClientModule]
})
export class SharedModule { }
