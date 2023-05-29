import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  servicename = "ORDER-SERVICE"
  orderendpoint = "/api/v1/order"
  apiUrl = environment.apiURLgateway + this.servicename + this.orderendpoint

  constructor(private  http:HttpClient) { }
  getALLordersByCustomer(id:number):Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl+"/customer/"+id)
  }
}
