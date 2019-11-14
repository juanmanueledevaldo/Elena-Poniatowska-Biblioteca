import { Injectable } from '@angular/core';
import { IBook } from 'src/app/Model/book';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

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
  postDetail(book:IBook):Observable<IBook>{
    debugger;
    return this.http.post<IBook>(urlApi, book).pipe()
  }
}
