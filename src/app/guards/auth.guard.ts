import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { GlobalsProvider } from '../providers/core/globals';
import { UserProvider } from '../providers/features/users';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private router: Router, 
    private uData: UserProvider,
    private globals: GlobalsProvider
  ) {}

  check

  canActivate(): boolean {
    console.log(this.globals.config.login);
    if(this.globals.config.login == false) {
      this.router.navigateByUrl('login')
      return this.globals.config.login;
    }
    return this.globals.config.login;
  }
  
}
