import { IDetail } from './detail';
import { IUser } from './user';
export interface ILoan {
    Id:number;
    Folio:string;
    Fecha:string;
    Devolucion:string;
    Estado:string;
    Usuarioi:number;
    Usuario:IUser;
    Detalle:IDetail[];
}

