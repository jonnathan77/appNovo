import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
// import  { players } from '../../../src/app/players'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public categories: any;
  public featuredProducts = [];
  public bestSellProducts = [];

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.categories = this.httpService.getCategories();
  }

}
