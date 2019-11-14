//COMPONENT
import { Injectable } from '@angular/core';
/////////////////////////////////////////////////////////////////
//INTERFACE
import { IBook } from '../Model/book';
/////////////////////////////////////////////////////////////////
//HTTP
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
/////////////////////////////////////////////////////////////////
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _apiUrl:string ="http://localhost:59417/api/libro";
  constructor(private http:HttpClient) { }
  private handleError(error:HttpErrorResponse){
    let ErrorMessage ="";
    if (error.error instanceof ErrorEvent) {
      ErrorMessage = `${error.error.message}`
    }else{
      ErrorMessage = `${error.status}, ${error.error}`
    }
    return throwError(ErrorMessage);
  }
  getAll():Observable<IBook[]>{
    return this.http.get<IBook[]>(this._apiUrl).pipe();
  }
  get(id:string):Observable<IBook>{
    let requestUrl = `${this._apiUrl}/${id}`;
    return this.http.get<IBook>(requestUrl).pipe();
  }
}
