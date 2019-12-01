import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ILogin } from '../Model/login';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  constructor(private fb: FormBuilder, private http: HttpClient, private _router: Router) { }
  readonly BaseURI = 'https://localhost:44375/api/login';

  login(login:ILogin) {
    return this.http.post(this.BaseURI , login);
  }

  getUserProfile(id:number) {
    return this.http.get(`${this.BaseURI}/${id}`);
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

}