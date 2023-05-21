import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist:Product[]=[]
  constructor() { }
  addtowachlist(product :Product){
    this.wishlist.push(product)
  }
  removefromwishlist(product :Product){
    let index = this.wishlist.findIndex((produc)=>{
      produc.id == product.id
    })
    this.wishlist.splice(index,1)
  }
}
