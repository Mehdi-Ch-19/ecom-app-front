import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import { CategorieRoutes } from './category-routing.module';
import { CategoryCardsComponent } from './component/category-cards/category-cards.component';
import { CategoryAllComponent } from './component/category-all/category-all.component';
import { ProductModule } from '../product/product.module';
import { ProductRoutingModule } from '../product/product-routing.module';



@NgModule({
  declarations: [CategoryComponent,
     CategoryCardsComponent, 
     CategoryAllComponent],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule.forChild(CategorieRoutes)
  ] 
})
export class CategoryModule { }
