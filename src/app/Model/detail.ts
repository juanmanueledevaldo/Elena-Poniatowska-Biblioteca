import { IBook } from './book'
import { ILoan } from './loan'
export interface IDetail {
    id:number
    libroi:number
    prestamoi:number
    prestamo:ILoan
    libro:IBook
}
