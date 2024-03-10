import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { loginRequest } from 'src/app/core/auth/models/loginRequest';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import Swal from  'sweetalert2';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! :FormGroup 
   constructor(private fb : FormBuilder,private router :Router,private activeroute:ActivatedRoute,private auth :AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
  routetosignup(){
    console.log(this.router.navigate(['signup'] ))
    this.router.navigate(['/account/signup'] )
  }   
  onFormSubmit(form:FormGroup){
    const formData: any = form.value;
    
    this.auth.login({email:formData?.email,password:formData?.password}).subscribe(res=>{
       Swal.fire('Your login was succes', 'You submitted succesfully!', 'success')       
        this.router.navigate(['/account/myaccount'])
      console.log("okkk")
    },
    error=>{
      Swal.fire('Email or Password is incorrect', 'Try again !!', 'error')
      
      console.log(error)
    })
  }

}
