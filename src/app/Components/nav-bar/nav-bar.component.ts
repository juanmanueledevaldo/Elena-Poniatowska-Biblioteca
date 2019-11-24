//COMPONENT
import { Component, OnInit, HostBinding, HostListener } from '@angular/core'
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

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  //VAR/////////////////////////////////////////
  constructor(//LOADPAGE
  ) { }
  ngOnInit() {
  }//LOADPAGE/////////////////////////////////////////
  
 
}
