import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/service/cart.service';
import { CategoryService } from 'src/app/core/service/category.service';
import { ProductserviceService } from 'src/app/core/service/productservice.service';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css']
})
export class CategoryCardsComponent implements OnInit {
  categories : Category[] = []
  products : Product[] = []

  category_products : products_percategry[] = []

  constructor(private productService : ProductserviceService,private categoryService:CategoryService
    , private cartservice:CartService) { }

  ngOnInit(): void {
    this.categoryService.category_list().subscribe(data=>{
      this.categories = data;
      console.log(this.categories)
      this.categories.forEach(c=>{
          let  cp :products_percategry = {title :c.categoryTitle,products:c.products}
          this.category_products.push(cp)
          
      })
    })
    
  }
  addtocart(product:Product){
    this.cartservice.addtocart(product)
    this.cartservice.cartnumber.next(this.cartservice.products.length)

  }
   XOR(a:boolean,b:boolean) {
    console.log( ( a || b ) && !( a && b ));
    return  ( a || b ) && !( a && b )
 }

  lastitem(catposition :number , index: number){
    let last = false;
    if(this.category_products[catposition].products?.length == index+1){
      last = true
    }
    return last
  }

}
interface products_percategry{
  title? :string,
  products?:Product[]
}
