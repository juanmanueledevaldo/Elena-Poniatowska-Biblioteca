import { IBook } from './book'
import { ILoan } from './loan'
export interface IDetail {
    Id:number
    Libroi:number
    Prestamoi:number
    Prestamo:ILoan
    Libro:IBook
}
