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
  loan: ILoan = { Id: 0, Folio: "", Detalle: null, Devolucion: "", Estado: "", Fecha: "", Usuario: null, Usuarioi: 0 }
  LoanForm: FormGroup
  public detailList: IDetail[] = []
  //VAR//////////////////////////////////////////
  constructor(//LOADPAGE
    private _detailService: DetailService,
    private _loanService: LoanService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.LoanForm = this.CreateFormGroup();
    this.route.params.subscribe(
      params => {
        this.loan.Id = params["id"];
        if (this.loan.Id != null) {
          this._loanService.getFolio(this.loan.Folio).subscribe(
            data => {
              this.loan = data
              this.LoanForm.controls["Folio"].setValue(this.loan.Folio)
              this.LoanForm.controls["Fecha"].setValue(this.loan.Fecha)
              this.LoanForm.controls["Devolucion"].setValue(this.loan.Devolucion)
              this.LoanForm.controls["Estado"].setValue(this.loan.Estado)
            },
            error => {
              
            }
          )
        }
      },
      error => {
        console.log(error)
      }
    )//subscribeParams
    this.getList()
  }//LOADPAGE//////////////////////////////////////////
  //METODS
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
  onResetForm() 
  {
    this.LoanForm.reset()
  }
  onSaveForm() 
  {
    if (this.LoanForm.valid) {
      this.loan.Id = 0
      this.loan.Folio = this.LoanForm.get("Folio").value
      this.loan.Fecha = this.LoanForm.get("Fecha").value
      this.loan.Devolucion = this.LoanForm.get("Devolucion").value
      this.loan.Estado = this.LoanForm.get("Estado").value
      this.loan.Usuarioi = 1

      if (this.loan.Id != null && this.loan.Id !=0) {
        this._loanService.update(this.loan).subscribe(
          data => {
            Swal.fire(
              {
                title: "Ya quedo padrino",
                showConfirmButton: true,
                timer: 1200,
              }
            )
          },
          error => {
            Swal.fire(
              {
                title: "Valio kabesuki",
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

                title: "valio kabezuki.com",
                text: "Revisalo",
                footer: `F`
              }
            )

          }
        )
      }
      this.onResetForm()
    }
  }//ILOAN///LOANFORM//////////////////////////////////////////
  getList() {
    this._detailService.getAll().subscribe(
      details => {
        this.detailList = details
     
      },
      error => {
        console.log(error.error.message)
      }
    )
  }
  deleteItem(id: number) {
    this._detailService.delete(id).subscribe(
      data =>{
        location.reload()
        Swal.fire(
          {
            title:"Eliminado",
            text:"Holap"
          }
        )
      } 
    )
  }
  get folio() {
    return this.LoanForm.get("Folio")
  }
  get estado() {
    return this.LoanForm.get("Estado")
  }
  get fecha() {
    return this.LoanForm.get("Fecha")
  }
  get devolucion() {
    return this.LoanForm.get("Devolucion")
  }
  //METODS//////////////////////////////////////////

}
