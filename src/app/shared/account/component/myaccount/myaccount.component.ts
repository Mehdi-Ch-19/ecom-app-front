import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/service/cart.service';
import { WishlistService } from 'src/app/core/service/wishlist.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  toggleBetweenBtn =true
  wishlistProducts:Product[] = []
  constructor(private wishlistservie : WishlistService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.wishlistProducts= this.wishlistProducts
  }
  wishlistclick(){
    this.toggleBetweenBtn = !this.toggleBetweenBtn
  }
  ordersclick(){
    this.toggleBetweenBtn = !this.toggleBetweenBtn
     
  }
  addtocart(product:Product){
    this.cartservice.addtocart(product)
    this.cartservice.cartnumber.next(this.cartservice.products.length)

  }
}
