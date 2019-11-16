//COMPONENT
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from "rxjs/operators";
//////////////////////////////////////////////////////////////////////
//INTERFACE
import { IDetail } from '../Model/detail';
import { IBook } from 'src/app/Model/book';
//////////////////////////////////////////////////////////////////////

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private _apiUrl:string= "http://localhost:59417/api/detalle";
  constructor(private http:HttpClient) { }
  private handleError(error:HttpErrorResponse){
    let ErrorMessage="";
    if (error.error instanceof ErrorEvent) {
      ErrorMessage = `${error.error.message}`
    } else {
      ErrorMessage = `${error.status}, ${error.error}`
    }
    return throwError(ErrorMessage);
  }
  postDetail(book:IBook){
    let loanDetail:IDetail;
    loanDetail.Id = 0;
    loanDetail.Libro = book;
    return this.http.post(this._apiUrl, loanDetail).pipe(
      catchError(this.handleError)
    );
  }
  getAll():Observable<IDetail[]>{
    return this.http.get<IDetail[]>(this._apiUrl).pipe(
      retry(1)
    );
  }
  getFolio(detail:IDetail):Observable<IDetail>{
    let requestUrl = `${this._apiUrl}/${detail.Prestamoi}`;
    return this.http.get<IDetail>(requestUrl).pipe(
      retry(1)
    );
  }
  delete(id:number){
    let requestUrl =`${this._apiUrl}/${id}`;
    this.http.delete(requestUrl).pipe(
      catchError(this.handleError)
    );
  }
}

