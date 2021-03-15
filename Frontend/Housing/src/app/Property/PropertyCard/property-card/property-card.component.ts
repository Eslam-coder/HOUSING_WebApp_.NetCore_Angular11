import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
 Property:any;
 PCImage1:string;
  constructor() { 
    this.Property = {
      id:1,
      Name:"House",
      Type:"House",
      Price:2000
    }
    this.PCImage1 = "assets/PropertyCardPhotos/PC1.jpg"
  }

  ngOnInit(): void {
  }

}
