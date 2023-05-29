import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutes } from './account-routing.module';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { WishButtonComponent } from '../wishlist/wish-button/wish-button.component';
import { HomeModule } from '../home/home.module';
import { WishlistModule } from '../wishlist/wishlist.module';
import { InfoComponent } from './component/myaccount/info/info.component';



@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    SignupComponent,
    MyaccountComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WishlistModule,
    CoreModule,
    SweetAlert2Module,
    RouterModule.forChild(AccountRoutes)
  ]
})
export class AccountModule { }
