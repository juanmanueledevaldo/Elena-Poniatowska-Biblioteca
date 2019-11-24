import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../Model/book';

@Pipe({
  name: 'books'
})
export class BooksPipe implements PipeTransform {

  transform(Books: IBook[], arg: any): any {
    const result: IBook[] = [];
    for (const book of Books) {
			if (book.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
				book.autor.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
				book.paginas.toString().indexOf(arg) > -1)
				result.push(book);
		}
		return result;
  }

}
