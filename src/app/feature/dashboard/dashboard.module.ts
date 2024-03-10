import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { GlobalComponent } from './component/global/global.component';
import { ProductsComponent } from './component/products/products.component';
import { EditComponent } from './component/products/edit/edit.component';
import { ListComponent } from './component/products/list/list.component';
import { ListCategoriesComponent } from './component/categories/list/list.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './component/products/add/add.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AdminsComponent } from './component/admins/admins.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GlobalComponent,
    ProductsComponent,
    EditComponent,
    ListComponent,
    ListCategoriesComponent,
    AddComponent,
    CategoriesComponent,
    OrdersComponent,
    AdminsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
