//COMPONENT
import { Component, OnInit, HostBinding, HostListener } from '@angular/core'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
import { Observable } from 'rxjs';
import { ExcelService } from 'src/app/Service/excel.service';
import { AuthAdmin } from '../auth/authadmin.guard';
import { Authstudent } from '../auth/authstudent.guard';

//COMPONENT/////////////////////////////////////////
//INTERFACE
//COMPONENT/////////////////////////////////////////
//SERVICE
//COMPONENT/////////////////////////////////////////

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {//VAR
  navbarOpen = false;
  role:string;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  //VAR/////////////////////////////////////////
  constructor(private router: Router, private _service: LoginService, private _reporte: ExcelService) { }
  ngOnInit() {
    
//  debugger;
//     if (this.userDetails == null){

//       return(this.router.navigateByUrl('/login'));
//     }
//    this.service.getUserProfile(this.id).subscribe(
//      res=> {
//        this.userDetails = res;
//       },
//       error=> {
//        console.log(error)
//      },
//     );
  }//LOADPAGE/////////////////////////////////////////
  

  loans()
  {
    return this._reporte.getExcelLoans();
      
    
  }

  books()
  {
    return this._reporte.getExcelBooks();
  }

  users()
  {
    return this._reporte.getExcelUsers();
  }
 
}
