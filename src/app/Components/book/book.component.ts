//COMPONENT
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import Swal from "sweetalert2"
//COMPONENT//////////////////////////////////////////////////
//INTERFACE
import { IBook } from 'src/app/Model/book'
import { IDetail } from 'src/app/Model/detail'
//INTERFACE//////////////////////////////////////////////////
//SERVICE
import { BookService } from 'src/app/Service/book.service'
import { DetailService } from 'src/app/Service/detail.service'
//SERVICE//////////////////////////////////////////////////

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {//VAR
  id: any
  book: IBook
  detail: IDetail
  //VAR/////////////////////////////////////////////////////
  constructor(//LOADPAGE
    
    private _detailService: DetailService,
    private _bookService: BookService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.get()
    
  }//LOADPAGE/////////////////////////////////////////////////////
  get() //METODS//IBOOK
  {
    this.route.params.subscribe(
      paramsBook => {
        this.id = paramsBook["id"]
        if (this.id) {
          this._bookService.get(this.id).subscribe(
            book => {
              this.book = book
              Swal.fire(
                {
                  title: `${this.book.Nombre}`,
                }
              )
            },
            error => {
          
            }
          )
        }
        else
          Swal.fire(
            {
              text: "Elige un libro"
            }
          )
      },
      err => {
        Swal.fire(
          {
            title: "Que haces por aqui"
          }
        )
      }
    )
    
  }//IBOOK///////////////////////////////////////////////////// 
  add() //IDETAIL
  {
    this._detailService.post(this.book).subscribe(res => {
      Swal.fire(
        {
          title: "Ya quedo padrino",
          showConfirmButton: true,
          timer: 1200
        }
      )
    },
      error => {
        Swal.fire(
          {
            title: "Valio kbza",
            text: "Nipedo"
          }
        )
      }
    )
    //METODS/////////////////////////////////////////////////////
  }//IDETAIL/////////////////////////////////////////////////////
  //METODS///////////////////////////////////////////////////////
}
