import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { UsersServiceService } from './users-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoutesGuardGuard implements CanActivate {
  constructor(private UsersServiceService: UsersServiceService, private router: Router){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any{
      let isLogged = this.UsersServiceService.isLogged;
      if(isLogged){
        return true
      } else {
        this.router.navigate(['/login']);
      }
    }
  
}
