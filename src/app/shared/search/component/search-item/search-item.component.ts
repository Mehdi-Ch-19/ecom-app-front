import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input()product!:Product
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
  }
  addtocart(product:Product){
    this.cartservice.addtocart(product)
    this.cartservice.cartnumber.next(this.cartservice.products.length)

  }
}
