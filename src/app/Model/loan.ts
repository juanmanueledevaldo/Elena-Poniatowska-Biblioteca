import { IDetail } from './detail'
import { IUser } from './user'
export interface ILoan {
    id:number
    folio:string
    fecha:string
    devolucion:string
    estado:string
    usuarioi:number
    usuario:IUser
    detalle:IDetail[]
}

