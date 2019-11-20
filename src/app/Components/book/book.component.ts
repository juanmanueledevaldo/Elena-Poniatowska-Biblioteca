//Component
import { Component, OnInit } from '@angular/core';
//////////////////////////////////////////////////
//Interface
import { IBook } from 'src/app/Model/book';
import { IDetail } from 'src/app/Model/detail';
//////////////////////////////////////////////////
//Servicio
import { BookService } from 'src/app/Service/book.service';
import { DetailService } from 'src/app/Service/detail.service';
//////////////////////////////////////////////////
//Route
import { ActivatedRoute } from '@angular/router';
//////////////////////////////////////////////////
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: IBook;
  id: any;
  constructor(
    private _detailService: DetailService,
    private _bookService: BookService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.route.params.subscribe(
      paramsBook => {
        console.log(paramsBook["id"]);
        this.id = paramsBook["id"];
        if (this.id) {
          this._bookService.get(this.id).subscribe(
            book => {
              console.log(book);
              this.book = book;
            },
            error => {
              console.log(error);
            }
          )
        } else
          console.log("no hay libro");
      },
      err => {
        console.log(err);
      }
    )
  }
  add() {
    this._detailService.postDetail(this.book).subscribe(res => {
      console.log(res);
    })
  }

}
