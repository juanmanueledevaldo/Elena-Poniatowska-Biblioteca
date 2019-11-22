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
  isFixedNavbar
  @HostBinding('class.navbar-opened') navbarOpened = false
  //VAR/////////////////////////////////////////
  constructor(//LOADPAGE
  ) { }
  ngOnInit() {
  }//LOADPAGE/////////////////////////////////////////
  
  @HostListener('window:scroll', [])
  onWindowScroll() //METODS
  {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    if(offset > 10) {
      this.isFixedNavbar = true
    } else {
      this.isFixedNavbar = false
    }
  }
  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened
  }
  //METODS/////////////////////////////////////////
}
