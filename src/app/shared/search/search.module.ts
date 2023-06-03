import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { WishlistModule } from '../wishlist/wishlist.module';
import { ProductModule } from '../product/product.module';
import { SearchItemComponent } from './component/search-item/search-item.component';



@NgModule({
  declarations: [SearchComponent, SearchItemComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    WishlistModule,
    ProductModule
  ]
})
export class SearchModule { }
