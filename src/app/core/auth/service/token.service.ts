import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor() { }

  storeAccessToken = (token:string) => {
    localStorage.setItem('accessToken',token)
  }

  storeRefrshToken = (token:string) => {
    localStorage.setItem('refreshToken',token)
  }
  
  storeUserId = (id:number) => {
    localStorage.setItem('user_id',id.toString())
  }

  getAccessToken = () => {
    return localStorage.getItem('accessToken')
  }

  getRefreshToken = () => {
    return localStorage.getItem('refreshToken')
  }
  getUserId = () => {
    return Number.parseInt( localStorage.getItem('user_id')!)
  }

  deleteUserId =()=>{
    localStorage.removeItem('user_id')

  }
  deleteAccessToken = () => {
    localStorage.removeItem('accessToken')
  }

  deleteRefreshToken = () => {
    localStorage.removeItem('refreshToken')
  }

}