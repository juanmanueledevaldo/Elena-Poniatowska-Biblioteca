//COMPONENT
import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/Service/user.service'
import Swal from "sweetalert2"

//COMPONENT//////////////////////////////////////////////////////
//INTERFACE
import { IUser } from 'src/app/Model/user'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
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
  users: IUser[]
  user: IUser
  seeUser: any
  filterUsers = ""
  //VAR//////////////////////////////////////////////////////
  constructor(//LOADPAGE
    private _userService: UserService, private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.gets()
  }//lOADPAGE//////////////////////////////////////////////////////
  gets()//METDS///IUSER[]
  {
    this._userService.getAll().subscribe(
      userList => { this.users = userList },
      error => console.log(error)
    )
  }//IUSER[]//////////////////////////////////////////////////////
    deleteUser(user: number){
      debugger;
      let userSeleted  = this.users.find(x => x.id == user);
    
      this._userService.delete(user).subscribe((data) => {
        this.get();
        userSeleted.activo  = !userSeleted.activo;
    
        if(userSeleted.activo)
     Swal.fire({title:"El usuario esta activo"})
        else 
        Swal.fire({title:"Se ha desactivado el usuario correctamente"})
      });
     this.users.find(x => x.id == user).activo = userSeleted.activo;
    
   }
 
  

  get() //IBOOK
  {
    
    this.route.params.subscribe(
      paramsBook => {
        debugger;
        this.seeUser = paramsBook["id"]
        if (this.seeUser) {
          this._userService.get(this.seeUser).subscribe(
            book => {
              this.user = book
              Swal.fire(
                {
                  title: `${this.user.nombre}`,
                }
              )
            },
            error => console.log(error)
          )
        }
        else
          console.log("No hay parametros")
      },
      error => { Swal.fire({ title: "Que haces por aqui" }) }
    )

  }//IUSER/////////////////////////////////////////////////////
  //METDS//////////////////////////////////////////////////////

}
