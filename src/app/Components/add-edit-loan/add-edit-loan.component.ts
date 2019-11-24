//COMPONENTS
import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'

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

  loans:ILoan[]
  loan:ILoan;
//////////////////////////////////////////////////

  constructor(private _loanService:LoanService)//LOADPAGE
   { }

  ngOnInit() {
    this.gets()
//////////////////////////////////////////////////
  }//LOADPAGE//////////////////////////////////////////////////
//METODS
gets()//ILOAN[]
{
  this._loanService.getAll().subscribe(
    loanList=>{
      this.loans = loanList
      Swal.fire(
        {
          title:"Lista de prestamos cargada"
        }
      )
    },
    error=>{
      Swal.fire(
        {

          title:"nel"
        }
      )
    }
  )
}
get(id:any)//ILOAN
{
  this._loanService.getFolio(id).subscribe(
    getLoan =>{
      this.loan = getLoan
    }
  )
}
remove()
{
  Swal.fire(
    {
      text:"hiciste click en remove, este boton esta en desarrollo"
    }
  )
}
print(id:any)
{
  Swal.fire(
    {
      title:"Has heco click en imprimir el prestamo",
      text:"Este boton esta en desarrollo"
    }
  )
  console.log(`El id es ${id} gg`);
  
}
//METODS//////////////////////////////////////////////////
}
