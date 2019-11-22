//COMPONENT
import { Component, OnInit } from '@angular/core'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
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

  constructor(config: NgbCarouselConfig) {  
    config.interval = 2500; 
    config.wrap = true; 
    config.keyboard = false; 
    config.pauseOnHover = true; 
  }  
  ngOnInit() {
  }

}
