import { Routes } from "@angular/router";
import { AccountComponent } from "./account.component";
import { LoginComponent } from "./component/login/login.component";
import { SignupComponent } from "./component/signup/signup.component";

export const AccountRoutes:Routes=[
  {
    path:"",component:AccountComponent,
    children:[
        {
            path:"login",component:LoginComponent
        },
        {
          path:"signup", component:SignupComponent
        }
    ]
  }
]