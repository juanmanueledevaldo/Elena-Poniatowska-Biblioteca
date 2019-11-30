//COMPONENT
import { Component, OnInit } from '@angular/core'
import Swal from "sweetalert2"
//COMPONENT////////////////////////////////////////////////////////////
//INTERFACE
import { IBook } from 'src/app/Model/book'
//INTERFACE
////////////////////////////////////////////////////////////
//SERVICE
import { BookService } from 'src/app/Service/book.service'
//SERVICE/////////////////////////////////////////////////////////


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {//VAR
  filterBooks = ""
  public books: IBook[] = []
  //VAR////////////////////////////////////////////
  constructor(//LOADPAGE
    private _bookService: BookService
  ) { }
  ngOnInit() {
    this.gets()
  }//LOADPAGE////////////////////////////////////////////
  gets(){//METODS///IBOOK[]
    this._bookService.getAll().subscribe(
      bookList => {this.books = bookList},
      error => console.log(error)
    )
  }
  //METODS////////////////////////////////////////////
  
}
