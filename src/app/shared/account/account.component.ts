import { Component, NgModule, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/service/auth.service";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
    constructor(private auth:AuthService,private route : Router){}
    ngOnInit(): void {
        //  if(!this.auth.isAuthenticated){
        //     this.route.navigate(['account/myaccount'])
        //  }
        this.route.navigate(['account/myaccount'])

    }
    
}