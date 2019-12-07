//COMPONENTS
import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'
import * as jsPDF from 'jspdf'
import { ViewChild, ElementRef } from '@angular/core'

//COMPONENTS////////////////////////////////////////////////
//INTERFACE
import { ILoan } from 'src/app/Model/loan'
import { LoanService } from 'src/app/Service/loan.service'
//ITNERFACE//////////////////////////////////////////////////
//SERVICE
//SERVICE//////////////////////////////////////////////////
@Component({
  selector: 'app-add-edit-loan',
  templateUrl: './add-edit-loan.component.html',
  styleUrls: ['./add-edit-loan.component.scss']
})
export class AddEditLoanComponent implements OnInit {//VAR
filterLoans = ""
  //loans: ILoan[]
  loan: ILoan;
  public loans: ILoan[] = []
  //////////////////////////////////////////////////

  constructor(private _loanService: LoanService)//LOADPAGE
  { }

  ngOnInit() {
    this.gets()
    //////////////////////////////////////////////////
  }//LOADPAGE//////////////////////////////////////////////////
  //METODS
  gets()//ILOAN[]
  {
    this._loanService.getAll().subscribe(
      loanList => { this.loans = loanList },
      error =>  console.log(error) 
    )
  }
  get(id: any)//ILOAN
  {
    this._loanService.getFolio(id).subscribe(
      getLoan => {this.loan = getLoan}
    )
  }
  remove() {
    Swal.fire(
      {
        text: "hiciste click en remove, este boton esta en desarrollo"
      }
    )
  }
  print(id: any) {
    Swal.fire(
      {
        title: "Has heco click en imprimir el prestamo",
        text: "Este boton esta en desarrollo"
      }
    )
  }
  //METODS//////////////////////////////////////////////////
  

  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;

  public downloadAsPDF() {


    const doc = new  jsPDF();

    var res = doc.fromHTML(document.getElementById('pdfTable'), 1, 1);
 doc.save('Prueba');

  }

}
