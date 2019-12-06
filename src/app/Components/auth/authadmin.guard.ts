import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdmin implements CanActivate {

  role:string;
  constructor(private router: Router, private _service: LoginService) {
  }

  canActivate(): boolean {
    this._service.isAdmin().subscribe(data=>{
      console.log(data);
      this.role = data.toString();

    });
    if (this.role == 'Admin') {
      console.log("eres admin")
      return true;
    } else {
      
      if( this._service.loggedIn())
      {
        this.router.navigate(['/home'])
      }else{
        this.router.navigate(['/login'])
      }
       console.log("no eres admin")
      
      return false
    }
  }
}
