import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { FormGroup } from '@angular/forms';
import { IUser } from 'src/app/Model/user';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  UserForm: FormGroup;

  user: IUser
  id:any
  constructor(private _userService: UserService, private login: LoginService) { 
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
      
  
       })
    });

		
		
  }

}
