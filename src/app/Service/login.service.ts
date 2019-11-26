import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ILogin } from '../Model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44375/api/login';






  login(login:ILogin) {
    return this.http.post(this.BaseURI , login);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/userProfile');
  }
}