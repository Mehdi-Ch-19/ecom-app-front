import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  servicename = "PRODUCT-SERVICE"
  apiUrl = environment.apiURLgateway + this.servicename +"/api/v1/category"

  constructor(private http : HttpClient) { 
  }
  category_list():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)
  }


}
