import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ILogin } from '../Model/login';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44375/api/login';






  login(login:ILogin) {
    return this.http.post(this.BaseURI , login);
  }

  getUserProfile(id:number) {
    return this.http.get(`${this.BaseURI}/${id}`);
  }
  get isUserLoggedIn(){
    if(localStorage.getItem('currentUser') != null)
    this.loggedIn.next(true);
    return this.loggedIn.asObservable();
} 
}