import { Injectable } from '@angular/core';
/////////////////////////////////////////////////////////////////
//INTERFACE
import { IBook } from '../Model/book';
import { ILoan } from '../Model/loan';
import { IDetail } from '../Model/detail';
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
export class LoanService {
  details:IDetail[];
private _apiUrl ="https://localhost:44375/api/prestamo";
  constructor(
    private http:HttpClient
  ) { }
  private handleError(error:HttpErrorResponse){
    let ErrorMessage ="";
    if (error.error instanceof ErrorEvent) {
      ErrorMessage = `${error.error.message}`
    }else{
      ErrorMessage = `${error.status}, ${error.error}`
    }
    return throwError(ErrorMessage);
  }
  postLoan(loan:ILoan){
    debugger;
    return this.http.post(this._apiUrl,loan).pipe(
      catchError(this.handleError)
    );
  }
  getAll():Observable<ILoan[]>{
    return this.http.get<ILoan[]>(this._apiUrl).pipe(
      retry(1)
    );
  }
  getFolio(folio:string):Observable<ILoan>{
    let requestUrl =`${this._apiUrl}/${folio}`;
    return this.http.get<ILoan>(requestUrl).pipe(
      retry(1)
    );
  }
  update(loan:ILoan){
    let requestUrl =`${this._apiUrl}/${loan.Id}`;
    return this.http.put(requestUrl,loan).pipe(
      catchError(this.handleError)
    );
  }
}
