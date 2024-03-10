import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/core/models/customer';
import { CustomerService } from 'src/app/core/service/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  admins :Customer[] =[]
  emailForm!:UntypedFormGroup
  constructor(private custmerservice :CustomerService,private fb :UntypedFormBuilder) { }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email:['',[Validators.required]]
    })
    this.custmerservice.getalladmins().subscribe(a=>{
      a.forEach(admin=>{
        this.admins.push(admin)
      })
    })
    console.log(this.admins)

  }
  onFormSubmit(form:UntypedFormGroup){
    let c :Customer = {email:form.value.email}
    Swal.fire({
      title: 'Enter Your Password',
      html:
        '<input style="margin-bottom: 10px;" id="swal-input1" class="swal2-input">' +
        '<p style="margin-bottom: -10px;">Confirm Password</p>'+
        '<input id="swal-input2" class="swal2-input">',
      showConfirmButton: true,
      showCancelButton: true,
      allowOutsideClick:false,
      confirmButtonText: 'Save',
      focusConfirm: false, //No poner el foco en el botóón de confirmar
      preConfirm: () => {
        const val1 = (document.getElementById(
          'swal-input1'
        ) as HTMLInputElement).value;
        const val2 = (document.getElementById(
          'swal-input2'
        ) as HTMLInputElement).value;
        if(val1 != val2){
          Swal.showValidationMessage(`Please enter login and password`)

        } 
          console.log(val1);
          let c :any = {email:form.value.email}
          this.admins.push(c)
          this.emailForm.value.email = ""

          return [
            (document.getElementById('swal-input1') as HTMLInputElement).value,
            (document.getElementById('swal-input2') as HTMLInputElement).value
          ];
        
       
      }
    });



   // this.admins.push(c)
  }
  edititem(i : number){
  }
  deleteadmin(i : number){

  }

  async data() {
    const { value: formValues } = await Swal.fire({
      title: 'Enter Your Password',
      html:
        '<input id="swal-input1" class="swal2-input">' +
        '<p>Confirm Password</p>'+
        '<input id="swal-input2" class="swal2-input">',
      showConfirmButton: true,
      showCancelButton: true,
      allowOutsideClick:false,
      confirmButtonText: 'Save',
      focusConfirm: false, //No poner el foco en el botóón de confirmar
      preConfirm: () => {
        const val1 = (document.getElementById(
          'swal-input1'
        ) as HTMLInputElement).value;
        const val2 = (document.getElementById(
          'swal-input2'
        ) as HTMLInputElement).value;
        if(val1 != val2){
          Swal.showValidationMessage(`Please enter login and password`)

        } 
          console.log(val1);
          return [
            (document.getElementById('swal-input1') as HTMLInputElement).value,
            (document.getElementById('swal-input2') as HTMLInputElement).value
          ];
        
       
      }
    });

    if (formValues) {
      
      Swal.fire(JSON.stringify(formValues));
    }
  }


}
