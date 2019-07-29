// src/app/auth/role-guard.service.ts
import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const onlyForAdmin = route.data.onlyForAdmin;
    const token = JSON.parse(localStorage.getItem('token'));
    // decode the token to get its payload

    const tokenPayload = decode(token.jwtToken);
    console.log("ttokenPayload",tokenPayload.isadmin)
    console.log("exoected tike",onlyForAdmin)
    if (
      !this.auth.isAuthenticated() || 
      tokenPayload.isadmin !== onlyForAdmin
    ) {
      this.router.navigate(['dash']);
      return false;
    }
    return true;
  }
}