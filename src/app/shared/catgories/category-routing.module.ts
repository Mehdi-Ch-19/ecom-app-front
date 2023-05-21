import { Routes } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { CategoryCardsComponent } from "./component/category-cards/category-cards.component";
import { CategoryAllComponent } from "./component/category-all/category-all.component";
import { ProductComponent } from "../product/product.component";

export const CategorieRoutes:Routes=[
    {
        path:"",component:CategoryCardsComponent  
       
    },
    {
       path:"all/:name",component:CategoryAllComponent 
    }
    ,{
        path:"product/:id",component:ProductComponent,pathMatch:'full'
    }
]