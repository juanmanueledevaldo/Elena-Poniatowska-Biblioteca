//COMPONENT
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import Swal from "sweetalert2";
//COMPONENT///////////////////////////////////////////////
//INTERFACE
import { IBook } from 'src/app/Model/book'
import { IDetail } from 'src/app/Model/detail'
///INTERFACE///////////////////////////////////////////////
//SERVICE
import { BookService } from 'src/app/Service/book.service'
import { DetailService } from 'src/app/Service/detail.service'
///SERVICE////////////////////////////////////////////////

@Component({
  selector: 'app-detailbook',
  templateUrl: './detailbook.component.html',
  styleUrls: ['./detailbook.component.scss']
})
export class DetailbookComponent implements OnInit {//VAR

  book: IBook
  detail: IDetail
  seeBook:any;
  ///VAR////////////////////////////////////////////////////////
  constructor(//LOADPAGE
    private _detailService: DetailService,
    private _bookService: BookService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.get()
  }///LOADPAGE////////////////////////////////////////////////////////
  get()//METODS///IBOOK
  {
    this.route.params.subscribe(
      paramsBook => {
        this.seeBook = paramsBook["id"]
        if (this.seeBook) {
          this._bookService.get(this.seeBook).subscribe(
            getBook => {
              this.book = getBook;
              Swal.fire(
                {
                  title: `Has elegido ${this.book.nombre}`
                }
              )
            },
            error => {
              Swal.fire(
                {
                  title:"Valio kabezuki el get del libro"
                }
              )
            }
          )
        } else
          console.log("no hay libro")
      },
      err => {
        console.log(err)
      }
    )
  }//IBOOK//////////////////////////////////////////
  add() {//IDETAIL
    this.detail.libroi = this.book.id;
    this._detailService.post(this.detail).subscribe(
      res => {
        Swal.fire(
          {
            title:"SIMON"
          }
        )
      }
    )
  }//IDETAIL//////////////////////////////////////////
  //METODS//////////////////////////////////////////
}

