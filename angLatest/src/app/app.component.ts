import { AuthService } from './admin/services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService) {
  }


  title = 'angLatest';
  courses = ['All','Product'];
  viewModel = 'map';
  products ;



loadProduct(){
this.products = [
  { 
    id:'1',
    name:'Product 1'
  },
  { 
    id:'2',
    name:'Product 2'
  },
  { 
    id:'3',
    name:'Product 3'
  }
]
}

trackProduct(value,product){
  return product ? product.id:undefined;
}



}
