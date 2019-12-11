import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Service/login.service';

@Injectable({
  providedIn: 'root'
})
export class Authstudent implements CanActivate {

  role:string;
  constructor(private router: Router, private _service: LoginService) {
  }
  canActivate(): boolean {
    this._service.isAdmin().subscribe(data=>{
      debugger;
        this.role = data.toString();

    });
    if (this.role == 'Estudiante') {
      return true;
    } else {
      if(this.role=='Admin')
      {
        this.router.navigate(['/home'])
      }
      return false
    }
  }
}