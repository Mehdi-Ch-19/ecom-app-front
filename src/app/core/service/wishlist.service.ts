import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist:Product[]=[]
  wishlistSubject :Subject<Product[]> =new Subject<Product[]>()
  constructor() { }
  addtowachlist(product :Product){
    this.wishlist.push(product)
    this.wishlistSubject.next(this.wishlist)
  }
  removefromwishlist(product :Product){
    let index = this.wishlist.findIndex((produc)=>{
      produc.id == product.id
    })
    this.wishlist.splice(index,1)
    this.wishlistSubject.next(this.wishlist)

  }
  
}
