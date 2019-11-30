import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pdfstudents',
  templateUrl: './pdfstudents.component.html',
  styleUrls: ['./pdfstudents.component.scss']
})
export class PdfstudentsComponent implements OnInit {

  public usersList=[];
  constructor(private _userService:UserService) { }
  ngOnInit() {
    this._userService.getAll().subscribe(
      data =>{
        this.usersList = data;
      },
      error =>{
       
        console.log(error.error, 'Error')
      }        
    )
}

  
  
  CreateFormGroup(){
    return new FormGroup({
    mote: new FormControl ('',[Validators.required, Validators.maxLength(5)]),
    nombre: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    apellido: new FormControl('',[Validators.required, Validators.maxLength(5)]),
    contrasenia: new FormControl('',[Validators.required, Validators.maxLength(5)]),
    });
  }
  UserForm: FormGroup;

get mote(){
  return this.UserForm.get('mote');
}

get nombre(){
  return this.UserForm.get('nombre');
}
get apellido(){
  return this.UserForm.get('apellido');
}
get contrasenia(){
  return this.UserForm.get('contrasenia');
}
//get matricula(){
  //return this.UserForm.get('matricula');
//}
//get grupo(){
  //return this.UserForm.get('grupo');
//}

  //name = 'Hola Perritas hay va  ';



  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('tableToPdf.pdf');
  }

}
