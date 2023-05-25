import {  Component,   OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { ProductItem } from 'src/app/core/models/productitem';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {
  products :ProductItem[] = []
  total_products_price : number = 0
   total_price : number = 0
  constructor(private cartservice: CartService  ) { }

  ngOnInit(): void {
    // this.products = this.cartservice.getallproducts()
    // console.log("cart item")
    // console.log(this.products)
    this.cartservice.productitemsubjext.subscribe(data=>{
      this.products = data
      //console.log(this.products)
    })
    this.products= this.cartservice.productsItem
    this.total_products_price = this.gettotal(this.products)
    this.total_price += this.total_products_price+ 5
  }
  deleteproduct(event:any){
    let id =  event.id
    //console.log(event)
    this.cartservice.deleteproduct(event)
    this.total_products_price = this.gettotal(this.products)
    this.total_price = this.total_products_price+ 5

  }
  edititem(event :any){
   // console.log(event)
    this.cartservice.edititem(event)
    this.total_products_price = this.gettotal(this.products)
    this.total_price = this.total_products_price+ 5
    }
  gettotal(products:ProductItem[]){
    let sum = 0
    this.products.forEach(p=>{
      sum += p.price!
    })
    return sum
  }
  
}

 