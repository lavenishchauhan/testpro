import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from 'src/app/shopping/services/server-request.service';
import { AppError } from 'src/app/shared/common/app.error';
import { NotFoundError } from 'src/app/shared/common/not-found-error';






@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {


  posts: any;
 
  constructor(private serverRequest: ServerRequestService) {}

  ngOnInit() {
    

    this.showPost();

  }



// showPost
showPost() {
  this.serverRequest.getAll('products')
  .subscribe(res => {
    this.posts = res;
  }, (error: Response) => {
    if (error.status === 404) {
       console.log('Http failure response for');
    } else {
       throw error;
    }
  });
}


  // deletePost
  deleteCourse(post: any) {
    if(confirm('Are you sure you want to delete this products?')){
      this.serverRequest.delete('products', post._id)
      .subscribe(res => {
        if (res) {
          document.getElementById(post._id).remove();
        }
      }
      , (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('Request Data Wrong ', 'Http failure response');
        } else {
          throw error;
        }
      }
      
      );

    }
  }



}
