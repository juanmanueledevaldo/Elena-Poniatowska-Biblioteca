import { IUser } from 'src/app/Model/user'
export interface IStudent extends IUser{
    Matricula: string
    Telefono: string
    Email: string
    Carrera: string
    Cuatrimestre: string
    Grupo: string
}