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
  id:any;
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
    debugger;
    this.route.params.subscribe(
      paramsBook => {
        this.id = paramsBook["id"]
        if (this.id) {
          this._bookService.get(this.id).subscribe(
            book => {
              this.book = book;
              Swal.fire(
                {
                  title: `Has elegido ${this.book.Nombre}`
                }
              )
            },
            error => {
              console.log(error)
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
    this.detail.Libroi = this.book.Id;
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

