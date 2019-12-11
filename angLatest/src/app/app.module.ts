import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NoAccessComponent } from './core/static/component/no-access/no-access.component';
import { NotFoundComponent } from './core/static/component/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AppErrorHandler } from './shared/common/validators/app-error-handler';
import { InputFormatDirective } from './shared/directive/input-format.directive';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping/shopping.module';
import { ServerRequestService } from './shopping/services/server-request.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoAccessComponent,
    NotFoundComponent,
    InputFormatDirective,
 
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ShoppingModule,
    AdminModule,
    CoreModule,
    RouterModule.forRoot([
      { path: 'no-access', component: NoAccessComponent },
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    ServerRequestService,
     {provide: ErrorHandler, useClass: AppErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
