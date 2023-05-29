import { Injectable } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
import { ReviewRequest } from '../models/reviewRequest';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  servicename = "REVIEW-SERVICE"
  ReviewEndpoint = "/api/v1/review"
  apiUrl = environment.apiURLgateway + this.servicename + this.ReviewEndpoint
  constructor(private auth : AuthService , private http :HttpClient) { }

  addreview(review : ReviewRequest){
    return this.http.post(this.apiUrl,review)
  }
}
