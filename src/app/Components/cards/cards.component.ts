//COMPONENT
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
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
  filter = ""
  public bookList: IBook[] = []
  //VAR////////////////////////////////////////////
  constructor(//LOADPAGE
    private _bookService: BookService
  ) { }
  ngOnInit() {
    this.gets()
  }//LOADPAGE////////////////////////////////////////////
  gets(){//METODS///IBOOK[]
    this._bookService.getAll().subscribe(
      books => {
        this.bookList = books
        Swal.fire(
          {
            title:"Libros cargados correctamente"
          }
        )
      },
      error => {

      }
    );
  }
  
  //METODS////////////////////////////////////////////
  
}
