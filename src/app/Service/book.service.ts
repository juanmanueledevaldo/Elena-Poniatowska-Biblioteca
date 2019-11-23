//COMPONENT
import { Injectable } from '@angular/core'
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
  private _apiUrl:string ="http://localhost:44375/api/libro"
  //COMPONENT///////////////////////////////////////////////////////////////
  
  constructor(private http:HttpClient) //LOADPAGE
  { 

  }//COMPONENT///////////////////////////////////////////////////////////////
  
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
  }//METODS///IBOOK////////////////////////////////////////////////////////////
  
}
