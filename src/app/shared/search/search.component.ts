import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/core/models/product";
import { ProductserviceService } from "src/app/core/service/productservice.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
  })
  export class SearchComponent implements OnInit {
    
    products:Product[] = []
    filterdata:Product[] = []
    constructor(private productService:ProductserviceService){}

    ngOnInit(): void {
        this.productService.allproducts().subscribe(data=>{
            this.products = data
        })
        
    }
    ShowData(event :Event){
         
        const filterValue = (event.target as HTMLInputElement).value;
        console.log(filterValue)
        if(filterValue != ""){
           this.filterdata =  this.products.filter(p=>{
                return p.productTitle?.toLowerCase().includes(filterValue.toLowerCase())! 
            })
            console.log(this.filterdata)
        }
        else{
            this.filterdata = []
        }
    }
    
  }