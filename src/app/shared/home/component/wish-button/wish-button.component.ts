import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { WishlistService } from 'src/app/core/service/wishlist.service';

@Component({
  selector: 'app-wish-button',
  templateUrl: './wish-button.component.html',
  styleUrls: ['./wish-button.component.css']
})
export class WishButtonComponent implements OnInit {
  @Input() isIWishList:boolean= false
  @Input() product!:Product
  constructor(private wishlistservice :WishlistService) { }

  ngOnInit(): void {
  }
  toggle(){
    this.isIWishList = !this.isIWishList
    if(this.isIWishList){
      this.product.iswishlist = true
      this.wishlistservice.addtowachlist(this.product)
    }else {this.wishlistservice.removefromwishlist(this.product)
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
