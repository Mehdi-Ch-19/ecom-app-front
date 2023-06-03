import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"home",loadChildren:()=>import("./shared/home/home.module").then((m)=>m.HomeModule)
    
  },
  {
    path:"category",loadChildren:()=>import("./shared/catgories/category.module").then((m)=>m.CategoryModule)
    
  },
  {
    path:"account",loadChildren:()=>import("./shared/account/account.module").then((m)=>m.AccountModule)

  },
  {
    path:"cart",loadChildren:()=>import("./shared/cart/cart.module").then((m)=>m.CartModule)

  },
  {
    path:"search",loadChildren:()=>import("./shared/search/search.module").then((m)=>m.SearchModule)

  },
  {
    path:"dashboard",loadChildren:()=>import("./feature/dashboard/dashboard.module").then((m)=>m.DashboardModule),data:{"isDashboard":true}

  },
  {
    path:"**",redirectTo:'home',pathMatch:'full'
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
