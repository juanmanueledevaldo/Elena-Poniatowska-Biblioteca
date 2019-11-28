//COMPONENT
import { Component, OnInit, HostBinding, HostListener } from '@angular/core'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
import { Observable } from 'rxjs';

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
  isLoggedIn : Observable<boolean>;


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  //VAR/////////////////////////////////////////
  constructor(private router: Router, private service: LoginService) { }
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
  onLogout() {
    debugger;
    localStorage.removeItem('token');
   this.router.navigate(['/login']);
 }
 
}
