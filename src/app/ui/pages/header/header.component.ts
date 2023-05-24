import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numberofproducts  : number = 0
  constructor(private cartservice : CartService) { }

  ngOnInit(): void {
    this.cartservice.cartnumber.subscribe(n=>{
      this.numberofproducts = n
      console.log(this.numberofproducts)
    })

  }

}
