import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductserviceService } from 'src/app/core/service/productservice.service';

@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.css']
})
export class FeatureProductComponent implements OnInit {
  products : Product[] = []

  constructor(private productService : ProductserviceService) { }

  ngOnInit(): void {
    this.productService.allproducts().subscribe(data=>{
      this.products = data
    },
    error=>{
      
    })

  }

}