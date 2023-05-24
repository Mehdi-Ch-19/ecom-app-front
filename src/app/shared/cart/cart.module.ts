import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartRoutes } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SingleCartItemComponent } from './components/cart-items/single-cart-item/single-cart-item.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
 


@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent,
     SingleCartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CartRoutes)
  ]
})
export class CartModule { }
