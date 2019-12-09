import { Injectable } from '@angular/core'
import { catchError, retry } from "rxjs/operators"
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import  * as FileSaver from 'file-saver';
import { IBook } from '../Model/book' 


@Injectable({
    providedIn: 'root'
  })

  export class ExcelService{
      private _apiUrl:string = "https://localhost:44375/api/reporte/GetExcelLoans"
      private _apiUrl2:string = "https://localhost:44375/api/reporte/GetExcelBooks"
      private _apiUrl3:string = "https://localhost:44375/api/reporte/GetExcelUsers"
      headers:HttpHeaders

    constructor(
        private http:HttpClient,
    
    )
    {
    }

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
  getExcelBooks()
  {
    this.http.get(this._apiUrl2 , { headers: this.headers, responseType: 'blob'})
		.subscribe((result:any)=>{
      
			var blob = new Blob([result],{type:'application/vnd.ms-excel;charset=utf-8'});
			FileSaver.saveAs(blob,"Reporte De Libros.xlsx");
		})
  } 

  getExcelUsers()
  {
    this.http.get(this._apiUrl3 , { headers: this.headers, responseType: 'blob'})
		.subscribe((result:any)=>{
      
			var blob = new Blob([result],{type:'application/vnd.ms-excel;charset=utf-8'});
			FileSaver.saveAs(blob,"Reporte De Usuarios.xlsx");
		})
  } 

  getExcelLoans()
  {
    this.http.get(this._apiUrl , { headers: this.headers, responseType: 'blob'})
		.subscribe((result:any)=>{
      
			var blob = new Blob([result],{type:'application/vnd.ms-excel;charset=utf-8'});
			FileSaver.saveAs(blob,"Reporte De Prestamos.xlsx");
		})
  }

  }