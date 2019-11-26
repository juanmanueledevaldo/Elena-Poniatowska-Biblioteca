//COMPONENT
import { Injectable } from '@angular/core'
import { catchError, retry } from "rxjs/operators"
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
//COMPONENT///////////////////////////////////////////////////////////////
//INTERFACE
import { IBook } from '../Model/book'
//INTERFACE///////////////////////////////////////////////////////////////
@Injectable({
  providedIn: 'root'
})
export class BookService {//VAR
  private _apiUrl:string ="https://localhost:44375/api/libro"
  //COMPONENT///////////////////////////////////////////////////////////////
  
  constructor(
    private http:HttpClient
    ) //LOADPAGE
  { }//COMPONENT///////////////////////////////////////////////////////////////
  
  private handleError(error:HttpErrorResponse)//METODS
  {
    let ErrorMessage =""
    if (error.error instanceof ErrorEvent) {
      ErrorMessage = `${error.error.message}`
    }else{
      ErrorMessage = `${error.status}, ${error.error}`
    }
    return throwError(ErrorMessage)
  }
  getAll():Observable<IBook[]>//IBOOK[]
  {
    return this.http.get<IBook[]>(this._apiUrl).pipe(

    )
  }//IBOOK[]///////////////////////////////////////////////////////////////
  get(id:number):Observable<IBook>//IBOOK
  {
    let requestUrl = `${this._apiUrl}/${id}`
    return this.http.get<IBook>(requestUrl).pipe(

    )
  }
  post(book:IBook)
  {
    return this.http.post(this._apiUrl,book).pipe(
      catchError(this.handleError)
    )
  }
  update(book:IBook)
  {
    let requestUrl = `${this._apiUrl}/${book.id}`
    return this.http.put(requestUrl, book).pipe(
      catchError(this.handleError)
    )
  }
  delete(id:number)
  {
    let requestUrl = `${this._apiUrl}/${id}`
    return this.http.delete(requestUrl).pipe(
      catchError(this.handleError)
    )
  }
  //METODS///IBOOK////////////////////////////////////////////////////////////
  
}
