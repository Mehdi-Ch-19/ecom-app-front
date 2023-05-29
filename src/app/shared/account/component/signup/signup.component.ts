import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform! :FormGroup 
  constructor(private fb : FormBuilder,private router :Router,private activeroute:ActivatedRoute,private auth :AuthService) { }

  ngOnInit(): void {
    this.signupform = this.fb.group({
      username : ['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]]
    })
  }
  onFormSubmit(form:FormGroup){
    const formData: any = form.value;
    this.auth.signup({username:formData?.username,email:formData?.email,password:formData?.password}).subscribe(res=>{
      Swal.fire({icon:'success',title:'Well Nice to meet yoo '+formData?.username ,text:'wdw' ,allowEnterKey:false,allowOutsideClick:false })     
      this.routetoLogin()  
    },
    error=>{
      Swal.fire('Email aleardy exists', 'Try again !!', 'error')

    })
   
  }

   routetoLogin(){
    this.router.navigate(['/account/login'] )
   }
}
