import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Category } from 'src/app/core/models/category';
import { Product } from 'src/app/core/models/product';
import { CategoryService } from 'src/app/core/service/category.service';
import { ProductserviceService } from 'src/app/core/service/productservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  producForm!:UntypedFormGroup
  product!:Product
  categories :Category[] = [] 
  constructor(
    private fb :UntypedFormBuilder,
    private categoryServie :CategoryService,
    private productServie:ProductserviceService
  ) { }

  ngOnInit(): void {
    this.categoryServie.category_list().subscribe(d=>{
      this.categories = d
      this.producForm = this.fb.group({
        productTitle : ['',[Validators.required]],
        imageUrl:['',[Validators.required]],
        description :['',[Validators.required]],
        price:[0,[Validators.required]],
        countInStock :[0,[Validators.required]],
        category :[ null,[Validators.required]],
      })
      
    })
  
  }
  onFormSubmit(form:UntypedFormGroup){
    if(form.valid){
      let product :Product = {
        productTitle:form.value.productTitle,
        description:form.value.description,
        imageUrl:form.value.imageUrl,
        category:form.value.category,
        price:form.value.price,
        countInStock:form.value.countInStock,
        iswishlist:false
      }
      this.productServie.addProduct(product).subscribe(res=>{
       Swal.fire('Added Succefuly', '', 'success')   
       this.producForm = this.fb.group({
        productTitle : ['',[Validators.required]],
        imageUrl:['',[Validators.required]],
        description :['',[Validators.required]],
        price:[0,[Validators.required]],
        countInStock :[0,[Validators.required]],
        category :[ null,[Validators.required]],
      })    
      })

    }else{
      Swal.fire('Some Field still empty', 'Try again !!', 'error')

    }
   }
}
