import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Customer } from 'src/app/core/models/customer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input()customerinfo! : Customer
  @Output() onCustomerUpdated :EventEmitter<Customer>= new EventEmitter<Customer>()
  customerForm!:FormGroup
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    console.log("info-com "+this.customerinfo.adresse)
     
    this.customerForm = this.fb.group({
      username:[this.customerinfo.name],
      email:[this.customerinfo.email],
      street:[this.customerinfo.adresse?.street],
      city:[this.customerinfo.adresse?.city],
      country:[this.customerinfo.adresse?.country],
    })
  }
  onFormSubmit(Form:FormGroup){
     
Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    let customer :Customer= {
      id : this.customerinfo.id,
      name:this.customerForm.value?.username,
      adresse:{
        id:this.customerinfo.adresse?.id,
        street:this.customerForm.value?.street,
        city:this.customerForm.value?.city,
        country:this.customerForm.value?.country,
      },
      roles:this.customerinfo.roles,
      email:this.customerForm.value?.email,
    }
    console.log(customer)
    this.onCustomerUpdated.emit(customer)

    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
    
  }
}
