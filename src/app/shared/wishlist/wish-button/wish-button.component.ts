import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
 import { Product } from 'src/app/core/models/product';
import { WishlistService } from 'src/app/core/service/wishlist.service';
import { addTowishlist, removeFromeishlist } from 'src/app/core/state/wishlist/wishlist.action';

@Component({
  selector: 'app-wish-button',
  templateUrl: './wish-button.component.html',
  styleUrls: ['./wish-button.component.css']
})
export class WishButtonComponent implements OnInit {
  @Input() isIWishList:boolean= false
  @Input() product!:Product
  constructor(private wishlistservice :WishlistService ,private store :Store ) { }

  ngOnInit(): void {
  }
  toggle(){
    this.isIWishList = !this.isIWishList
    if(this.isIWishList){
      this.product.iswishlist = true
      this.store.dispatch(addTowishlist(this.product))
      this.wishlistservice.addtowachlist(this.product)
    }else {
      this.wishlistservice.removefromwishlist(this.product)
      this.store.dispatch(removeFromeishlist({id:this.product.id!}))
      this.product.iswishlist = false
      
    }
    console.log(this.wishlistservice.wishlist)
  }
  existonthewishlist(){
    this.wishlistservice.wishlist.find((p)=>{
      p.id == this.product.id
    })
  }

}
