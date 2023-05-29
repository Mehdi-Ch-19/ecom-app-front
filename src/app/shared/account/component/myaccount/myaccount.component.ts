import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { Customer } from 'src/app/core/models/customer';
import { Order } from 'src/app/core/models/order';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/service/cart.service';
import { CustomerService } from 'src/app/core/service/customer.service';
import { OrderService } from 'src/app/core/service/order.service';
import { WishlistService } from 'src/app/core/service/wishlist.service';
import { selectAllwidshlistProducts } from 'src/app/core/state/wishlist/wishlist.selectors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  toggleBetweenBtn =true
  wishlistProducts:Product[] = []
  orders:Order[] = []
  customerinfo! : Customer
  customerForm!:FormGroup
  id:number = +localStorage.getItem("user_id")!

  constructor(private wishlistservie : WishlistService,
    private customerservice:CustomerService,
    private cartservice:CartService,
    private store :Store ,
    private orderService :OrderService,
    private autheservice:AuthService,
    private fb : FormBuilder) { }
    
  

  public allproductinwishlist$ =this.store.select(selectAllwidshlistProducts)

  ngOnInit(): void {
    // this.wishlistservie.wishlistSubject.subscribe(data=>{
    //   this.wishlistProducts = data
    // })
   // this.wishlistProducts= this.wishlistProducts
  
  this.customerservice.getallinfobycustomer(+localStorage.getItem("user_id")!).subscribe(data=>{
   this.customerinfo = data
   console.log(this.customerinfo)
  }
  )
   

   this.orderService.getALLordersByCustomer(this.id).subscribe(data=>{
    console.log(data)
    this.orders = data
   })
    console.log(this.wishlistProducts)
    this.allproductinwishlist$.subscribe(data=>{
      this.wishlistProducts = data
    })
    console.log(this.wishlistProducts)
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
 onFormSubmit(Form:FormGroup){

 }

 updateCustomer(event:any){
  console.log("events")
  console.log(event)
  this.customerservice.updateCustomer(event).subscribe((data : Customer)=>{
    
    this.customerinfo = data
  })
 }
 logout(){

  Swal.fire({
    title: 'Do you want to logout ?',
    showDenyButton: true,
    confirmButtonText: 'Logout',
    denyButtonText: `Nop`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.autheservice.logout()
    } else if (result.isDenied) {
    }
  })
   
 }

}
