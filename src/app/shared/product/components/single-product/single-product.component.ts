import { Component, Input, OnInit , OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit ,OnChanges{
  @Input() product! : Product  ;
  constructor(private cartservice:CartService) { 
  }

  ngOnInit(): void {
    
  }
  addtocart(){
    this.cartservice.addtocart(this.product)
    this.cartservice.cartnumber.next(this.cartservice.products.length)

  }
  ngOnChanges(changes: SimpleChanges):void{
    this.product = changes["product"].currentValue

  }

}
