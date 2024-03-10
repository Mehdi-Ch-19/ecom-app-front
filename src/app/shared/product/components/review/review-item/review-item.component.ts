import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Review } from 'src/app/core/models/review';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {
  @Input()review!:Review
  stars: number[] = [];
  constructor() {
    this.stars = Array(5).fill(0).map((_, index) => index + 1);
   }

  ngOnInit(): void {
  }

}
