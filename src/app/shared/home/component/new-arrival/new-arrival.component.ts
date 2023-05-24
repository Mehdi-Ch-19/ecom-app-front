import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/service/cart.service';
import { ProductserviceService } from 'src/app/core/service/productservice.service';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {
  products : Product[] = []

  isIWishList:boolean= false
  constructor(private productService : ProductserviceService , private cartservice:CartService ) { }

  ngOnInit(): void {
    
    this.productService.allproducts().subscribe(data=>{
      console.log(data)
      this.products = data
    },
    error=>{
      console.log(error)
    })

  }
  // addtocart(product:Product){
  //   this.cartservice.products.push(product)
  //   this.cartservice.cartnumber.next(this.cartservice.products.length)
  //   console.log(this.cartservice.products)
  // }
  addtocart(product:Product){
    this.cartservice.addtocart(product)
    this.cartservice.cartnumber.next(this.cartservice.products.length)

  }

}
