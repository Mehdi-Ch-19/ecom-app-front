import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/pages/header/header.component';
import { HomeModule } from './shared/home/home.module';
import { CoreModule } from './core/core.module';
import { CategoryModule } from './shared/catgories/category.module';
import { ProductModule } from './shared/product/product.module';
import { AccountModule } from './shared/account/account.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartModule } from './shared/cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CategoryModule,
    CoreModule,
    ProductModule,
    AccountModule,
    CartModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
