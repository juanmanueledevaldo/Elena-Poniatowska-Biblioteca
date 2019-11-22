import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/Service/user.service";
import { IUser } from "src/app/Model/user";
import { ActivatedRoute } from "@angular/router";
import {IStudent} from "src/app/Model/student";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input('data') UserFormFather: FormGroup;
  @Output() OnSaveUser = new EventEmitter<IUser>();
  user: IUser;
  student: IStudent;
  UserForm: FormGroup;
  constructor(
    private _userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.UserForm;
  }
  CreateFormGroup() {
    return new FormGroup(
      {
        Mote: new FormControl(""),
        Nombre: new FormControl(""),
        Apellido: new FormControl(""),
        Contraseña: new FormControl(""),
        Tipo: new FormControl(""),
        Matricula: new FormControl(""),
        Telefono: new FormControl(""),
        Emai: new FormControl(""),
        Carrera: new FormControl(""),
        Cuatrimestre: new FormControl(""),
        Grupo: new FormControl("")
        //Activo, Borrado
      }
    );
  }
  onResetForm() {
    this.UserForm.reset();
  }
  onSaveForm() {

    debugger;
    this.student.Mote = this.UserForm.get("Mote").value;
    this.student.Nombre = this.UserForm.get("Nombre").value;
    this.student.Apellido = this.UserForm.get("Apellido").value;
    this.student.Tipo = this.UserForm.get("Tipo").value;
    this.student.Matricula = this.UserForm.get("Matricula").value;
    this.student.Telefono = this.UserForm.get("Telefono").value;
    this.student.Email = this.UserForm.get("Matricula").value;
    this.student.Carrera = this.UserForm.get("Carrera").value;
    this.student.Grupo = this.UserForm.get("Grupo").value;

    this.student.Borrado = false;
    this.student.Activo = true;
    if (this.student.Id != null) {
      this._userService.update(this.student).subscribe(
        data => {
          console.log(data);

        }, error => {
          console.log(error);
        }
      );
    }
    else {
      this._userService.post(this.user).subscribe(
        data => {
          console.log(data);

        }, error => {
          console.log(error);
        }
      );
    }
    this.onResetForm();
  }
  
}

