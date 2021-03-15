import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
HomeImage1:string;
HomeImage2:string;
  constructor() { 
    this.HomeImage1 = "assets/Home/Home1.jpg";
    this.HomeImage2 = "assets/Home/ExploreAllHouses.jpg";
  }

  ngOnInit(): void {
  }

}
