import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path:"product/:id",component:ProductComponent
      
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
