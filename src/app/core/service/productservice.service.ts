import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  servicename = "PRODUCT-SERVICE"
  productendpoint = "/api/v1/product"
  categoryendpoint= "/api/v1/category"
  apiUrl = environment.apiURLgateway + this.servicename + this.productendpoint
  constructor(private http : HttpClient) 
  { }
  allproducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }
  productbyid(id:number):Observable<Product>{
    return this.http.get<Product>(this.apiUrl+"/"+id)
  }
  allproductsbycategorie(cat_id:number):Observable<Product[]>{
    this.apiUrl =  environment.apiURLgateway + this.servicename + this.categoryendpoint
    return this.http.get<Product[]>(this.apiUrl+"/"+cat_id+"/products")
  }
  allproductsbycategorieName(cart_name:string):Observable<Product[]>{
    this.apiUrl =  environment.apiURLgateway + this.servicename + this.categoryendpoint
    return this.http.get<Product[]>(this.apiUrl+"/name/"+cart_name+"/products")

  }
  sortProductsByRating(products: Product[], sortOrder: string): Product[] {
    return products.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.rating! - b.rating!;
      } else if (sortOrder === 'desc') {
        return b.rating! - a.rating!;
      } else {
        // Invalid sort order, return unsorted array
        return 0;
      }
    });
  }


}
