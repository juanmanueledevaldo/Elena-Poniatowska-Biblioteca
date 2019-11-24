import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../Model/user';

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {

  transform(Users: IUser[], arg: any): any {
    const result: IUser[] = [];
		for (const user of Users) {
			if (user.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
				user.apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
				user.mote.toString().indexOf(arg) > -1)
				result.push(user);
		}
		return result;
  }

}
