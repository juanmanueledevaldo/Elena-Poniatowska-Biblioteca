import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { FormGroup } from '@angular/forms';
import { IUser } from 'src/app/Model/user';
import { LoginService } from 'src/app/Service/login.service';
import { LoanService } from 'src/app/Service/loan.service'
import { ILoan } from 'src/app/Model/loan';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  UserForm: FormGroup;

  user: IUser
  id:any
  loan: ILoan;
  public loans: ILoan[] = []
  constructor(private _userService: UserService, private login: LoginService, private _loanService: LoanService) { 
		this.GetUser();

	}

  ngOnInit() {
    
  }
	GetUser(){
    this.login.getProfile().subscribe(data=>{
    this.id = data;
    this._userService.get(this.id).subscribe(
      x => {
        this.user = x
        this.details(this.id);
  
       })
    });

    
		
		
  }
  details(id:number){
    //traer el inner de 
  }

  get(id: any)//ILOAN
  {
    this._loanService.getFolio(id).subscribe(
      getLoan => {this.loan = getLoan}
    )
  }

}
