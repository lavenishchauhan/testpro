import { CartService } from 'src/app/shopping/services/cart.service';
import { Component, OnInit,OnChanges,SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'total-items-count',
  templateUrl: './total-items-count.component.html',
  styleUrls: ['./total-items-count.component.scss']
})
export class TotalItemsCountComponent implements OnInit {
  cartItem = 0;
  constructor(private cartService:CartService) { }

   ngOnInit() {
    this.check()  


  }

  async check(){

    
  let getItem =  await this.cartService.getCart();
  this.cartItem =  getItem.totalIteam;
}
}
