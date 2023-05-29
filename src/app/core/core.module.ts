import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductserviceService } from './service/productservice.service';
import { WishlistService } from './service/wishlist.service';
import { CategoryService } from './service/category.service';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/wishlist/wishlist.reducer';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('wishlist', reducer),
   ],
  providers:[
    ProductserviceService,
    WishlistService,
    CategoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
   
})
export class CoreModule { }
