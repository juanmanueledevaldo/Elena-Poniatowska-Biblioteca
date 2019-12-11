//COMPONENT
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs'
import { catchError, retry } from "rxjs/operators"
//COMPONENT////////////////////////////////////////////////////////////////////
//INTERFACE
import { IDetail } from '../Model/detail'
import { IBook } from 'src/app/Model/book'
//INTERFACE////////////////////////////////////////////////////////////////////

@Injectable({
  providedIn: 'root'
})
export class DetailService {//VAR
  private _apiUrl:string= "https://localhost:44375/api/detalle"
  detail:IDetail={id:0,libroi:0,libro:null,prestamo:null,prestamoi:0};
  //VAR////////////////////////////////////////////////////////////////////
  constructor(private http:HttpClient) //LOADPAGE
  { }//LOADPAGE////////////////////////////////////////////////////////////////////
  private handleError(error:HttpErrorResponse)//METODS
  {
    let ErrorMessage=""
    if (error.error instanceof ErrorEvent) {
      ErrorMessage = `${error.error.message}`
    } else {
      ErrorMessage = `${error.status}, ${error.error}`
    }
    return throwError(ErrorMessage)
  }
  post(det)//IDETAIL
  {
    this.detail.libroi = +det
    return this.http.post(this._apiUrl, this.detail).pipe(
      catchError(this.handleError)
    )
  }
  getAll():Observable<IDetail[]>
  {
    return this.http.get<IDetail[]>(this._apiUrl).pipe(
      retry(1)
    );
  }
  getFolio(detail:IDetail):Observable<IDetail>
  {
    let requestUrl = `${this._apiUrl}/${detail.prestamoi}`
    return this.http.get<IDetail>(requestUrl).pipe(
      retry(1)
    );
  }
  delete(id:any){
    let requestUrl =`${this._apiUrl}/${id}`
    return this.http.delete(requestUrl).pipe(
      catchError(this.handleError)
    );
  }//IDETAIL//METODS////////////////////////////////////////////////////////////////////
}

