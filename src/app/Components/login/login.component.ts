//COMPONENT
import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import {ILogin} from '../../Model/login';
import { LoginService } from 'src/app/Service/login.service';
//COMPONENT/////////////////////////////////////////
//INTERFACE
//INTERFACE/////////////////////////////////////////
//SERVICE
//SERVICE/////////////////////////////////////////
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 login: ILogin ={Mote:"",Contraseña:""}
 loginForm: FormGroup;
 isSubmitted  =  false;


  constructor(private _LoginService: LoginService, private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder) { }
  CreateFormGroup()//METODS //ISTUDENT
  {
    return new FormGroup(
      {
        Mote : new FormControl(),
      Contrasenia : new FormControl()
      }
    )
  }
  
  ngOnInit() {
   
    this.loginForm = this.CreateFormGroup();
  //   this.loginform  =  this.formBuilder.group({
  //     Mote: ['', Validators.required],
  //     Contraseña: ['', Validators.required]
  // });
    // if (localStorage.getItem('token') != null)
    // this.router.navigateByUrl('/home');
  }
  onSubmit(loginForm: FormGroup) {
   
   
    console.log(this.loginForm.value);
    this.isSubmitted =true;
    if(this.loginForm.invalid){
      return;
    }
    debugger;
    this._LoginService.login(this.loginForm.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('El nombre de usuario o contraseña es incorrecta.', 'Autenticacion Fallida.');
        else
          console.log(err);
      }
    );
  }
  get formControls() { return this.loginForm.controls; }
}
