(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/admin-orders/admin-orders.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/admin-orders/admin-orders.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>admin-orders works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/admin-products/admin-products.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/admin-products/admin-products.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"container\">\n        <br/>  \n        <div class=\"row\">\n                <div class=\"col-sm-6\"><h2>Products</h2> </div>\n                <div class=\" ml-auto\"><a class=\"btn btn-primary\"  routerLink=\"/admin/products/new\"> New Product</a> </div>\n              </div>\n        <br/>        \n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Course Author</th>\n              <th>Course Name</th>\n              <th>Course category</th>\n              <th>Course image</th>\n              <th>Course Date</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr [id]=\"post._id\" *ngFor=\"let post of posts\">\n              <td class=\"text-capitalize\">{{post.title}}</td>\n              <td>{{post.price}}</td>\n              <td> {{post.category}} </td>\n              <td><div *ngIf=\"post.imgUrl\">\n                    <img width=\"60\" class=\"mx-auto d-block img-responsive img-fluid\" \n                    [src]=\"post.imgUrl\" [alt]=\"post.title\">\n                  </div> </td>\n              <td>{{post.date  | date}}</td>\n              <td> \n                  <!-- routerLink=\"/crud\"[queryParams]=\"{id:post._id }\" -->\n                <a class=\"btn btn-outline-secondary\"  routerLink=\"/admin/products/{{post._id}}\">Edit</a>  &nbsp;\n                <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"deleteCourse(post)\">Delete</button> \n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n\n      <br/>\n      <br/>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/product-form/product-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/product-form/product-form.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <br />\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"card\" style=\"width: 38rem;\">\n      <div class=\"card-header\">Add a Product</div>\n      <div class=\"card-body\">\n\n\n\n        <form #newCourse=\"ngForm\" novalidate >\n        <!-- (ngSubmit)=\"newCourse.form.valid && updateCourse(newCourse)\" -->\n        \n\n        \n          <div class=\"alert\" [hidden]=\"!messageInfo\"  \n                    [class.alert-success]=\"formSuccess\"  \n                    [class.alert-danger]=\"formError\">\n                    <strong>{{MessageType}}</strong> \n                </div> \n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n\n            <input required=\"required\" name=\"title\" class=\"form-control\" type=\"text\" placeholder=\"Product title\"\n              minlength=\"3\" maxlength=\"20\" [pattern]=\"Regex.alpha\" [(ngModel)]=\"newProduct.title\" #title='ngModel'\n              [ngClass]=\"!title.valid &&  (title.touched || newCourse.submitted) ? 'input-error' : '' \">\n            <!--start-form-error-->\n            <div class=\"form-error alert alert-danger\"\n              *ngIf=\"!title.valid && (title.touched || (newCourse.submitted && newCourse.touched) )\">\n              <div *ngIf=\"title.errors.required\">\n                Title is required\n              </div>\n              <div *ngIf=\"title.errors.minlength\">\n                Title should be {{title.errors.minlength.requiredLength}} characters.\n              </div>\n              <div *ngIf=\"title.errors.pattern\">\n                Title doesn't match the pattern\n              </div>\n            </div>\n            <!--end-form-error-->\n          </div>\n          <!--end-form-group -->\n  \n          <div class=\"form-group\">\n            <label for=\"price\">Price</label>\n            <div class=\"input-group mb-2\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\">@</div>\n              </div>\n              <input required=\"required\" [(ngModel)]=\"newProduct.price\" name=\"price\" #price='ngModel'\n                [ngClass]=\"!price.valid &&  (price.touched || newCourse.submitted) ? 'input-error' : '' \" id=\"price\"\n                class=\"form-control\" type=\"text\" placeholder=\"Price\">\n            </div>\n            <div class=\"form-error alert alert-danger\"\n              *ngIf=\"!price.valid && (price.touched || (newCourse.submitted && newCourse.touched))\">\n              <div *ngIf=\"price.errors.required\">\n                price is required\n              </div>\n            </div>\n            <!--end-form-error-->\n          </div>\n          <div class=\"form-group\">\n            <label for=\"category\">Category</label>\n            <select  required=\"required\" [(ngModel)]=\"newProduct.category\" #category=\"ngModel\"\n              class=\"form-control\" name=\"category\">\n              <option value=\"\">Select Value</option>\n              <option value=\"Bread\">Bread</option>\n              <option value=\"Dairy\">Dairy</option>\n              <option value=\"Fruits\">Fruits</option>\n              <option value=\"Seasonings and Spices\">Seasonings and Spices</option>\n              <option value=\"Vegetables\">Vegetables</option>\n            </select>\n            <div class=\"form-error alert alert-danger\"\n              *ngIf=\"!category.valid && (category.touched || (newCourse.submitted && newCourse.touched))\">\n              <div *ngIf=\"category.errors.required\">\n                Select a category value\n              </div>\n            </div>\n          </div>\n    \n          <div class=\"form-group\">\n            <label for=\"imgUrl\">Image Url</label>\n            <input required=\"required\" [(ngModel)]=\"newProduct.imgUrl\" name=\"imgUrl\" #imgUrl='ngModel'\n              [ngClass]=\"!imgUrl.valid &&  (imgUrl.touched || newCourse.submitted) ? 'input-error' : '' \"\n              class=\"form-control\" type=\"text\" placeholder=\"imgUrl\">\n            <div class=\"form-error alert alert-danger\"\n              *ngIf=\"!imgUrl.valid && (imgUrl.touched || (newCourse.submitted && newCourse.touched))\">\n              <div *ngIf=\"imgUrl.errors.required\">\n                imgUrl is required\n              </div>\n            </div>\n          </div>\n          <!-- <p>{{newCourse.value | json}} </p> -->\n          <div class=\"form-group\">\n            <!-- [disabled]=\"!newCourse.valid\" -->\n\n            <div *ngIf=\"!paramId\"> \n            <button type=\"submit\" class=\"btn btn-primary\"    [disabled]=\"!newCourse.form.valid\"\n            (click)=\"newCourse.form.valid && createCourse(newCourse)\">\n            Submit\n          </button>\n\n\n            </div>\n            <div *ngIf=\"paramId\"> \n            <button type=\"submit\"  [disabled]=\"!newCourse.form.valid\" class=\"btn btn-primary\"(click)=\"newCourse.form.valid && updateCourse(newCourse)\">Update</button>\n          </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-5 ml-auto\">\n\n    <!-- <div class=\"card\" *ngIf=\"newProduct.imgUrl || newProduct.title || newProduct.price\">\n    \n     \n   \n      <div class=\"card-body\" >\n         <div *ngIf=\"newProduct.imgUrl\">\n            <img class=\"mx-auto d-block img-responsive img-fluid\" \n            [src]=\"newProduct.imgUrl\" [alt]=\"newProduct.title\">\n          </div> \n          <br/>\n            <h4 class=\"card-title\">{{newProduct.title}}</h4>\n            <p class=\"card-text\">{{ newProduct.price | currency:'USD':true }}</p>\n           </div>\n\n\n\n     \n    </div> -->\n\n\n\n\n\n    <product-card [product]=\"newProduct\" [show-actions]=\"false\"> </product-card>\n\n\n\n    \n\n\n\n\n  </div>\n</div>\n\n\n\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n\n    <!-- <app-check-out> </app-check-out> -->\n\n\n\n\n\n\n<!-- \n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"viewModel == 'map'\" \n      (click)=\"viewModel='map'\">Map View</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"viewModel == 'list'\" \n      (click)=\"viewModel='list'\">List View</a>\n    </li>\n  </ul>\n  <br/>\n  <div [ngSwitch]=\"viewModel\">\n    <div *ngSwitchCase=\"'map'\"> Map View Content</div>\n    <div *ngSwitchCase=\"'list'\">List View Content</div>\n    <div *ngSwitchDefault>Otherwise</div>\n  </div>\n\n\n<br/>\n<br/>\n\n  <div *ngIf=\"courses.length > 0; else noCourses\"> Course List (ngIf) </div>\n  <ng-template #noCourses> No Course (ngIf)</ng-template>\n\n  <div [hidden]=\"courses.length == 0\"> Course List (hidden) </div>\n  <div [hidden]=\"courses.length > 0\"> No Course (hidden)</div>\n\n  <br/>\n  <br/>\n\n  <button (click)=\"loadProduct()\">loadProduct</button>\n  <div *ngFor=\"let product of products; trackBy:trackProduct\">\n    {{product.id}} :  {{product.name}}\n  </div> -->\n\n\n\n<div *ngIf=\"!authService.isLoggedIn()\">\n  <div class=\"container\">\n    <app-bs-navbar></app-bs-navbar>\n    <app-home></app-home>\n    <router-outlet> </router-outlet>\n  </div>\n</div>\n\n\n\n\n\n<div *ngIf=\"authService.isLoggedIn()\">\n    <div class=\"d-flex\" id=\"wrapper\">\n        <div class=\"bg-light border-right\" id=\"sidebar-wrapper\" style=\"min-width:200px; min-height:100vh;\">\n          <div class=\"sidebar-heading\" style=\"height: 55px; line-height: 55px;\">  \n            <img width=\"40\" \n            src =\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbWINZ8I9f2fDOHmcyIKGd2ihupmNhJDHGFLU40KJ3fd3Enfy&s\" />\n             Dashboard </div>\n          <div class=\"list-group list-group-flush\" style=\"border-bottom: 1px solid #ddd;\">\n            <a routerLink=\"/admin/products\" class=\"list-group-item list-group-item-action bg-light\">Products</a>\n          </div>\n        </div>\n        <!-- /#sidebar-wrapper -->\n        \n        <!-- Page Content -->\n        <div id=\"page-content-wrapper\" style=\"width:100%;\">\n            <app-bs-navbar></app-bs-navbar>\n          <div class=\"container-fluid\">\n            <app-home></app-home>\n            <router-outlet> </router-outlet> \n          </div>\n        </div>\n\n\n      </div>\n      <!-- /#wrapper -->\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/bs-navbar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/bs-navbar.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <nav class=\"navbar navbar-expand navbar-light bg-light\">\n    <a routerLink=\"/\" class=\"navbar-brand\" >Navebar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\" [style.backgroundColor]=\"bgcolor\">\n\n         \n\n        <li *ngIf=\"!authService.isLoggedIn()\" class=\"nav-item\" routerLinkActive=\"active current\">\n          <a class=\"nav-link\" routerLink=\"/\">PRODUCTS</a>\n        </li>\n       \n   \n       \n       \n\n\n<!-- <li  class=\"nav-item active current\" *ngIf=\"authService.isLoggedIn() && authService.currentUser\">\n  <a class=\"nav-link\"  routerLink=\"/admin\">ADMIN</a>\n</li> -->\n\n<li  class=\"nav-item active current\" *ngIf=\"!authService.isLoggedIn()\">\n  <a class=\"nav-link\" routerLink=\"/login\">LOGIN</a\n></li>\n\n     \n<li  class=\"nav-item active current\" *ngIf=\"!authService.isLoggedIn()\"><a class=\"nav-link\" routerLink=\"/register\">SIGN UP</a></li>\n <li  class=\"nav-item active current\" *ngIf=\"authService.isLoggedIn()\"><a  class=\"nav-link\" href=\"javascript:;\"  (click)=\"authService.logout()\">LOGOUT</a></li>\n    \n\n   \n\n      </ul>\n      \n    </div>\n  </nav>\n\n  <br/>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sign/component/login/login.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/sign/component/login/login.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-6 mx-auto\">\r\n    <br />\r\n    <br />\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h2 class=\"form-signin-heading\">login</h2>\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n\r\n\r\n        <form #login=\"ngForm\" (ngSubmit)=\"login.form.valid && signIn(login)\" novalidate>\r\n\r\n\r\n           <div class=\"alert\" [hidden]=\"!messageInfo\"  \r\n                [class.alert-success]=\"formSuccess\"  \r\n                [class.alert-danger]=\"formError\">\r\n               {{MessageType}}\r\n            </div> \r\n\r\n      \r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input required=\"required\" [pattern]=\"Regex.email\" [(ngModel)]=\"loginUserData.email\" name=\"email\"\r\n              #email='ngModel' [ngClass]=\"!email.valid &&  (email.touched || login.submitted) ? 'input-error' : '' \"\r\n              id=\"email\" class=\"form-control\" type=\"email\" placeholder=\"Email\">\r\n            <!--start-form-error-->\r\n            <div class=\"form-error alert alert-danger\"\r\n              *ngIf=\"!email.valid && (email.touched || (login.submitted && login.touched) )\">\r\n              <div *ngIf=\"email.errors.required\">\r\n                Email is required\r\n              </div>\r\n              <div *ngIf=\"email.errors.pattern\">\r\n                Email doesn't match the pattern\r\n              </div>\r\n            </div>\r\n            <!--end-form-error-->\r\n          </div>\r\n          <!--end-form-group -->\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input required=\"required\" [(ngModel)]=\"loginUserData.password\" name=\"password\"\r\n              #password='ngModel'\r\n              [ngClass]=\"!password.valid &&  (password.touched || login.submitted) ? 'input-error' : '' \"\r\n              id=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Password\">\r\n            <div class=\"form-error alert alert-danger\"\r\n              *ngIf=\"!password.valid && (password.touched || (login.submitted && login.touched))\">\r\n              <div *ngIf=\"password.errors.required\">\r\n                password is required\r\n              </div>\r\n\r\n            \r\n            </div>\r\n            <!--end-form-error-->\r\n          </div>\r\n\r\n\r\n          <!-- <br />\r\n          <p>{{login.value | json}} </p> -->\r\n          <div class=\"form-group\">\r\n            <!-- [disabled]=\"!login.valid\" -->\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n          </div>\r\n        </form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sign/component/register/register.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/sign/component/register/register.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 mx-auto\">\r\n\r\n\r\n<br/>\r\n<br/>\r\n<div class=\"card\">\r\n    <div class=\"card-header\"> <h2 class=\"form-signin-heading\">Register</h2> </div>\r\n    <div class=\"card-body\">\r\n\r\n       \r\n\r\n        <form #register=\"ngForm\" (ngSubmit)=\"register.form.valid && registerUser(register)\" novalidate>\r\n  \r\n  \r\n          <div class=\"alert\" [hidden]=\"!messageInfo\"  \r\n          [class.alert-success]=\"formSuccess\"  \r\n          [class.alert-danger]=\"formError\">\r\n         {{MessageType}}\r\n      </div> \r\n    \r\n            <div class=\"form-group\">\r\n                <label for=\"name\"> Name</label>\r\n                <input required=\"required\" [pattern]=\"Regex.alpha\" [(ngModel)]=\"registerUserData.name\" name=\"name\"\r\n                  #name='ngModel'\r\n                  [ngClass]=\"!name.valid &&  (name.touched || register.submitted) ? 'input-error' : '' \"\r\n                  id=\"name\" class=\"form-control\" type=\"text\" placeholder=\"Name\">\r\n                <!--start-form-error-->\r\n                <div class=\"form-error alert alert-danger\"\r\n                  *ngIf=\"!name.valid && (name.touched || (register.submitted && register.touched) )\">\r\n                  <div *ngIf=\"name.errors.required\">\r\n                      Name  is required\r\n                  </div>\r\n                  <div *ngIf=\"name.errors.pattern\">\r\n                      Name doesn't match the pattern\r\n                  </div>\r\n                </div>\r\n                <!--end-form-error-->\r\n              </div>\r\n              <!--end-form-group -->\r\n      \r\n    \r\n    \r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email Address</label>\r\n              <input required=\"required\" [pattern]=\"Regex.email\" [(ngModel)]=\"registerUserData.email\" name=\"email\"\r\n                #email='ngModel'\r\n                [ngClass]=\"!email.valid &&  (email.touched || register.submitted) ? 'input-error' : '' \"\r\n                id=\"email\" class=\"form-control\" type=\"email\" placeholder=\"Email Address\">\r\n              <!--start-form-error-->\r\n              <div class=\"form-error alert alert-danger\"\r\n                *ngIf=\"!email.valid && (email.touched || (register.submitted && register.touched) )\">\r\n                <div *ngIf=\"email.errors.required\">\r\n                    Email  is required\r\n                </div>\r\n                <div *ngIf=\"email.errors.pattern\">\r\n                    Email doesn't match the pattern\r\n                </div>\r\n              </div>\r\n              <!--end-form-error-->\r\n            </div>\r\n            <!--end-form-group -->\r\n    \r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input required=\"required\" [pattern]=\"Regex.pwd\" [(ngModel)]=\"registerUserData.password\" name=\"password\"\r\n                #password='ngModel'\r\n                [ngClass]=\"!password.valid &&  (password.touched || register.submitted) ? 'input-error' : '' \"\r\n                id=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Password\">\r\n              <div class=\"form-error alert alert-danger\"\r\n                *ngIf=\"!password.valid && (password.touched || (register.submitted && register.touched))\">\r\n                <div *ngIf=\"password.errors.required\">\r\n                  Password  is required\r\n                </div>\r\n              \r\n                <div *ngIf=\"password.errors.pattern\">\r\n                  Your Password must contain at least one capital letter, one number, one special character,  must be at least 8 characters\r\n                </div>\r\n              </div>\r\n              <!--end-form-error-->\r\n            </div>\r\n       \r\n    \r\n            <!-- <br /> -->\r\n            <!-- <p>{{register.value | json}} </p> -->\r\n            <div class=\"form-group\">\r\n                <!-- [disabled]=\"!register.valid\" -->\r\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            </div>\r\n          </form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div> \r\n   \r\n  </div>\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/static/component/no-access/no-access.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/static/component/no-access/no-access.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  no-access works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/static/component/not-found/not-found.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/static/component/not-found/not-found.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  not-found works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \r\n<h1>Home Page</h1>\r\n<p >\r\n  Welcome\r\n</p>\r\n<ul>\r\n  <li ><a routerLink=\"/register\">Register</a></li>\r\n  <li ><a  routerLink=\"/admin\">Admin</a></li>\r\n  <li ><a routerLink=\"/login\">Login</a></li>\r\n  <li ><a >Logout</a></li>\r\n</ul>\r\n -->\r\n\r\n<p *ngIf=\"authService.isLoggedIn()\">\r\n  Welcome <b>{{this.currentUser}} </b>\r\n</p>\r\n<!-- <ul>\r\n  <li *ngIf=\"!authService.isLoggedIn()\"><a routerLink=\"/register\">Register</a></li>\r\n  <li *ngIf=\"authService.isLoggedIn() && authService.currentUser\"><a  routerLink=\"/admin\">Admin</a></li>\r\n  <li *ngIf=\"!authService.isLoggedIn()\"><a routerLink=\"/login\">Login</a></li>\r\n  <li *ngIf=\"authService.isLoggedIn()\"><a   (click)=\"authService.logout()\">Logout</a></li>\r\n</ul> -->\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/product-card/product-card.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/product-card/product-card.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div *ngIf=\"product.imgUrl\">\n    <img class=\"card-img-top promain\" class=\"mx-auto d-block img-responsive img-fluid\" [src]=\"product.imgUrl\"\n      [alt]=\"product.title\">\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{product.title}}</h5>\n    <p class=\"card-text\">{{product.price  }} </p>\n    <!-- {{product.price | currency:'USD':true }} -->\n    <p class=\"card-text\">{{product.category  }}</p>\n  </div>\n  <div class=\"card-footer\" *ngIf=\"showActions\"> \n\n  <button *ngIf=\"shoppingCart === 0 || shoppingCart == undefined; else updateQuantity\"  class=\"btn btn-primary btn-block\"\n  (click)=\"addToCart(1)\">Add to Cart</button>\n\n  \n  <ng-template #updateQuantity> \n   <div class=\"row no-gutters\">\n      <div class=\"col-2\">\n        <button class=\"btn btn-secondary btn-block\" (click)=\"addToCart(-1)\"><b>-</b></button>\n      </div>\n       <div class=\"col text-center pt-2\"> <b>{{shoppingCart}} </b> in Cart</div> \n      <div class=\"col-2\">\n        <button class=\"btn btn-secondary btn-block\" (click)=\"addToCart(+1)\"> <b>+</b></button>\n      </div>\n   </div>\n  </ng-template>\n\n  \n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/total-items-count/total-items-count.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/total-items-count/total-items-count.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{cartItem}}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/check-out/check-out.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/check-out/check-out.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>check-out works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/my-orders/my-orders.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/my-orders/my-orders.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"pb-5\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 p-5 bg-white rounded shadow-sm mb-5\">\n\n          <!-- Shopping cart table -->\n          <div class=\"table-responsive\" >\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\" class=\"border-0 bg-light\">\n                    <div class=\"p-2 px-3 text-uppercase\">Product</div>\n                  </th>\n                  <th scope=\"col\" class=\"border-0 bg-light\">\n                    <div class=\"py-2 text-uppercase\">Price</div>\n                  </th>\n                  <th scope=\"col\" class=\"border-0 bg-light\">\n                    <div class=\"py-2 text-uppercase\">Quantity</div>\n                  </th>\n                  <th scope=\"col\" class=\"border-0 bg-light\">\n                    <div class=\"py-2 text-uppercase\">Remove</div>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let item of cartItem; let i=index\">\n                    <tr  *ngIf=\"!item.quantity == 0\">\n                    <th scope=\"row\">\n                        <div class=\"p-2\">\n                        <img src=\"{{item.imgUrl}}\" alt=\"{{item.title}}\" width=\"70\" class=\"img-fluid rounded shadow-sm\">\n                        <div class=\"ml-3 d-inline-block align-middle\">\n                            <h5 class=\"mb-0\">\n                                <a href=\"#\" class=\"text-dark d-inline-block\">{{item.title}}</a></h5>\n                                <span class=\"text-muted font-weight-normal font-italic\">Category: {{item.category}}</span>\n                        </div>\n                        </div>\n                    </th>\n                    <td class=\"align-middle\"><strong>${{item.price}}</strong></td>\n                    <td class=\"align-middle\"><strong>{{item.quantity}}</strong></td>\n                    <td class=\"align-middle\"><a href=\"#\" class=\"text-dark\"><i class=\"fa fa-trash\"></i></a>\n                    </td>\n                    </tr>\n                </ng-container>\n              </tbody>\n            </table>\n          </div>\n          <!-- End -->\n      </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/order-success/order-success.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/order-success/order-success.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>order-success works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/products/product-filter/product-filter.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/products/product-filter/product-filter.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-group\">\n\n  <a class=\"list-group-item list-group-item-action\" \n     [class.active]=\"!category\" \n     routerLink=\"/\"> \n     All Product\n    </a>\n\n  <a class=\"list-group-item list-group-item-action\" \n     *ngFor=\"let cat of CategoryList\" \n     [class.active]=\"category === cat\"\n     routerLink=\"/\" \n     [queryParams]=\"{category:cat}\"> {{cat}}\n  </a>\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/products/products.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/products/products.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<div class=\"row\">\n    <div class=\"col-md-3  mt-3\">\n      <div class=\"sticky-top\"> <product-filter [category]=\"category\"> </product-filter> </div>  \n    </div>\n    <div class=\"col-md-9 promain\">\n        <div class=\"loading-product\" [hidden]=\"!loading\"> \n            <img src=\"https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796\" alt=\"Loading Product\"/> \n         </div>\n        <div class=\"row\">\n            <ng-container *ngFor=\"let post of filteredProducts; let i=index\">\n                <div class=\"col-md-6 mt-3\">\n                <product-card [product]=\"post\" [show-actions]=\"true\" [shopping-cart]=\"post.quantity\"> </product-card>\n                </div>\n                <div *ngIf=\"(i+1) % 2 === 0\" class=\"w-100\"></div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/shopping-cart/shopping-cart.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/shopping-cart/shopping-cart.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2> Shopping Cart</h2>\n<br/>\n<ng-container>\n\n    <p>You have <total-items-count> </total-items-count>  items in your shopping cart.</p>  \n\n\n<my-orders> </my-orders>\n\n</ng-container>\n\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _component_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/admin-orders/admin-orders.component */ "./src/app/admin/component/admin-orders/admin-orders.component.ts");
/* harmony import */ var _component_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/admin-products/admin-products.component */ "./src/app/admin/component/admin-products/admin-products.component.ts");
/* harmony import */ var _component_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/product-form/product-form.component */ "./src/app/admin/component/product-form/product-form.component.ts");
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ "./src/app/admin/services/admin-auth-guard.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/admin/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/admin/services/auth.service.ts");
/* harmony import */ var _shopping_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shopping/services/token-interceptor.service */ "./src/app/shopping/services/token-interceptor.service.ts");












let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _component_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductFormComponent"],
            _component_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_5__["AdminOrdersComponent"],
            _component_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__["AdminProductsComponent"]
        ],
        exports: [
        // ProductFormComponent,
        //  AdminOrdersComponent,
        //  AdminProductsComponent 
        ],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
            _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AdminAuthGuard"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _shopping_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptorService"],
                multi: true
            }
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: 'admin',
                    component: _component_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_5__["AdminOrdersComponent"],
                    canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                    // canActivate: [AuthGuard, AdminAuthGuard]
                },
                {
                    path: 'admin/products',
                    component: _component_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__["AdminProductsComponent"],
                    canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                    // canActivate: [AuthGuard, AdminAuthGuard]
                },
                {
                    path: 'admin/products/new',
                    component: _component_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductFormComponent"],
                    canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                    // canActivate: [AuthGuard, AdminAuthGuard]
                },
                {
                    path: 'admin/products/:_id',
                    component: _component_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductFormComponent"],
                    canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                    // canActivate: [AuthGuard, AdminAuthGuard]
                },
            ])
        ],
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/component/admin-orders/admin-orders.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/component/admin-orders/admin-orders.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudC9hZG1pbi1vcmRlcnMvYWRtaW4tb3JkZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/component/admin-orders/admin-orders.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/component/admin-orders/admin-orders.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminOrdersComponent = class AdminOrdersComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/admin-orders/admin-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-orders.component.scss */ "./src/app/admin/component/admin-orders/admin-orders.component.scss")).default]
    })
], AdminOrdersComponent);



/***/ }),

/***/ "./src/app/admin/component/admin-products/admin-products.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/component/admin-products/admin-products.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudC9hZG1pbi1wcm9kdWN0cy9hZG1pbi1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/component/admin-products/admin-products.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/component/admin-products/admin-products.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shopping/services/server-request.service */ "./src/app/shopping/services/server-request.service.ts");
/* harmony import */ var src_app_shared_common_not_found_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/not-found-error */ "./src/app/shared/common/not-found-error.ts");




let AdminProductsComponent = class AdminProductsComponent {
    constructor(serverRequest) {
        this.serverRequest = serverRequest;
    }
    ngOnInit() {
        this.showPost();
    }
    // showPost
    showPost() {
        this.serverRequest.getAll('products')
            .subscribe(res => {
            this.posts = res;
        }, (error) => {
            if (error.status === 404) {
                console.log('Http failure response for');
            }
            else {
                throw error;
            }
        });
    }
    // deletePost
    deleteCourse(post) {
        if (confirm('Are you sure you want to delete this products?')) {
            this.serverRequest.delete('products', post._id)
                .subscribe(res => {
                if (res) {
                    document.getElementById(post._id).remove();
                }
            }, (error) => {
                if (error instanceof src_app_shared_common_not_found_error__WEBPACK_IMPORTED_MODULE_3__["NotFoundError"]) {
                    console.log('Request Data Wrong ', 'Http failure response');
                }
                else {
                    throw error;
                }
            });
        }
    }
};
AdminProductsComponent.ctorParameters = () => [
    { type: src_app_shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_2__["ServerRequestService"] }
];
AdminProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/admin-products/admin-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-products.component.scss */ "./src/app/admin/component/admin-products/admin-products.component.scss")).default]
    })
], AdminProductsComponent);



/***/ }),

/***/ "./src/app/admin/component/product-form/product-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/component/product-form/product-form.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudC9wcm9kdWN0LWZvcm0vcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/component/product-form/product-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/component/product-form/product-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shopping_services_regex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shopping/services/regex.service */ "./src/app/shopping/services/regex.service.ts");
/* harmony import */ var src_app_shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shopping/services/server-request.service */ "./src/app/shopping/services/server-request.service.ts");
/* harmony import */ var src_app_shared_common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/common/bad-input */ "./src/app/shared/common/bad-input.ts");






let ProductFormComponent = class ProductFormComponent {
    constructor(serverRequest, route, regexService, router) {
        this.serverRequest = serverRequest;
        this.route = route;
        this.regexService = regexService;
        this.router = router;
        this.formSuccess = false;
        this.MessageType = '';
        this.messageInfo = false;
        this.formError = false;
        this.newProduct = {
            title: '',
            price: '',
            category: '',
            imgUrl: ''
        };
    }
    ngOnInit() {
        this.Regex = {
            alpha: this.regexService.alphaRegex,
            email: this.regexService.emailRegex,
            pwd: this.regexService.pwdRegex,
            number: this.regexService.numberRegex,
            zip: this.regexService.zipRegex
        };
        this.route.paramMap
            .subscribe(params => {
            this.paramId = params.get('_id');
            if (this.paramId) {
                this.getdetail(this.paramId);
            }
            console.log(this.paramId);
        });
    }
    // newproductsubmit
    createCourse(newCourse) {
        this.serverRequest.create('products', newCourse.value)
            .subscribe(res => {
            if (res) {
                newCourse.reset();
                this.messageInfo = true;
                this.formSuccess = true;
                this.MessageType = 'New Product Created';
                setTimeout(() => {
                    this.router.navigate(['./admin/products']);
                }, 1000);
            }
        }, (error) => {
            if (error instanceof src_app_shared_common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"]) {
                console.log('400', error);
            }
            else {
                throw error;
            }
        });
    }
    getdetail(id) {
        this.serverRequest.getAll('products/' + id)
            .subscribe(res => {
            this.newProduct = res;
            console.log('this.newProduct', this.newProduct);
        }, (error) => {
            if (error.status === 404) {
                console.log('Http failure response for');
            }
            else {
                throw error;
            }
        });
    }
    // newproductsubmit
    updateCourse(newCourse) {
        this.serverRequest.update(`products/${this.paramId}`, newCourse.value)
            .subscribe(res => {
            if (res) {
                //newCourse.reset();
                this.messageInfo = true;
                this.formSuccess = true;
                this.MessageType = 'Updated';
                setTimeout(() => {
                    this.router.navigate(['./admin/products']);
                }, 1000);
            }
        }, (error) => {
            console.log('error', error);
            this.messageInfo = true;
            this.formError = true;
            this.MessageType = error.error;
            //newCourse.reset();
        });
    }
};
ProductFormComponent.ctorParameters = () => [
    { type: src_app_shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_4__["ServerRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shopping_services_regex_service__WEBPACK_IMPORTED_MODULE_3__["RegexService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/product-form/product-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-form.component.scss */ "./src/app/admin/component/product-form/product-form.component.scss")).default]
    })
], ProductFormComponent);



/***/ }),

/***/ "./src/app/admin/services/admin-auth-guard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/services/admin-auth-guard.service.ts ***!
  \************************************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/admin/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AdminAuthGuard = class AdminAuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        const user = this.authService.currentUser;
        // if (user) {console.log('user', user);  return true; }
        if (user && user) {
            return true;
        }
        else {
            this.router.navigate(['./no-access']);
            return false;
        }
    }
};
AdminAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AdminAuthGuard);



/***/ }),

/***/ "./src/app/admin/services/auth-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/services/auth-guard.service.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/admin/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['./login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/admin/services/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'https://myproductdev.herokuapp.com/api/';
    }
    login(endpoint, resource) {
        return this.http.post(this.url + endpoint, JSON.stringify(resource), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            console.log('response', response);
            const result = response;
            if (result && result.token) {
                localStorage.setItem('token', result.token);
                return true;
            }
            return false;
        }));
    }
    logout() {
        localStorage.removeItem('token');
        window.location.href = "./";
        // this.router.navigate(['./']);
    }
    isLoggedIn() {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])();
        // const jwtHelper = new JwtHelper();
        // const token = localStorage.getItem('token');
        // if (!token) {
        //   console.log('token', token);
        //   return false;
        // }
        // const expirationDate = jwtHelper.getTokenExpirationDate(token);
        // const isExpired = jwtHelper.isTokenExpired(token);
        // console.log('expirationDate', jwtHelper.getTokenExpirationDate(token));
        // console.log('isExpired', isExpired);
        // console.log('token isExpired', token);
        // return !isExpired;
    }
    get currentUser() {
        const token = localStorage.getItem('token');
        if (!token) {
            return null;
        }
        const jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelper"]();
        if (jwtHelper.decodeToken(token)) {
            const isAdmin = jwtHelper.decodeToken(token);
            return isAdmin.tokenpro.admin;
        }
        else {
            return null;
        }
        // console.log(jwtHelper.decodeToken(token));
        // return jwtHelper.decodeToken(token);
    }
    getToken() {
        console.log('getItem token', localStorage.getItem('token'));
        const token = localStorage.getItem('token');
        return token;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/admin/services/login-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/services/login-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: loginAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAuthGuard", function() { return loginAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/admin/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let loginAuthGuard = class loginAuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        const user = this.authService.currentUser;
        // if (user) {console.log('user', user);  return true; }
        if (!user && !user) {
            return true;
        }
        else {
            this.router.navigate(['./admin/products']);
            return false;
        }
    }
};
loginAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
loginAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], loginAuthGuard);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/services/auth.service */ "./src/app/admin/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'angLatest';
        this.courses = ['All', 'Product'];
        this.viewModel = 'map';
    }
    loadProduct() {
        this.products = [
            {
                id: '1',
                name: 'Product 1'
            },
            {
                id: '2',
                name: 'Product 2'
            },
            {
                id: '3',
                name: 'Product 3'
            }
        ];
    }
    trackProduct(value, product) {
        return product ? product.id : undefined;
    }
};
AppComponent.ctorParameters = () => [
    { type: _admin_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_static_component_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/static/component/no-access/no-access.component */ "./src/app/core/static/component/no-access/no-access.component.ts");
/* harmony import */ var _core_static_component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/static/component/not-found/not-found.component */ "./src/app/core/static/component/not-found/not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_common_validators_app_error_handler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/common/validators/app-error-handler */ "./src/app/shared/common/validators/app-error-handler.ts");
/* harmony import */ var _shared_directive_input_format_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/directive/input-format.directive */ "./src/app/shared/directive/input-format.directive.ts");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shopping/shopping.module */ "./src/app/shopping/shopping.module.ts");
/* harmony import */ var _shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shopping/services/server-request.service */ "./src/app/shopping/services/server-request.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _core_static_component_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_9__["NoAccessComponent"],
            _core_static_component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
            _shared_directive_input_format_directive__WEBPACK_IMPORTED_MODULE_13__["InputFormatDirective"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_16__["ShoppingModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: 'no-access', component: _core_static_component_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_9__["NoAccessComponent"] },
                { path: '**', component: _core_static_component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] }
            ])
        ],
        providers: [
            _shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_17__["ServerRequestService"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _shared_common_validators_app_error_handler__WEBPACK_IMPORTED_MODULE_12__["AppErrorHandler"] },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_services_login_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin/services/login-guard.service */ "./src/app/admin/services/login-guard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_component_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign/component/register/register.component */ "./src/app/core/sign/component/register/register.component.ts");
/* harmony import */ var _sign_component_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign/component/login/login.component */ "./src/app/core/sign/component/login/login.component.ts");
/* harmony import */ var _header_bs_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/bs-navbar.component */ "./src/app/core/header/bs-navbar.component.ts");








let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _header_bs_navbar_component__WEBPACK_IMPORTED_MODULE_7__["BsNavbarComponent"],
            _sign_component_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _sign_component_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
        ],
        exports: [
            _header_bs_navbar_component__WEBPACK_IMPORTED_MODULE_7__["BsNavbarComponent"]
        ],
        providers: [],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                { path: 'register', component: _sign_component_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], canActivate: [_admin_services_login_guard_service__WEBPACK_IMPORTED_MODULE_1__["loginAuthGuard"]] },
                { path: 'login', component: _sign_component_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_admin_services_login_guard_service__WEBPACK_IMPORTED_MODULE_1__["loginAuthGuard"]] },
            ])
        ],
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/header/bs-navbar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/core/header/bs-navbar.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2JzLW5hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/header/bs-navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/header/bs-navbar.component.ts ***!
  \****************************************************/
/*! exports provided: BsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsNavbarComponent", function() { return BsNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/services/auth.service */ "./src/app/admin/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let BsNavbarComponent = class BsNavbarComponent {
    constructor(authService) {
        this.authService = authService;
    }
};
BsNavbarComponent.ctorParameters = () => [
    { type: _admin_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
BsNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bs-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bs-navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/bs-navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bs-navbar.component.scss */ "./src/app/core/header/bs-navbar.component.scss")).default]
    })
], BsNavbarComponent);

/*https://stackblitz.com/edit/angular-interval-observable-demo?file=app%2Fapp.component.ts */


/***/ }),

/***/ "./src/app/core/sign/component/login/login.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core/sign/component/login/login.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lnbi9jb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/sign/component/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/sign/component/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../admin/services/auth.service */ "./src/app/admin/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shopping_services_regex_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shopping/services/regex.service */ "./src/app/shopping/services/regex.service.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, router, route, regexService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.regexService = regexService;
        this.formSuccess = false;
        this.MessageType = '';
        this.messageInfo = false;
        this.formError = false;
        this.loginUserData = {
            email: '',
            password: ''
        };
        this.Regex = {
            alpha: regexService.alphaRegex,
            email: regexService.emailRegex,
            pwd: regexService.pwdRegex,
            number: regexService.numberRegex,
            zip: regexService.zipRegex
        };
    }
    signIn(newCourse) {
        console.log('login');
        this.authService.login('auth', this.loginUserData)
            .subscribe(res => {
            if (res) {
                this.messageInfo = true;
                this.formSuccess = true;
                this.MessageType = 'Success';
                console.log('error');
                newCourse.reset();
                const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
                setTimeout(() => {
                    this.router.navigate([returnUrl || './admin/products']);
                }, 100);
            }
            else {
                this.invalidLogin = true;
            }
        }, (error) => {
            console.log('error', error);
            this.messageInfo = true;
            this.formError = true;
            this.MessageType = error.error;
            //newCourse.reset();
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _admin_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shopping_services_regex_service__WEBPACK_IMPORTED_MODULE_4__["RegexService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sign/component/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/core/sign/component/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/core/sign/component/register/register.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/core/sign/component/register/register.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lnbi9jb21wb25lbnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/sign/component/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/sign/component/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shopping_services_regex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shopping/services/regex.service */ "./src/app/shopping/services/regex.service.ts");
/* harmony import */ var src_app_shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shopping/services/server-request.service */ "./src/app/shopping/services/server-request.service.ts");





let RegisterComponent = class RegisterComponent {
    constructor(serverRequest, regexService, router) {
        this.serverRequest = serverRequest;
        this.regexService = regexService;
        this.router = router;
        this.MessageType = '';
        this.formSuccess = false;
        this.messageInfo = false;
        this.formError = false;
        this.registerUserData = {
            name: '',
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.Regex = {
            alpha: this.regexService.alphaRegex,
            email: this.regexService.emailRegex,
            pwd: this.regexService.pwdRegex,
            number: this.regexService.numberRegex,
            zip: this.regexService.zipRegex
        };
    }
    // registerUser() {
    //   console.log(this.registerUserData);
    // }
    registerUser(newCourse) {
        this.MessageType = '';
        this.messageInfo = false;
        this.formError = false;
        this.serverRequest.create('users', this.registerUserData)
            .subscribe(res => {
            console.log('res', res);
            if (res) {
                this.messageInfo = true;
                this.formSuccess = true;
                this.MessageType = 'Success';
                newCourse.reset();
                setTimeout(() => {
                    this.router.navigate(['./login']);
                }, 1000);
            }
        }, (error) => {
            console.log('error', error.originalError.error);
            this.messageInfo = true;
            this.formError = true;
            this.MessageType = error.originalError.error;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_4__["ServerRequestService"] },
    { type: src_app_shopping_services_regex_service__WEBPACK_IMPORTED_MODULE_3__["RegexService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sign/component/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/core/sign/component/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/core/static/component/no-access/no-access.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/static/component/no-access/no-access.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc3RhdGljL2NvbXBvbmVudC9uby1hY2Nlc3Mvbm8tYWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/static/component/no-access/no-access.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/static/component/no-access/no-access.component.ts ***!
  \************************************************************************/
/*! exports provided: NoAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessComponent", function() { return NoAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoAccessComponent = class NoAccessComponent {
    constructor() { }
    ngOnInit() {
    }
};
NoAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-access',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-access.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/static/component/no-access/no-access.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-access.component.scss */ "./src/app/core/static/component/no-access/no-access.component.scss")).default]
    })
], NoAccessComponent);



/***/ }),

/***/ "./src/app/core/static/component/not-found/not-found.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/static/component/not-found/not-found.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc3RhdGljL2NvbXBvbmVudC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/static/component/not-found/not-found.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/static/component/not-found/not-found.component.ts ***!
  \************************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/static/component/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/core/static/component/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shopping/services/server-request.service */ "./src/app/shopping/services/server-request.service.ts");
/* harmony import */ var _admin_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin/services/auth.service */ "./src/app/admin/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let HomeComponent = class HomeComponent {
    constructor(authService, serverRequest) {
        this.authService = authService;
        this.serverRequest = serverRequest;
        this.isLogin = authService.isLoggedIn();
        console.log('authService.isLoggedIn', authService.isLoggedIn());
        console.log('authService.currentUser', authService.currentUser);
        if (authService.isLoggedIn()) {
            this.showUser();
        }
    }
    // showPost
    showUser() {
        this.serverRequest.getUser('users/me')
            .subscribe(res => {
            console.log('resuser', res);
            this.currentUser = res;
            this.currentUser = this.currentUser.name;
        }, (error) => {
            if (error.status === 404) {
                console.log('Http failure response for');
            }
            else {
                throw error;
            }
        });
    }
    ngOnInit() {
        // this.isAdmin = this.authService.currentUser();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _admin_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_1__["ServerRequestService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/shared/common/app.error.ts":
/*!********************************************!*\
  !*** ./src/app/shared/common/app.error.ts ***!
  \********************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppError {
    constructor(originalError) {
        this.originalError = originalError;
    }
}
AppError.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/common/bad-input.ts":
/*!********************************************!*\
  !*** ./src/app/shared/common/bad-input.ts ***!
  \********************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BadInput {
    constructor(originalError) {
        this.originalError = originalError;
        console.log(originalError);
    }
}
BadInput.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/common/not-found-error.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/common/not-found-error.ts ***!
  \**************************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NotFoundError {
    constructor(originalError) {
        this.originalError = originalError;
    }
}
NotFoundError.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/common/validators/app-error-handler.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/common/validators/app-error-handler.ts ***!
  \***************************************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppErrorHandler {
    handleError(error) {
        // alert('An unexpected error occurred.');
        // console.log(error);
    }
}


/***/ }),

/***/ "./src/app/shared/component/product-card/product-card.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/component/product-card/product-card.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/component/product-card/product-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/product-card/product-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shopping/services/server-request.service */ "./src/app/shopping/services/server-request.service.ts");
/* harmony import */ var src_app_shopping_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shopping/services/cart.service */ "./src/app/shopping/services/cart.service.ts");




let ProductCardComponent = class ProductCardComponent {
    constructor(serverRequest, cartService) {
        this.serverRequest = serverRequest;
        this.cartService = cartService;
        this.showActions = true;
    }
    ngOnInit() {
        // console.log(this.shoppingCart);
    }
    addToCart(changeQuantity) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log('this.product.quantity', this.product);
            if (isNaN(this.product.quantity)) {
                this.product.quantity = 1;
            }
            else {
                this.product.quantity = this.shoppingCart += changeQuantity;
            }
            let cartQuantity = yield this.cartService.CreateCart(this.product);
            console.log('cartQuantity', cartQuantity);
            this.shoppingCart = cartQuantity;
        });
    }
};
ProductCardComponent.ctorParameters = () => [
    { type: src_app_shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_2__["ServerRequestService"] },
    { type: src_app_shopping_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product')
], ProductCardComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('show-actions')
], ProductCardComponent.prototype, "showActions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('shopping-cart')
], ProductCardComponent.prototype, "shoppingCart", void 0);
ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'product-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/product-card/product-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-card.component.scss */ "./src/app/shared/component/product-card/product-card.component.scss")).default]
    })
], ProductCardComponent);



/***/ }),

/***/ "./src/app/shared/component/total-items-count/total-items-count.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/component/total-items-count/total-items-count.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvdG90YWwtaXRlbXMtY291bnQvdG90YWwtaXRlbXMtY291bnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/component/total-items-count/total-items-count.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/component/total-items-count/total-items-count.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TotalItemsCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalItemsCountComponent", function() { return TotalItemsCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shopping_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shopping/services/cart.service */ "./src/app/shopping/services/cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TotalItemsCountComponent = class TotalItemsCountComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartItem = 0;
    }
    ngOnInit() {
        this.check();
    }
    check() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let getItem = yield this.cartService.getCart();
            this.cartItem = getItem.totalIteam;
        });
    }
};
TotalItemsCountComponent.ctorParameters = () => [
    { type: src_app_shopping_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }
];
TotalItemsCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'total-items-count',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./total-items-count.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/total-items-count/total-items-count.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./total-items-count.component.scss */ "./src/app/shared/component/total-items-count/total-items-count.component.scss")).default]
    })
], TotalItemsCountComponent);



/***/ }),

/***/ "./src/app/shared/directive/input-format.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directive/input-format.directive.ts ***!
  \************************************************************/
/*! exports provided: InputFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormatDirective", function() { return InputFormatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputFormatDirective = class InputFormatDirective {
    constructor() { }
};
InputFormatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appInputFormat]'
    })
], InputFormatDirective);



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");







const MaterialComponents = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [MaterialComponents],
        exports: [MaterialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/product-card/product-card.component */ "./src/app/shared/component/product-card/product-card.component.ts");
/* harmony import */ var _component_total_items_count_total_items_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/total-items-count/total-items-count.component */ "./src/app/shared/component/total-items-count/total-items-count.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"], _component_total_items_count_total_items_count_component__WEBPACK_IMPORTED_MODULE_5__["TotalItemsCountComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ],
        exports: [_component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"], _component_total_items_count_total_items_count_component__WEBPACK_IMPORTED_MODULE_5__["TotalItemsCountComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shopping/component/check-out/check-out.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shopping/component/check-out/check-out.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudC9jaGVjay1vdXQvY2hlY2stb3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shopping/component/check-out/check-out.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/component/check-out/check-out.component.ts ***!
  \*********************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckOutComponent = class CheckOutComponent {
    constructor() { }
    ngOnInit() {
    }
};
CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-check-out',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./check-out.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/check-out/check-out.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./check-out.component.scss */ "./src/app/shopping/component/check-out/check-out.component.scss")).default]
    })
], CheckOutComponent);



/***/ }),

/***/ "./src/app/shopping/component/my-orders/my-orders.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shopping/component/my-orders/my-orders.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudC9teS1vcmRlcnMvbXktb3JkZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shopping/component/my-orders/my-orders.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/component/my-orders/my-orders.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shopping_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shopping/services/cart.service */ "./src/app/shopping/services/cart.service.ts");



let MyOrdersComponent = class MyOrdersComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let getItem = yield this.cartService.getCart();
            this.cartItem = getItem.CartProduct;
            console.log('this.cartItem', this.cartItem);
        });
    }
};
MyOrdersComponent.ctorParameters = () => [
    { type: src_app_shopping_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'my-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/my-orders/my-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-orders.component.scss */ "./src/app/shopping/component/my-orders/my-orders.component.scss")).default]
    })
], MyOrdersComponent);



/***/ }),

/***/ "./src/app/shopping/component/order-success/order-success.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping/component/order-success/order-success.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudC9vcmRlci1zdWNjZXNzL29yZGVyLXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shopping/component/order-success/order-success.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shopping/component/order-success/order-success.component.ts ***!
  \*****************************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderSuccessComponent = class OrderSuccessComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-success',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/order-success/order-success.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-success.component.scss */ "./src/app/shopping/component/order-success/order-success.component.scss")).default]
    })
], OrderSuccessComponent);



/***/ }),

/***/ "./src/app/shopping/component/products/product-filter/product-filter.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/shopping/component/products/product-filter/product-filter.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudC9wcm9kdWN0cy9wcm9kdWN0LWZpbHRlci9wcm9kdWN0LWZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shopping/component/products/product-filter/product-filter.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shopping/component/products/product-filter/product-filter.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductFilterComponent = class ProductFilterComponent {
    constructor() {
        this.CategoryList = ['Bread', 'Dairy', 'Fruits', 'Seasonings and Spices', 'Vegetables'];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('category')
], ProductFilterComponent.prototype, "category", void 0);
ProductFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'product-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/products/product-filter/product-filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-filter.component.scss */ "./src/app/shopping/component/products/product-filter/product-filter.component.scss")).default]
    })
], ProductFilterComponent);



/***/ }),

/***/ "./src/app/shopping/component/products/products.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/component/products/products.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shopping/component/products/products.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shopping/component/products/products.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shopping_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shopping/services/cart.service */ "./src/app/shopping/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shopping/services/server-request.service */ "./src/app/shopping/services/server-request.service.ts");





let ProductsComponent = class ProductsComponent {
    constructor(serverRequest, route, cartService) {
        this.serverRequest = serverRequest;
        this.route = route;
        this.cartService = cartService;
        this.products = [];
        this.filteredProducts = [];
        this.loading = true;
        let ItemCart = this.GetCartItem();
        ItemCart.then(quan => {
            this.cartItem = quan;
        });
        this.serverRequest.getAll('products')
            .subscribe(res => {
            console.log('params res', res);
            if (res) {
                this.loading = false;
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
            if (this.products) {
                this.route.queryParamMap
                    .subscribe(params => {
                    console.log('params', params);
                    this.category = params.get('category');
                    this.filteredProducts = (this.category) ? this.products.filter(prod => prod.category === this.category) : this.products;
                    console.log('products', this.filteredProducts);
                });
            }
        }, (error) => {
            if (error.status === 404) {
                console.log('Http failure response for');
            }
            else {
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
    GetCartItem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let getItem = yield this.cartService.getCart();
            return getItem.CartProduct;
        });
    }
};
ProductsComponent.ctorParameters = () => [
    { type: src_app_shopping_services_server_request_service__WEBPACK_IMPORTED_MODULE_4__["ServerRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shopping_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/shopping/component/products/products.component.scss")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/shopping/component/shopping-cart/shopping-cart.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping/component/shopping-cart/shopping-cart.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudC9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shopping/component/shopping-cart/shopping-cart.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shopping/component/shopping-cart/shopping-cart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShoppingCartComponent = class ShoppingCartComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/component/shopping-cart/shopping-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/shopping/component/shopping-cart/shopping-cart.component.scss")).default]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/shopping/services/cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shopping/services/cart.service.ts ***!
  \***************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _server_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-request.service */ "./src/app/shopping/services/server-request.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CartService = class CartService {
    constructor(serverRequest) {
        this.serverRequest = serverRequest;
        this.cartSum = 0;
    }
    getCart() {
        return new Promise((resolve, reject) => {
            this.serverRequest.getAll('carts')
                .subscribe((res) => {
                this.cartObject = res;
                //console.log('this.cartObject', this.cartObject);
                this.cartSum = 0;
                // get cart number
                for (let i = 0; i < this.cartObject.length; i++) {
                    this.cartSum += this.cartObject[i].quantity;
                }
                // console.log('cartsum', this.cartSum);
                let cartIteam = { totalIteam: this.cartSum, CartProduct: this.cartObject };
                resolve(cartIteam);
            });
        });
    }
    CreateCart(product) {
        // console.log('product', product.quantity);
        return new Promise((resolve, reject) => {
            let addNewCart = {
                cartId: product._id,
                title: product.title,
                price: product.price,
                category: product.category,
                quantity: product.quantity,
                imgUrl: product.imgUrl,
            };
            this.serverRequest.create('carts', addNewCart)
                .subscribe((res) => {
                const result = {
                    key: res.cartId,
                    quantity: res.quantity,
                };
                // console.log('res', res);
                //this.getCart();
                resolve(result.quantity);
            });
        });
    }
    ;
};
CartService.ctorParameters = () => [
    { type: _server_request_service__WEBPACK_IMPORTED_MODULE_1__["ServerRequestService"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/shopping/services/data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shopping/services/data.service.ts ***!
  \***************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_common_app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/common/app.error */ "./src/app/shared/common/app.error.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// @Injectable({
//   providedIn: 'root'
// })
class DataService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
    }
    // Get Service===============================================================
    getAll(endpoint) {
        return this.http.get(this.url + endpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Create Service===============================================================
    create(endpoint, resource) {
        return this.http.post(this.url + endpoint, JSON.stringify(resource), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getUser(endpoint) {
        return this.http.get(this.url + endpoint, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // update Service===============================================================
    update(endpoint, resource) {
        return this.http.put(this.url + endpoint, JSON.stringify(resource), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Delete Service===============================================================
    delete(endpoint, deleteId) {
        return this.http.delete(this.url + endpoint + '/' + deleteId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        // if (error.status === 400 ) {
        //   return throwError(new BadInput(error.json()));
        // }
        // if (error.status === 404 ) {
        //   return throwError(new NotFoundError(error));
        // }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _shared_common_app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"](error));
    }
}
DataService.ctorParameters = () => [
    { type: String },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];


/***/ }),

/***/ "./src/app/shopping/services/regex.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shopping/services/regex.service.ts ***!
  \****************************************************/
/*! exports provided: RegexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexService", function() { return RegexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegexService = class RegexService {
    constructor() {
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.pwdRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!#%*?&]{8,}/;
        this.alphaRegex = /^[a-zA-z ]{1,}$/;
        this.numberRegex = /^[0-9]{10,10}$/;
        this.zipRegex = /^[0-9]{5,6}$/;
    }
    getRegex() {
        return [this.emailRegex, this.pwdRegex, this.alphaRegex, this.numberRegex, this.zipRegex];
    }
};
RegexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegexService);



/***/ }),

/***/ "./src/app/shopping/services/server-request.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shopping/services/server-request.service.ts ***!
  \*************************************************************/
/*! exports provided: ServerRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerRequestService", function() { return ServerRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/shopping/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let ServerRequestService = class ServerRequestService extends _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] {
    // private local = 'http://localhost:3000/api/';
    // private server = 'https://jsonplaceholder.typicode.com/posts';
    constructor(http) {
        super(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ApiUrl, http);
    }
};
ServerRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ServerRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    })
], ServerRequestService);



/***/ }),

/***/ "./src/app/shopping/services/token-interceptor.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shopping/services/token-interceptor.service.ts ***!
  \****************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        const jwt = localStorage.getItem('token');
        if (!!jwt) {
            req = req.clone({
                setHeaders: {
                    Authorization: `${jwt}`
                }
            });
        }
        return next.handle(req);
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptorService);



/***/ }),

/***/ "./src/app/shopping/shopping.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.module.ts ***!
  \*********************************************/
/*! exports provided: ShoppingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingModule", function() { return ShoppingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_services_login_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin/services/login-guard.service */ "./src/app/admin/services/login-guard.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _component_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/check-out/check-out.component */ "./src/app/shopping/component/check-out/check-out.component.ts");
/* harmony import */ var _component_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/my-orders/my-orders.component */ "./src/app/shopping/component/my-orders/my-orders.component.ts");
/* harmony import */ var _component_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/order-success/order-success.component */ "./src/app/shopping/component/order-success/order-success.component.ts");
/* harmony import */ var _component_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/products/products.component */ "./src/app/shopping/component/products/products.component.ts");
/* harmony import */ var _component_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/shopping-cart/shopping-cart.component */ "./src/app/shopping/component/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _component_products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/products/product-filter/product-filter.component */ "./src/app/shopping/component/products/product-filter/product-filter.component.ts");
/* harmony import */ var _services_server_request_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/server-request.service */ "./src/app/shopping/services/server-request.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/shopping/services/cart.service.ts");
















let ShoppingModule = class ShoppingModule {
};
ShoppingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _component_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
            _component_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingCartComponent"],
            _component_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_8__["CheckOutComponent"],
            _component_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_9__["MyOrdersComponent"],
            _component_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_10__["OrderSuccessComponent"],
            _component_products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_13__["ProductFilterComponent"]
        ],
        exports: [],
        providers: [
            _services_server_request_service__WEBPACK_IMPORTED_MODULE_14__["ServerRequestService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_15__["CartService"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                {
                    path: '',
                    component: _component_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"], canActivate: [_admin_services_login_guard_service__WEBPACK_IMPORTED_MODULE_1__["loginAuthGuard"]]
                },
                { path: 'shoppingcart', component: _component_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingCartComponent"] },
            ])
        ],
    })
], ShoppingModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    bgColor: 'green',
    //ApiUrl : 'http://localhost:3000/api/',
    ApiUrl: 'https://myproductdev.herokuapp.com/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Akshit\Desktop\pro-1\angLatest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map