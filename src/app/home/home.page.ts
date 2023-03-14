import { Component, OnInit } from '@angular/core';
// import  { players } from '../../../src/app/players'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [
    //other providers ...
    players,
  ],
})
export class HomePage implements OnInit {

  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  constructor() { }

  ngOnInit() {
  }

}
