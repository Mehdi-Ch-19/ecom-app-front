import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { Product } from 'src/app/core/models/product';
import { Review } from 'src/app/core/models/review';
import { ReviewRequest } from 'src/app/core/models/reviewRequest';
import { ReviewService } from 'src/app/core/service/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit,OnChanges {

  @Input() product! : Product ;
  reviewForm!:FormGroup
  reviews : Review[] = []
  rating!: number;
  ratingChanged = new EventEmitter<number>();
  addreview = new EventEmitter<any>();
  currentRating!: number;
  stars: number[] = [];
  @Output() onReviewAdded :EventEmitter<Review> =new EventEmitter<Review>()

  constructor(private fb :FormBuilder,private auth:AuthService,private router:Router,private reviewService:ReviewService) { 
    this.stars = Array(5).fill(0).map((_, index) => index + 1);
     
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.product = changes["product"].currentValue
     this.reviews = this.product.reviews!;
  }
  onFormSubmit(form:FormGroup){
    const formData: any = form.value;
    console.log("data")
    console.log(formData?.comment,formData?.title,this.currentRating)
    if(!this.auth.isAuthenticated){
      this.router.navigate(['account/login'])
    }else{
      let review : ReviewRequest = {
        comment:formData?.comment,
        customerId:+localStorage.getItem("userid")!,
        productId:this.product.id!,
        rating:this.currentRating,
        title:formData?.title
      }
      this.reviewService.addreview(review).subscribe(data=>{
        this.onReviewAdded.emit(data)
        console.log(data)
      })
    }
  }

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      comment:['',[Validators.required]],
      title:['',[Validators.required]]
    })
  }

   

  

  onStarClicked(star: number): void {
    this.currentRating = star;
    this.ratingChanged.emit(this.currentRating);
    console.log(this.currentRating)
  }

  onStarHovered(star: number): void {
    this.currentRating = star;
  }
}
