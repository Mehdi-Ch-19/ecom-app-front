import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutes } from './account-routing.module';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule.forChild(AccountRoutes)
  ]
})
export class AccountModule { }
