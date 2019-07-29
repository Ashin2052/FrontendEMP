// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn:'root'
})
export class AuthService {
  public jwtHelper: JwtHelperService
  constructor() {
    this.jwtHelper = new JwtHelperService();
  }
  // ...
  public isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('token'));
    if(token){
      console.log(token.jwtToken,"jettoken")
      // Check whether the token is expired and return
      // true or false
      console.log(!this.jwtHelper.isTokenExpired(token.jwtToken),"jwt isexpired")
      return !this.jwtHelper.isTokenExpired(token.jwtToken);
    }
    else
    return false
  }
}   