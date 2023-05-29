import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishButtonComponent } from './wish-button/wish-button.component';



@NgModule({
  declarations: [
    WishButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WishButtonComponent
  ]
})
export class WishlistModule { }
