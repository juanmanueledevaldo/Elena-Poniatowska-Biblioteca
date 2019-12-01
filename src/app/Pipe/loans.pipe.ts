import { Pipe, PipeTransform } from '@angular/core';
import { ILoan } from '../Model/loan';
import { IUser } from '../Model/user';

@Pipe({
  name: 'loans'
})
export class LoansPipe implements PipeTransform {

  transform(Loans: ILoan[], arg: any): any {
    const result: ILoan[] = [];
    for(const loan of Loans){
      if(loan.folio.toLowerCase().indexOf(arg.toLowerCase()) > -1)
      result.push(loan);
    }
    return result;
  }

}
