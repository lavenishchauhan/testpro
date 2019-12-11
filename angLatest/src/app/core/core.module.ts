import { loginAuthGuard } from './../admin/services/login-guard.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './sign/component/register/register.component';
import { LoginComponent } from './sign/component/login/login.component';
import { BsNavbarComponent } from './header/bs-navbar.component';


@NgModule({
    declarations: [
        BsNavbarComponent,
        LoginComponent,
        RegisterComponent
    ],
    exports:[
        BsNavbarComponent
    ],
    providers: [
      ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'register', component: RegisterComponent, canActivate: [loginAuthGuard] },
            { path: 'login', component: LoginComponent,   canActivate: [loginAuthGuard] },
          ])
    ],
})
export class CoreModule { }
