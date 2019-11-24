import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loans'
})
export class LoansPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
