<<<<<<< develop
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
=======
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/Service/user.service";
import { IUser } from "src/app/Model/user";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input('data') UserFormFather: FormGroup;
  @Output() OnSaveUser = new EventEmitter<IUser>();
  user: IUser;
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
        Tipo: new FormControl("")
        //Activo, Borrado
      }
    );
  }
  onResetForm() {
    this.UserForm.reset();
  }
  onSaveForm() {
    this.user.Mote = this.UserForm.get("Mote").value;
    this.user.Nombre = this.UserForm.get("Nombre").value;
    this.user.Apellido = this.UserForm.get("Apellido").value;
    this.user.Contraseña = this.UserForm.get("Contraseña").value;
    this.user.Tipo = this.UserForm.get("Tipo").value;
    this.user.Borrado = false;
    this.user.Activo = false;
    if (this.user.Id != null) {
      this._userService.update(this.user).subscribe(
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
>>>>>>> usuario otra vez
