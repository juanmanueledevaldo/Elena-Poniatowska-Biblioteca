import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import Swal from "sweetalert2"
import { FormGroup, FormControl } from '@angular/forms'
//INTERFACE
import { IBook } from 'src/app/Model/book'
import { IDetail } from 'src/app/Model/detail'
//INTERFACE//////////////////////////////////////////////////
//SERVICE
import { BookService } from 'src/app/Service/book.service'
import { DetailService } from 'src/app/Service/detail.service'
import { Toast } from 'ngx-toastr'
import { debugOutputAstAsTypeScript } from '@angular/compiler';
//SERVICE//////////////////////////////////////////////////
@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.scss']
})
export class AddEditBookComponent implements OnInit {

  seeBook: any
  book: IBook = { nombre: "", borrado: false, id: 0, anio: "", autor: "", editorial: "", estante: "", folio: "", genero: "", paginas: 0, stock: 0, descripcion: "", imagen: "" }
  detail: IDetail
  BookForm: FormGroup
  public books: IBook[] = []
  //VAR/////////////////////////////////////////////////////
  constructor(//LOADPAGE

    private _detailService: DetailService,
    private _bookService: BookService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
   this.gets();
  

  }//LOADPAGE/////////////////////////////////////////////////////
  CreateFormGroup()//METODS
  {
    return new FormGroup(
      {
        Folio: new FormControl(""),
        Nombre: new FormControl(""),
        Autor: new FormControl(""),
        Editorial: new FormControl(""),
        Genero: new FormControl(""),
        Estante: new FormControl(""),
        Anio: new FormControl(""),
        Paginas: new FormControl(""),
        Descripcion: new FormControl(""),
        Stock: new FormControl(""),
     
      }
    )
  }
  onResetForm() {
    this.BookForm.reset();
  }
  onSaveForm() {
    if (this.BookForm.valid) {
      this.book.folio = this.BookForm.get("Folio").value
      this.book.nombre = this.BookForm.get("Nombre").value
      this.book.autor = this.BookForm.get("Autor").value
      this.book.editorial = this.BookForm.get("Editorial").value
      this.book.genero = this.BookForm.get("Genero").value
      this.book.estante = this.BookForm.get("Estante").value
      this.book.anio = this.BookForm.get("Anio").value
      this.book.paginas = this.BookForm.get("Paginas").value
      this.book.descripcion = this.BookForm.get("Descripcion").value
      this.book.stock = this.BookForm.get("Stock").value
      this.book.imagen = "../../../assets/Images/2827_1_books_01831_lacabana.jpg"
      this.book.borrado = false

      if (this.book.id != null && this.book.id != 0) {
        this._bookService.update(this.book).subscribe(
          res => {
            Swal.fire(
              {
                title: "Se actualizo correctamente"
              }
            )
          },
          error => { Swal.fire({ title: "No se puedo actualizar el libro" }) }
        )
      }
      else {
        this._bookService.post(this.book).subscribe(
          res => { Swal.fire({ title: "Creado" }) },
          error => Swal.fire({ title: "No se pudo registrar el libro correctamente" })
        )

      }
      this.onResetForm()
    }
  }
  Deletelibro(book: number){
    let bookSeleted  = this.books.find(x => x.id == book);
    debugger;
    this._bookService.delete(book).subscribe((data) => {
      this.get();
      bookSeleted.borrado  = !bookSeleted.borrado;
    
      if(bookSeleted.borrado)
      Swal.fire({title:"Se ha borrado el libro correctamente"})
      else
      Swal.fire({title:"El libro esta activo"})
    });
    this.books.find(x => x.id == book).borrado = bookSeleted.borrado;
  }
  get() //IBOOK
  {
    
    this.route.params.subscribe(
      paramsBook => {
        debugger;
        this.seeBook = paramsBook["id"]
        if (this.seeBook) {
          this._bookService.get(this.seeBook).subscribe(
            book => {
              this.book = book
              Swal.fire(
                {
                  title: `${this.book.nombre}`,
                }
              )
            },
            error => console.log(error)
          )
        }
        else
          console.log("No hay parametros")
      },
      error => { Swal.fire({ title: "Que haces por aqui" }) }
    )

  }//IBOOK///////////////////////////////////////////////////// 
  
  gets(){//METODS///IBOOK[]
    this._bookService.getAll().subscribe(
      bookList => {this.books = bookList},
      error => console.log(error)
    )
  }
  add() //IDETAIL
  {
    this._detailService.post(this.book).subscribe(
      res => { Swal.fire({ title: "Se agrego el libro", showConfirmButton: true, timer: 1200 }) },
      error => console.log(error)
    )
    //     //METODS/////////////////////////////////////////////////////
  }//IDETAIL/////////////////////////////////////////////////////
  get folio() { return this.BookForm.get("Folio") }
  get nombre() { return this.BookForm.get("Nombre") }
  get autor() { return this.BookForm.get("Autor") }
  get editorial() { return this.BookForm.get("Editorial") }
  get genero() { return this.BookForm.get("Genero") }
  get estante() { return this.BookForm.get("Estante") }
  get anio() { return this.BookForm.get("Anio") }
  get paginas() { return this.BookForm.get("Paginas") }
  get descripcion() { return this.BookForm.get("Descripcion") }
  get stock() { return this.BookForm.get("Stock") }
  //METODS///////////////////////////////////////////////////////

}



