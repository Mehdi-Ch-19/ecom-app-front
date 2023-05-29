import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // stage 1: Check if request for refresh token
    if (request.url.indexOf('/api/v1/auth/refresh-token') !== -1) {
      return next.handle(request);
    }
    const data = this.authService.userData;
    const accessToken = data?.access_token;
    // stage 2: Checking access_token exists(mean user logged in) or not
    if (accessToken) {
      // stage 3: checking access_token validity
      if (this.authService.isAuthTokenValid(accessToken)) {
        let modifiedReq = request.clone({
          headers: request.headers.append('Authorization', `Bearer ${accessToken}`)
        });
        return next.handle(modifiedReq)
      }
      // stage 4: Going to generate new tokens
      return this.authService.generateNewTokens()
        .pipe(
          take(1),
          switchMap((res: any) => {
            console.log("from interceptor")
            console.log(res?.access_token)
            let modifiedReq = request.clone({
              headers: request.headers.append('Authorization', `Bearer ${res?.access_token}`)
            });
            return next.handle(modifiedReq)
          })
        )
      
    }
    return next.handle(request);
  }
}
 
