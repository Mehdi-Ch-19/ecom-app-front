import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureProductComponent } from './component/feature-product/feature-product.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home-rounting.module';
import { NewArrivalComponent } from './component/new-arrival/new-arrival.component';
import { CoreModule } from 'src/app/core/core.module';
import { ProductModule } from '../product/product.module';
import { ProductComponent } from '../product/product.component';
import { WishButtonComponent } from './component/wish-button/wish-button.component';



@NgModule({
  declarations: [
    FeatureProductComponent,
    HomeComponent,
    NewArrivalComponent,
    WishButtonComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(HomeRoutes),
     ProductModule
  ],
  exports:[
    WishButtonComponent
  ]
})
export class HomeModule { }
