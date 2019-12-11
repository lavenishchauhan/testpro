import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegexService } from 'src/app/shopping/services/regex.service';
import { ServerRequestService } from 'src/app/shopping/services/server-request.service';

import { AppError } from 'src/app/shared/common/app.error';
import { BadInput } from 'src/app/shared/common/bad-input';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  formSuccess= false;
  MessageType = '';
  messageInfo = false;
  formError = false;


Regex;
paramId;
  newProduct:any = {
    title: '',
    price: '',
    category: '',
    imgUrl:''
  }

  constructor(private serverRequest: ServerRequestService, 
    private route: ActivatedRoute, private regexService: RegexService,
    private router: Router
    
    ) {}

  ngOnInit() {
      this.Regex = {
        alpha: this.regexService.alphaRegex,
        email: this.regexService.emailRegex,
        pwd: this.regexService.pwdRegex,
        number: this.regexService.numberRegex,
        zip: this.regexService.zipRegex
      };

      this.route.paramMap
      .subscribe( params => {
        this.paramId = params.get('_id');
        if (this.paramId) {
          this.getdetail(this.paramId);
        }
        console.log(this.paramId);
      });
  }

  // newproductsubmit
  createCourse(newCourse: NgForm) {
    this.serverRequest.create('products', newCourse.value)
    .subscribe(res => {
      if (res) {
        newCourse.reset();

        this.messageInfo = true;
        this.formSuccess = true;
        this.MessageType = 'New Product Created'
  
        setTimeout(()=>{    //<<<---    using ()=> syntax
          this.router.navigate(['./admin/products']);
     }, 1000);
  


      }
    }, (error: AppError) => {
      if (error instanceof BadInput) {
         console.log('400', error);
      } else {
        throw error;
      }
    });

  }
  
  getdetail(id: string) {
    this.serverRequest.getAll('products/' + id)
    .subscribe(res => {
      this.newProduct = res;

      console.log('this.newProduct', this.newProduct  );



      

    }, (error: Response) => {
      if (error.status === 404) {
         console.log('Http failure response for');
      } else {
         throw error;
      }
    });
  }



// newproductsubmit
updateCourse(newCourse: NgForm ) {
  this.serverRequest.update(`products/${this.paramId}`, newCourse.value)
  .subscribe(res => {
    if (res) {
      //newCourse.reset();

      this.messageInfo = true;
      this.formSuccess = true;
      this.MessageType = 'Updated';

      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.router.navigate(['./admin/products']);
   }, 1000);




    }
  },(error) => {
    console.log('error',error);
    this.messageInfo = true;
    this.formError = true;
    this.MessageType = error.error;
    //newCourse.reset();
}

);

}










}
