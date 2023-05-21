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
    path:"**",redirectTo:'home',pathMatch:'full'
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
