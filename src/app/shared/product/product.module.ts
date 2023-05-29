import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ProductComponent } from './product.component';
import { ReviewComponent } from './components/review/review.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SingleProductComponent,
    ProductComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
