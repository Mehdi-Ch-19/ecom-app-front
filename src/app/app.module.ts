import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { StoreModule } from '@ngrx/store';
import { SearchModule } from './shared/search/search.module';
import { DashboardModule } from './feature/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    HomeModule,
    CategoryModule,
    CoreModule,
    SearchModule,
    ProductModule,
    AccountModule,
    CartModule,
    ReactiveFormsModule,
    StoreModule.forRoot({})
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
