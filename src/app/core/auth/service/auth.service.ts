import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { successLogin } from '../models/SuccessLogin';
import { TokenService } from './token.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    servicename = "AUTH-SERVICE"
    authenticationEndpoint = "/api/v1/auth/authenticate"
    SignUpEndpoint= "/api/v1/auth/register"
    refreshEndPoint = "/api/v1/auth/refresh-token"
    apiUrl = environment.apiURLgateway + this.servicename 
    private userDataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
    userData$: Observable<any> = this.userDataSubject.asObservable();
  constructor(private http:HttpClient,private tokenservice : TokenService , private router:Router) { }
    
    login(loginRequest:  any):Observable<any>{
       return this.http.post<successLogin>(this.apiUrl + this.authenticationEndpoint, loginRequest)
         .pipe(tap((result)=>{
            const access_token = result.access_token
            const refresh_token = result.refresh_token
            this.userDataSubject.next({access_token,refresh_token, userInfo: this.getUserDataFromToken(access_token)});
            this.tokenservice.storeAccessToken(result.access_token)
            this.tokenservice.storeRefrshToken(result.refresh_token)
            this.tokenservice.storeUserId(result.id)
         }))  
    }
    signup(signupRequest:any):Observable<any>{{
        return this.http.post(this.apiUrl + this.SignUpEndpoint,signupRequest)
    }}
    logout(): void {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user_id")
      this.userDataSubject.next(null);
      this.router.navigate(['account/login'])
      // Call http logout method for block refresh token
    }
    get userData(): any {
      // return userData(userInfo, access_token, refresh_token) or null
      return this.userDataSubject.value
    }
  generateNewTokens(): Observable<HttpEvent<any>> {
    console.log("refreshing ")
    console.log("old tokens :  " + this.userDataSubject.value?.access_token)
    const refresh_token = this.userDataSubject.value?.refresh_token;
    console.log("refeesh_token"+ refresh_token)
    const header :HttpHeaders= new HttpHeaders({
      "Authorization": "Bearer "+refresh_token
    })
    //header.append("Authorization",`Bearer ${refresh_token}`) 
    return this.http.post(this.apiUrl + this.refreshEndPoint,{},{headers:header}).pipe(
      map((res: any) => {
        const access_token :string = res?.access_token;
        const refresh_token :string= res?.refresh_token;
        this.userDataSubject.next({access_token, refresh_token, userData: this.getUserDataFromToken(access_token)});
        localStorage.setItem("accessToken" ,access_token);
        localStorage.setItem("refreshToken", refresh_token);
        console.log("new tokens :  " + this.userDataSubject.value?.access_token)

        return res
      })
    )

  }
    get isAuthenticated(): boolean {
        const refresh_token = this.userDataSubject.value?.refresh_token;
        const accessToken = localStorage.getItem("accessToken")
        if (!refresh_token) {
          return false
        }
        return this.isAuthTokenValid(refresh_token)
      }
      
      isAuthTokenValid(token: string): boolean {
        const decoded: any = jwtDecode(token);
        // default decoded exp format is second
        console.log(decoded?.exp)
        const expMilSecond: number = decoded?.exp * 1000; // milliseconds
        const currentTime = Date.now(); // milliseconds
        if (expMilSecond < currentTime) {
          return false;
        }
        return true;
      }

    getUserDataFromToken(token: string): any {
        const decoded: any = jwtDecode(token);
        return decoded.data
      }



}
