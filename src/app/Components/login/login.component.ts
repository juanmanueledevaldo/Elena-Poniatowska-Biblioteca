//COMPONENT
import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
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

  constructor() { }

  ngOnInit() {
  }

}
