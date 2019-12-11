import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  CategoryList = ['Bread','Dairy','Fruits','Seasonings and Spices','Vegetables'];
  @Input('category') category;
  constructor() { }

  ngOnInit() {
  }

}
