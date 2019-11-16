//Component
import { Component, OnInit } from '@angular/core';
////////////////////////////////////////////////////////////
//Interface
import { IBook } from 'src/app/Model/book';
////////////////////////////////////////////////////////////
//Service
import { BookService } from 'src/app/Service/book.service';
////////////////////////////////////////////////////////////
//Alert
////////////////////////////////////////////////////////////


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public bookList: IBook[] = [];
  filter = "";
  constructor(private _bookService: BookService) { }
  ngOnInit() {
    this._bookService.getAll().subscribe(
      books => {
        this.bookList = books;
        console.log(this.bookList);
      },
      error => {
        console.log(error.error.message)
      }
    );
  }
  add(id: string) {
    
    this.getBook(id);
    
  }
  getBook(id: string) {
    this._bookService.get(id).subscribe(
      added => {
        console.log(added);
      }
    )
  }

}
