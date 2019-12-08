//COMPONENT
import { Injectable } from '@angular/core'
import { catchError, retry } from "rxjs/operators"
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
/////////////////////////////////////////////////////////////////
//INTERFACE
import { IUser } from '../Model/user'
//INTERFACE///////////////////////////////////////////////////////////////
@Injectable({
  providedIn: 'root'
})
export class UserService {//VAR
  private _apiUrl = "https://localhost:44375/api/usuario"
  //VAR/////////////////////////////////////////////////////////////////
  constructor(//LOADSERVICE
    private http: HttpClient
  ) { }//LOANSERVICE/////////////////////////////////////////////////////////////////
  private handleError(error: HttpErrorResponse) //METODS
  {
    let ErrorMessage = ""
    if (error.error instanceof ErrorEvent) {
      ErrorMessage = error.error.message
    } 
    else {
      ErrorMessage = error.error + error.status
    }
    return throwError(ErrorMessage)
  }
  post(user: IUser) //USER
  {
    return this.http.post(this._apiUrl, user).pipe(
      catchError(this.handleError)
    )
  }
  getAll(): Observable<IUser[]> 
  {
    return this.http.get<IUser[]>(this._apiUrl).pipe(
      catchError(this.handleError)
    )
  }
  get(id:number) : Observable<IUser> 
  {
    let requestUrl = `${this._apiUrl}/${id}`
    return this.http.get<IUser>(requestUrl).pipe(
      
      catchError(this.handleError)
    )
  }
  update(user:IUser) 
  {
    let requestUrl = `${this._apiUrl}/${user.id}`
    return this.http.put(requestUrl,user).pipe(
      catchError(this.handleError)
    )
  }
  delete(id:number)
  {
    let requestUrl = `${this._apiUrl}/${id}`
    return this.http.delete(requestUrl).pipe(
      catchError(this.handleError)
    )
  }USER///METODS///////////////////////////////////////////////////////////////
  
}
