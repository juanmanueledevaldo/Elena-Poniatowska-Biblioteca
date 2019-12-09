import { Component, OnInit } from '@angular/core';





import { ExcelService } from 'src/app/Service/excel.service'
import { IBook } from 'src/app/Model/book'
//import { BookService } from 'src/app/Service/book.service'
import { IWebDriverOptionsCookie } from 'selenium-webdriver';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {
//book : IBook;
//public books: IBook[] = []
  constructor(private _excelService: ExcelService) { }

  ngOnInit() {
          
  }

  //gets()
  //{
    //this._bookService.get().subscribe(
      //bookList => { this.books = bookList },
      //error =>

    //)
  //}

}
