import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductserviceService } from 'src/app/core/service/productservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products:Product[] = []

  constructor(private productservice:ProductserviceService,private router:Router) { }

  ngOnInit(): void {
    this.productservice.allproducts().subscribe(data=>{
      this.products = data
    })
  }
  redirectAdd(){
    this.router.navigate(['dashboard/products/add'])
  }
  edititem(i : number){
    this.router.navigate(['dashboard/products/edit/',this.products[i].id])
    console.log(this.products[i])
  }
  deleteProdcut(i:number){
    Swal.fire({
      title: 'Do you want to delete '+this.products[i].productTitle,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        /*http call to backend*/
        this.productservice.deleteProduct(this.products[i].id!).subscribe(p=>{
          this.productservice.allproducts().subscribe(data=>{
            this.products = data
          })
          Swal.fire('Saved!', '', 'success')
        },
        error=>{
          Swal.fire('Somthing went wrong !', '', 'error')
        })
          
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
