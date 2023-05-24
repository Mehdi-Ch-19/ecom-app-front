import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { sorting } from 'src/app/core/enums/sorting-enum';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/service/cart.service';
import { ProductserviceService } from 'src/app/core/service/productservice.service';
@Component({
  selector: 'app-category-all',
  templateUrl: './category-all.component.html',
  styleUrls: ['./category-all.component.css']
})
export class CategoryAllComponent implements OnInit {

   products : Product[] = []

  constructor(private route: ActivatedRoute,private router :Router, private cartservice:CartService,
    private productservice:ProductserviceService) { }

  ngOnInit(): void {
    let category_title :any
     this.route.paramMap. subscribe((params:ParamMap)=>{
      category_title = params.get("name");
    })
    this.productservice.allproductsbycategorieName(category_title).subscribe(
      data=>{
        this.products = this.productservice.sortProductsByRating(data,sorting.DESC)
      }
    )
      
  }
  addtocart(product:Product){
    this.cartservice.addtocart(product)
    this.cartservice.cartnumber.next(this.cartservice.products.length)

  }
  routeToProduct(id:number){
    this.router.navigate(['product/',id])
  }
  onOptionsSelected(value:string) {
    if(value == 'Top'){
      this.products = this.productservice.sortProductsByRating(this.products,sorting.DESC)
    }else if ( value == 'Lowest'){
      this.products = this.productservice.sortProductsByRating(this.products,sorting.ASC)
    }
    }

}
