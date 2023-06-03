import {  Component,   OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { Customer } from 'src/app/core/models/customer';
import { Order } from 'src/app/core/models/order';
import { OrderRequest } from 'src/app/core/models/orderRequest';
import { Product } from 'src/app/core/models/product';
import { ProductItem } from 'src/app/core/models/productitem';
import { CartService } from 'src/app/core/service/cart.service';
import { CustomerService } from 'src/app/core/service/customer.service';
import { OrderService } from 'src/app/core/service/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {
  products :ProductItem[] = []
  total_products_price : number = 0
   total_price : number = 0
  constructor(private cartservice: CartService,
    private orderservice:OrderService,
    private auth :AuthService,
    private router:Router
    ,private customerservice:CustomerService  ) { }

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

    getcustomer():Customer|null{
      return this.customerservice.currentCustoner.getValue()

    }
    checkout(){
      if(this.auth.isAuthenticated){
        if(this.products.length !=0 ){
          let customer :Customer|null = this.getcustomer()
          if(customer!=null){
             let order :OrderRequest = {
            products:this.products,
            totalamount:this.total_price,
            customerId:customer.id,
            shippingAdresse:customer.adresse
          }
          console.log(order)
          this.orderservice.createorder(order).subscribe(res=>{
            Swal.fire('Your Order was Created', 'Check your email', 'success')
          })
          }
                  
        }
      }else{
        this.router.navigate(['account/login'])
      }
      
      
      
    }
  gettotal(products:ProductItem[]){
    let sum = 0
    this.products.forEach(p=>{
      sum += p.price!
    })
    return sum
  }
  
}

 