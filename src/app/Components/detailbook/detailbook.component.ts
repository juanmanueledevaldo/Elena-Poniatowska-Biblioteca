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
import { LoginService } from '../../Service/login.service';
import { UserService } from '../../Service/user.service';
import { IUser } from '../../Model/user';
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
  seeDetail:any
  id:any;
  user: IUser;

  ///VAR////////////////////////////////////////////////////////
  constructor(//LOADPAGE
    private _detailService: DetailService,
    private _bookService: BookService,
    private route: ActivatedRoute,
    private _service: LoginService,
    private __userService:UserService
  
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
              this.book = getBook
              this.details(this.seeBook);
            },
            error => console.log(error) 
          )
        } else
          console.log("no hay libro")
      },
      error => console.log(error) 
    )
  }//IBOOK//////////////////////////////////////////
  add() {//IDETAIL
    debugger
    this._service.getProfile().subscribe(data=>{
      this.id = data;
      this.__userService.get(this.id).subscribe(
        x => {
          this.user = x
          this.user.id;
        debugger;
        this._detailService.post(this.seeBook).subscribe(
          res => { 
            Swal.fire({ title: "Se ha hecho un prestamo, puedes ir a la biblioteca a solicitar tu libro", icon: 'success' , showConfirmButton: true, timer: 4200, }) 
            location.reload()
          },
          error => console.log(error)
        )
         })
      
         
      });
    
  }
  details(seeBook:number){
    //traer el inner de 
  }
  //IDETAIL//////////////////////////////////////////
  
  //METODS//////////////////////////////////////////
}

