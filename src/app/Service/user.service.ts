//COMPONENT
import { Injectable } from '@angular/core';
/////////////////////////////////////////////////////////////////
//INTERFACE
import { IUser } from '../Model/user';
/////////////////////////////////////////////////////////////////
//HTTP
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
/////////////////////////////////////////////////////////////////
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUrl = "http//localhost:59417/api/usuario";
  constructor(
    private http: HttpClient
  ) { }
  post(user: IUser) {
    return this.http.post(this._apiUrl, user).pipe(
      catchError(this.handleError)
    );
  }
  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._apiUrl).pipe(
      retry(1)
    )
  }
  get(id:number) : Observable<IUser> {
    let requestUrl = `${this._apiUrl}/${id}`;
    return this.http.get<IUser>(requestUrl).pipe(
      retry(1)
    );
  }
  update(user:IUser) {
    let requestUrl = `${this._apiUrl}/${user.Id}`;
    return this.http.put(requestUrl,user).pipe(
      catchError(this.handleError)
    );
  }
  delete(id:number){
    let requestUrl =`${this._apiUrl}/${id}`;
    this.http.delete(requestUrl).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let ErrorMessage = "";
    if (error.error instanceof ErrorEvent) {
      ErrorMessage = error.error.message;
    } else {
      ErrorMessage = error.error + error.status;
    }
    return throwError(ErrorMessage);
  }
}
