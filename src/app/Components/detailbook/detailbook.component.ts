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
  seeBook: any;
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
            getBook => { this.book = getBook },
            error => console.log(error) 
          )
        } else
          console.log("no hay libro")
      },
      error => console.log(error) 
    )
  }//IBOOK//////////////////////////////////////////
  add() {//IDETAIL
    this._detailService.post(this.seeBook).subscribe(
      res => { Swal.fire({ title: "Ya quedo padrino", showConfirmButton: true, timer: 1200 }) },
      error => console.log(error)
    )
  }//IDETAIL//////////////////////////////////////////
  //METODS//////////////////////////////////////////
}

