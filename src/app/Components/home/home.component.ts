//COMPONENT
import { Component, OnInit } from '@angular/core'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
//COMPONENT//////////////////////////////////////////
//INTERFACE

//INTERFACE//////////////////////////////////////////
//SERVICE

//SERVICE//////////////////////////////////////////
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetails;
  constructor(config: NgbCarouselConfig,) {  
    config.interval = 2500; 
    config.wrap = true; 
    config.keyboard = false; 
    config.pauseOnHover = true; 
  }  
  ngOnInit() {
    // this._loginService.getUserProfile().subscribe(
    //   res => {
    //     this.userDetails = res;
    //   },
    //   err => {
    //     console.log(err);
    //   },
    // );
  }
  
  // onLogout() {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }

}
