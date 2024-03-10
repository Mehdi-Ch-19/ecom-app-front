import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GlobalComponent } from './component/global/global.component';
import { ProductsComponent } from './component/products/products.component';
import { EditComponent } from './component/products/edit/edit.component';
import { ListCategoriesComponent } from './component/categories/list/list.component';
import { ListComponent } from './component/products/list/list.component';
import { AddComponent } from './component/products/add/add.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AdminsComponent } from './component/admins/admins.component';

const routes: Routes = [
  {
    path:"",component:DashboardComponent,
    children:[
      {
      path:" ",component:GlobalComponent
    },
    {
      path:"products", component: ProductsComponent,
      children:[
        {path:"",component:ListComponent},
        {path:"edit/:id",component:EditComponent},
        {path:"add",component:AddComponent},
        
      ]
    },
    {
      path:"categories",component:CategoriesComponent,
      children:[
        {
          path:"",component:ListCategoriesComponent
        }
      ]
    },
    {
      path:"orders",component: OrdersComponent
    },
    {
      path:"admins", component:AdminsComponent
    }
  ]
  },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
