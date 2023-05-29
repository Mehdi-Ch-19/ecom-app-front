import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/service/auth.service";
import { CustomerService } from "src/app/core/service/customer.service";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
    constructor(private auth:AuthService,private route : Router,private activatedRoute:ActivatedRoute,private custonerservice:CustomerService){}
    ngOnInit(): void {
        console.log(this.auth.userData)
           if(this.auth.isAuthenticated){
             this.route.navigate(['account/myaccount'])
            }else{
                this.route.navigate(['account/login'])
            }
            
        

    }
    
}