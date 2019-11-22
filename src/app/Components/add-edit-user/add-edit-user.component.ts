//COMPONENT
import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/Service/user.service'
import Swal from "sweetalert2"
//COMPONENT//////////////////////////////////////////////////////
//INTERFACE
import { IUser } from 'src/app/Model/user'
//INTERFACE//////////////////////////////////////////////////////

//SERVICE

//SERVICE////////////////////////////////////////////////////////

//OTHER
//OTHER//////////////////////////////////////////////////////
@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {//VAR
users:IUser[]
user:IUser
//VAR//////////////////////////////////////////////////////
  constructor(//LOADPAGE
    private _userService:UserService,
  ) { }
  ngOnInit() {
    this.gets()
  }//lOADPAGE//////////////////////////////////////////////////////
  gets()//METDS///IUSER[]
  {
    this._userService.getAll().subscribe(
      userList => {
        this.users = userList
        Swal.fire(
          {
            title:"Lista cargada correctamente"
          }
        )
      }
    )
  }//IUSER[]//////////////////////////////////////////////////////
  get(id:number){//IUSER
    this._userService.get(id).subscribe(
      user=>{
        this.user = user
        Swal.fire(
          {
            title:`Se ha seleccionado ${this.user.Mote}`
          }
        )
      }
    )
  }//IUSER/////////////////////////////////////////////////////
  //METDS//////////////////////////////////////////////////////
}
