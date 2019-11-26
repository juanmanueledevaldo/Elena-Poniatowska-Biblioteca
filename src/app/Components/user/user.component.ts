//COMPONENT
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"
import Swal from "sweetalert2"
//COMPONENT/////////////////////////////////////////
//INTERFACE
import { IUser } from "src/app/Model/user"
import { IStudent } from "src/app/Model/student"
//INTERFACE/////////////////////////////////////////
//SERVICE
import { UserService } from "src/app/Service/user.service"
//SERVICE/////////////////////////////////////////
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {//VAR

  @Input('data') UserFormFather: FormGroup
  @Output() OnSaveUser = new EventEmitter<IUser>()
  seeUser: any
  user: IUser = {id:0,apellido:"",contrasenia:"",tipo:"",activo:true,borrado:false,carrera:"",cuatrimestre:"",email:"",grupo:"",matricula:"",mote:"",nombre:"",telefono:""}
  student: IStudent
  UserForm: FormGroup
  //VAR/////////////////////////////////////////
  constructor(//LOADPAGE
    private _userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

   
    this.get()
    this.UserForm = this.CreateFormGroup()

  }//LOADPAGE/////////////////////////////////////////

  CreateFormGroup()//METODS //ISTUDENT
  {
    return new FormGroup(
      {
        Mote: new FormControl(""),
        Nombre: new FormControl(""),
        Apellido: new FormControl(""),
        Contraseña: new FormControl(""),
        Repetir: new FormControl(""),
        Tipo: new FormControl(""),
        Matricula: new FormControl(""),
        Telefono: new FormControl(""),
        Email: new FormControl(""),
        Carrera: new FormControl(""),
        Cuatrimestre: new FormControl(""),
        Grupo: new FormControl("")
        //Activo, Borrado
      }
    )
  }
  get()//IUser
  {
    this.route.params.subscribe(
      paramsUser => {
        this.seeUser = +paramsUser["id"]
        if (this.seeUser) {
          this._userService.get(this.seeUser).subscribe(
            getUser => {
              this.user = getUser
              this.UserForm.controls["Mote"].setValue(this.user.mote)
              this.UserForm.controls["Mote"].setValue(this.user.nombre)
              this.UserForm.controls["Apellido"].setValue(this.user.apellido)
              this.UserForm.controls["Contraseña"].setValue(this.user.contrasenia)
              this.UserForm.controls["Tipo"].setValue(this.user.tipo)
              this.UserForm.controls["Matricula"].setValue(this.user.matricula)
              this.UserForm.controls["Telefono"].setValue(this.user.telefono)
              this.UserForm.controls["Email"].setValue(this.user.email)
              this.UserForm.controls["Carrera"].setValue(this.user.carrera)
              this.UserForm.controls["Cuatrimestre"].setValue(this.user.cuatrimestre)
              this.UserForm.controls["Grupo"].setValue(this.user.grupo)
              Swal.fire(
                {
                  title: "Andamos al tiro con el usuario",
                  text:`${this.user.mote}`
                }
              )
            },
            error => {
              Swal.fire(
                {
                  title: "Päso una wea, revisalo"
                }
              )
            }
          )
        }
        else {
          Swal.fire(
            {
              title: "Hay un conflicto con traer el usauario"
            }
          )
        }
      }
    )
  }
  onResetForm() {
    this.UserForm.reset()
  }
  onSaveForm() {
    if (this.UserForm.valid) {
      if (this.UserForm.get("Contraseña").value == this.UserForm.get("Repetir").value) {
        this.user.mote = this.UserForm.get("Mote").value
        this.user.nombre = this.UserForm.get("Nombre").value
        this.user.apellido = this.UserForm.get("Apellido").value
        this.user.matricula = this.UserForm.get("Matricula").value
        this.user.telefono = this.UserForm.get("Telefono").value
        this.user.email = this.UserForm.get("Email").value
        this.user.carrera = this.UserForm.get("Carrera").value[0]
        this.user.contrasenia =  this.UserForm.get("Contraseña").value
        this.user.cuatrimestre =  this.UserForm.get("Cuatrimestre").value
        this.user.tipo = ""
        this.user.grupo ="A"

        this.user.borrado = false
        this.user.activo = true
        console.log(this.user);
        
        if (this.user.id != null && this.user.id!=0) {
          this._userService.update(this.user).subscribe(
            data => Swal.fire({title: "Actualizado"}), 
            error => Swal.fire({title: "Valio kabezuki act"})
          )
        }
        else {
          this._userService.post(this.user).subscribe(
            data => Swal.fire({text: "Creado"}),
            error => Swal.fire({title: "Valio kabezuki"})
          )
        }
        this.onResetForm()
      }
      else 
      Swal.fire({title:"Las contraseñas no coinciden"})
    }
    else 
    Swal.fire({title:"Los datos enviados en el formularios son invalidos"})
  }
  get mote() { return this.UserForm.get("Mote") }
  get nombre() { return this.UserForm.get("Nombre") }
  get apellido() { return this.UserForm.get("Apellido") }
  get contraseña() { return this.UserForm.get("Contraseña") }
  get repetir() { return this.UserForm.get("Repetir") }
  get matricula() { return this.UserForm.get("Matricula") }
  get telefono() { return this.UserForm.get("Telefono") }
  get email() { return this.UserForm.get("Email") }
  get carrera() { return this.UserForm.get("Carrera") }
  //METODS//ISTUDENT/////////////////////////////////////////

}

