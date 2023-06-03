import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/service/dashboard.service';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
 })
export class DashboardComponent implements OnInit {
   constructor(private dashService:DashboardService){

   }
     
  ngOnInit(): void {
}
}
