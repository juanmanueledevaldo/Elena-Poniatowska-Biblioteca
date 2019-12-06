import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdmin implements CanActivate {


  constructor(private router: Router, private _service: LoginService) {
  }
  canActivate(): boolean {
    debugger;
    if (this._service.loggedAdmin()) {
      console.log('true')
      return true
    } else {
      console.log('false')
      if( this._service.loggedIn())
      {
        this.router.navigate(['/home'])
      }else{
        this.router.navigate(['/login'])
      }
       
      
      return false
    }
  }
}
