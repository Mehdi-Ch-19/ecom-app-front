import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category';
import { Product } from 'src/app/core/models/product';
import { CategoryService } from 'src/app/core/service/category.service';
import { ProductserviceService } from 'src/app/core/service/productservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  producForm!:FormGroup
  product!:Product
  categories :Category[] = [] 
  product_cat! :Category
  constructor(private router:ActivatedRoute,
    private fb :FormBuilder,
    private categoryServie :CategoryService,
    private productServie:ProductserviceService) { 
    }

  ngOnInit(): void {
     
    let id = 0
    this.router.params.subscribe(p=>{
       
      id = p['id']
      this.productServie.productbyid(id).subscribe(p=>{
        this.categoryServie.category_list().subscribe(d=>{
          this.categories = d

          this.product = p
          this.product_cat = this.product.category!
          console.log(this.product_cat)
          this.producForm = this.fb.group({
            productTitle : [this.product.productTitle,[Validators.required]],
            imageUrl:[this.product.imageUrl,[Validators.required]],
            description :[this.product.description,[Validators.required]],
            price:[this.product.price,[Validators.required]],
            countInStock :[this.product.countInStock,[Validators.required]],
            category :[ null,[Validators.required]],
          })
         
         this.producForm.get("category")?.setValue(this.categories.find(c=>{ return c.categoryId == this.product_cat.categoryId}))
        
        })
         
      })
    })
    console.log(this.product)
    
    
   
  }


  getindex():number{
    console.log(this.categories)
    let index = this.categories.findIndex(p=>{
      console.log(this.product.category?.categoryId)
      p.categoryId == this.product.category?.categoryId
    })
    console.log(index)
    return index
  }
  onFormSubmit(form:FormGroup){
    let product :Product = {
      productTitle:form.value.productTitle,
      description:form.value.description,
      imageUrl:form.value.imageUrl,
      category:form.value.category,
      price:form.value.price,
      countInStock:form.value.countInStock,
      id:this.product.id,
      addeedAt:this.product.addeedAt,
      numReviews:this.product.numReviews,
      rating:this.product.rating,
      reviews:this.product.reviews,
      iswishlist:this.product.iswishlist
    }
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        /*http call to backend*/
        this.productServie.updateProduct(product).subscribe(p=>{
          this.product = p
        })
        Swal.fire('Saved!', '', 'success')
         
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    console.log(form.value)
  }


 
}
