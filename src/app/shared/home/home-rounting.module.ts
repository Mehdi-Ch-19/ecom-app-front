import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProductComponent } from "../product/product.component";

export const HomeRoutes:Routes=[
    {
        path:"",
        children:[{
            path:"",component:HomeComponent
        },
         
    ]
    }
]