//COMPONENT
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms'
import Swal from "sweetalert2"
//COMPONENT//////////////////////////////////////////
//INTERFACE
import { IDetail } from 'src/app/Model/detail'
import { ILoan } from 'src/app/Model/loan'
//INTERFACE//////////////////////////////////////////
//SERVICE
import { LoanService } from 'src/app/Service/loan.service'
import { DetailService } from 'src/app/Service/detail.service'
//SERVICE//////////////////////////////////////////

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {//VAR

  @Input('data') LoanFormm: FormGroup;
  @Output() OnSaveLoan = new EventEmitter<ILoan>()
  loan: ILoan = { 
    id: 0, 
    folio: "", 
    detalle: null, 
    devolucion: "", 
    estado: "", 
    fecha: "", 
    usuario: null, 
    usuarioi: 0 }
  LoanForm: FormGroup
  seeLoan: any
  public detailList: IDetail[] = []
  //VAR//////////////////////////////////////////
  constructor(//LOADPAGE
    private _detailService: DetailService,
    private _loanService: LoanService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.LoanForm = this.CreateFormGroup();
    this.get()
    this.getDetails()
  }//LOADPAGE//////////////////////////////////////////
  //METODS
  get() {
    this.route.params.subscribe(
      params => {
        this.seeLoan = params["id"];
        if (this.seeLoan != null && this.seeLoan != NaN) {
          this._loanService.getFolio(this.seeLoan).subscribe(
            getLoan => {
              this.loan = getLoan
              this.LoanForm.controls["Folio"].setValue(this.loan.folio)
              this.LoanForm.controls["Fecha"].setValue(this.loan.fecha)
              this.LoanForm.controls["Devolucion"].setValue(this.loan.devolucion)
              this.LoanForm.controls["Estado"].setValue(this.loan.estado)
            },
            error => console.log(error)
          )
        }
        else
          Swal.fire({ title: "Error con algo" })
      },
      error => console.log(error)
    )//subscribeParams
  }
  getDetails() {
    this._detailService.getAll().subscribe(
      details => {
        this.detailList = details
      },
      error => {
        console.log(error.error.message)
      }
    )
  }
  CreateFormGroup()//LOANFORM///ILOAN
  {
    return new FormGroup(
      {
        Folio: new FormControl(""),
        Fecha: new FormControl(""),
        Devolucion: new FormControl(""),
        Estado: new FormControl(""),
      }
    )
  }
  onResetForm() {
    this.LoanForm.reset()
  }
  onSaveForm() {
    if (this.LoanForm.valid) {
      this.loan.folio = this.LoanForm.get("Folio").value
      this.loan.fecha = this.LoanForm.get("Fecha").value
      this.loan.devolucion = this.LoanForm.get("Devolucion").value
      this.loan.estado = this.LoanForm.get("Estado").value
      this.loan.usuarioi = 1

      if (this.loan.id != null && this.loan.id != 0) {
        this._loanService.update(this.loan).subscribe(
          data => {
            Swal.fire(
              {
                title: "Ya quedo el update padrino",
                showConfirmButton: true,
                timer: 1200,
              }
            )
          },
          error => {
            Swal.fire(
              {
                title: "Valio kabesuki el update",
                text: "Algo salio mal",
                footer: "Alivianate",
              }
            )
          }
        )
      }
      else {

        this._loanService.postLoan(this.loan).subscribe(
          data => {
            Swal.fire(
              {
                title: "Creado",
                showConfirmButton: true,
                timer: 1200
              }
            )
          },
          error => {

            Swal.fire(
              {

                title: "valio kabezuki el create",
                text: "Revisalo",
                footer: `F`
              }
            )

          }
        )
      }
      this.onResetForm()
    }
    else{
      Swal.fire(
        {
          title :"Quepedo"
        }
      )
    }
  }//ILOAN///LOANFORM//////////////////////////////////////////
  deleteItem(id: any) {
    this._detailService.delete(id).subscribe(
      data => {
        location.reload()
        Swal.fire(
          {
            title: "Eliminado",
            text: "Holap"
          }
        )
      }
    )
  }
  get folio() { return this.LoanForm.get("Folio") }
  get estado() { return this.LoanForm.get("Estado") }
  get fecha() { return this.LoanForm.get("Fecha") }
  get devolucion() { return this.LoanForm.get("Devolucion") }
  //METODS//////////////////////////////////////////

}
