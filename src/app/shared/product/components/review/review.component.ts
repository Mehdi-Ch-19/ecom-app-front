import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { Review } from 'src/app/core/models/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit,OnChanges {

  @Input() product! : Product ;
  reviews : Review[] = []

  constructor() { 
    this.stars = Array(5).fill(0).map((_, index) => index + 1);

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.product = changes["product"].currentValue
     this.reviews = this.product.reviews!;
  }

  ngOnInit(): void {

  }

  rating!: number;
  ratingChanged = new EventEmitter<number>();
  currentRating!: number;
  stars: number[] = [];

  

  onStarClicked(star: number): void {
    this.currentRating = star;
    this.ratingChanged.emit(this.currentRating);
    console.log(this.currentRating)
  }

  onStarHovered(star: number): void {
    this.currentRating = star;
  }
}
