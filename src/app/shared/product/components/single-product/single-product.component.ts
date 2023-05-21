import { Component, Input, OnInit , OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit ,OnChanges{
  @Input() product! : Product  ;
  constructor() { 
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges):void{
    this.product = changes["product"].currentValue

  }

}
