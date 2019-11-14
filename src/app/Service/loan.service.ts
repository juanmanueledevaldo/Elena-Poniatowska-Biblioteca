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
private _apiUrl ="http://localhost:59417/api/prestamo";
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
    let user:IUser = {Id:1,Nombre:"Juan",Apellido:"Garibay",Mote:"Juanitok",Tipo:"Admin",Contraseña:"password",Borrado:false,Activo:true};
    loan.Usuario = user;
    loan.Usuarioi = user.Id;
    loan.Id=0;
    loan.Folio="";
    loan.Fecha="";
    loan.Devolucion="";
    loan.Estado="";
    return this.http.post(this._apiUrl,loan).pipe(
      catchError(this.handleError)
    );
  }
  getAll():Observable<ILoan[]>{
    return this.http.get<ILoan[]>(this._apiUrl).pipe(
      retry(1)
    );
  }
  getFolio(loan:ILoan):Observable<ILoan>{
    let requestUrl =`${this._apiUrl}/${loan.Folio}`;
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
