import { Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { CartItemsComponent } from "./components/cart-items/cart-items.component";

export const CartRoutes:Routes=[
    {
        path:"",component:CartComponent,children:[{
            path:"",component:CartItemsComponent
        }]
    }
]