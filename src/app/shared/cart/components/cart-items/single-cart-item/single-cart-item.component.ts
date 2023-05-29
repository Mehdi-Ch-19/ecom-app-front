import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductItem } from 'src/app/core/models/productitem';
  
@Component({
  selector: 'app-single-cart-item',
  templateUrl: './single-cart-item.component.html',
  styleUrls: ['./single-cart-item.component.css']
})
export class SingleCartItemComponent implements OnInit  {
  @Input() productitem! : ProductItem 
   @Output() onitemdeleted :EventEmitter<any> = new EventEmitter<any>()
    @Output() onitemEdited  :EventEmitter<any> = new EventEmitter<any>()
  constructor() { 
   // console.log("kkk")
  }
  

  ngOnInit(): void {

    // this.productitem.productId = this.product.id
    // this.productitem.productName = this.productitem.productName
    // this.productitem.quantity = this.count
    // this.productitem.unitPrice = this.product.price! 
    // this.productitem.price = this.productitem.unitPrice* this.count
    //console.log(this.productitem)
  }

 deleteproduct(id : string){
    this.onitemdeleted.emit(id)
 }

  up(){
    this.productitem.quantity!++
    this.productitem.price =  this.productitem.unitPrice! * this.productitem.quantity!
    this.onitemEdited.emit(this.productitem)
  }
  down(){
    if(this.productitem.quantity! > 1){
      this.productitem.quantity!--
      this.productitem.price =  this.productitem.unitPrice! * this.productitem.quantity!
      this.onitemEdited.emit(this.productitem)
    }
    
  }
}
