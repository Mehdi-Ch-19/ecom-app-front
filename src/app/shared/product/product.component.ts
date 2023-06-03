import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductserviceService } from 'src/app/core/service/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   product! : Product ;
  constructor(private route :ActivatedRoute,private productservice : ProductserviceService) { }

  ngOnInit(): void {
    let id  =this.route.snapshot.params["id"]
    console.log(this.route.snapshot.params["id"])
    this.productservice.productbyid(id).subscribe((p)=>{
      this.product = p
      console.log(this.product)
    })
    
  }
  refreshProdcut(event:any ){
    let id  =this.route.snapshot.params["id"]
    this.productservice.productbyid(id).subscribe((p)=>{
      this.product = p
      console.log(this.product)
    })
  }

}
