import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProductItem } from '../models/productitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products :Product[] = []
  cartnumber : BehaviorSubject<number> = new BehaviorSubject<number>(0)
  productsItem : ProductItem[] = []
  productitemsubjext: Subject<ProductItem[]> = new Subject<ProductItem[]>()
  constructor() {
     
   }
   edititem(productitem :ProductItem){
    let index = this.productsItem.indexOf(productitem)
    console.log(this.productsItem)
   // console.log(index)
    this.productsItem[index] = productitem
    this.productitemsubjext.next(this.productsItem)
   }
   deleteproduct(id :number){
      let index = this.productsItem.findIndex(f=>{f.productId == id})
      this.productsItem.splice(index,1)
      //console.log(this.products)
      this.products.forEach(p=>{
        if(p.id == id){
          let i  = this.productsItem.findIndex(f=>{f.productId == id})
          this.products.splice(i,1)
        }
      })
     // console.log(this.products)

      this.cartnumber.next(this.products.length)
      this.productitemsubjext.next(this.productsItem)
   }
   addtocart(product :Product){
       
      this.products.push(product)
      let count = this.products.filter(p=>p.id == product.id).length
      let singleproductitem : ProductItem = {
        product:product,
        productImage:product.imageUrl,
        productName:product.productTitle,
        productId : product.id,
        unitPrice:product.price,
        quantity:count
      }
      if(count == 1){
        
        singleproductitem.quantity = 1
        singleproductitem.price = singleproductitem.unitPrice!*singleproductitem.quantity
        
        this.productsItem.push(singleproductitem)
      }else{
        singleproductitem.quantity = count++
        singleproductitem.price = singleproductitem.unitPrice!*singleproductitem.quantity 
        let index = this.productsItem.findIndex(i => i.productId = product.id)
       // console.log(index)
        this.productsItem[index] = singleproductitem
      }
      console.log(this.productsItem)
      this.productitemsubjext.next(this.productsItem)
   }
getallproducts(){
  let productcount = this.getProductCounts(this.products)
    for(let p of productcount){
     let singleproductitem : ProductItem = {
       price : p.product.price! * p.count,
       product:p.product,
       productImage:p.product.imageUrl,
       productName:p.product.productTitle,
       productId : p.product.id,
       unitPrice:p.product.price,
       quantity:p.count

     }
     this.productsItem.push(singleproductitem)
   }
   return this.productsItem
 }

  getProductCounts(products :Product[]) :ProductCount[]{
     let productCounts:ProductCount[] = []
    let count = 0
    // Count the occurrence of each product
    for (const product of products) { 
      let exist = false
      count = 0
      for(let i = 0;i<productCounts.length;i++  ){
        if(productCounts[i].product.id == product.id ){
          exist = true
          break
        }
      }
      if(exist == false){
        for (const productt of products){
          if(product.id == productt.id){
            count++
          }
        }
        productCounts.push({count:count,product:product})
      
      }
      }
    return productCounts;
  }
}

interface ProductCount {
  count: number;
  product: Product;
}