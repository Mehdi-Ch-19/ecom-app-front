import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrderService } from 'src/app/core/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Order[]=[]
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getallorders().subscribe(o=>{
      this.orders = o
    })
  }

}
