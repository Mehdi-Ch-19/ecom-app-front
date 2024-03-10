import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  servicename = "CUSTOMER-SERVICE"
  apiUrl = environment.apiURLgateway + this.servicename +"/api/v1/customer"
  currentCustoner :BehaviorSubject<Customer|null> = new BehaviorSubject<Customer|null>(null)
  constructor(private http : HttpClient) { }

  getallinfobycustomer(id : number):Observable<Customer>{
    return this.http.get(this.apiUrl+"/"+id)
  }
  updateCustomer(customer:Customer){
    return this.http.post(this.apiUrl+"/update",customer)
  }
  getalladmins():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiUrl+'/admins')
  }


}
