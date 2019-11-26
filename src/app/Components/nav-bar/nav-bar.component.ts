//COMPONENT
import { Component, OnInit, HostBinding, HostListener } from '@angular/core'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
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
  userDetails;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  //VAR/////////////////////////////////////////
  constructor(private router: Router, private service: LoginService) { }
  ngOnInit() {
    // debugger;
    // this.service.getUserProfile().subscribe(
    //   res=> {
    //     this.userDetails = res;
    //   },
    //   error=> {
    //     console.log(error)
    //   },
    // );
  }//LOADPAGE/////////////////////////////////////////
  
 
}
