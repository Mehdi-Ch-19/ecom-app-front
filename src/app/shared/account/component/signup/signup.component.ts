import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router :Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  }

   routetologin(){
    this.router.navigate(['/account/login'] )
    
   }
}
