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
      this.role = data.toString();
    });
    if (this.role == 'Admin') {
      return true;
    } else {
      if(this.role=='Estudiante')
      {
        this.router.navigate(['/home'])
      }
      return false
    }
  }
}
