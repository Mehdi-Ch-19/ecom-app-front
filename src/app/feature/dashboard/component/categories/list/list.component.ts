import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/core/models/category';
import { CategoryService } from 'src/app/core/service/category.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories:Category[]=[]
  categoryRequestForm!:UntypedFormGroup


  constructor(private categoryServie :CategoryService,private fb :UntypedFormBuilder) { }

  ngOnInit(): void {
    this.categoryServie.category_list().subscribe(c=>{
      this.categories = c
    })

    this.categoryRequestForm = this.fb.group({
      categoryTitle:['',[Validators.required]]
    })

  }
  edititem(i:number){
    let ctitle = this.categories[i].categoryTitle
    let cid = this.categories[i].categoryId
 
    Swal.fire({
      title: "Edit your Categorie",
      inputValue:this.categories[i].categoryTitle,
      input: 'text',
      showCancelButton: true,
      confirmButtonText:"Edit"   
  }).then((result) => {
      if (result.isConfirmed) {
        this.categoryServie.updateCategory({categoryId:cid,categoryTitle:result.value}).subscribe({
         next: res=>{
          Swal.fire('Edit it  Succefuly', '', 'success')   
        },
      error:e=>{
      Swal.fire('Aleardy exits ', 'Try again !!', 'error')
      }})
          
        console.log("Result: " + result.value);
      }
  });
  }
  deleteProdcut(i :number){

    Swal.fire({
      title: 'Do you want to delete '+this.categories[i].categoryTitle,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        /*http call to backend*/
        this.categoryServie.deleteCategory(this.categories[i].categoryId!).subscribe({
         next: p=>{
          this.categoryServie.category_list().subscribe(c=>{
            this.categories = c
          })
          Swal.fire('Deleted!', '', 'success')
          
        },
        error :error=>{
          Swal.fire('Somthing went wrong !', '', 'error')
        }})
          
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }
  onFormSubmit(form:UntypedFormGroup){
    if(form.valid){
      this.categoryServie.addCategory({categoryTitle:form.value.categoryTitle}).subscribe(res=>{
        this.categoryServie.category_list().subscribe(c=>{
          this.categories = c
        })
        Swal.fire('Added Succefuly', '', 'success')   
      },
      error=>{
      Swal.fire('Name aleardy exists', 'Try again !!', 'error')
      })
    }else{
      Swal.fire('fields must not be emtty', 'Try again !!', 'error')
    }
  }
}
