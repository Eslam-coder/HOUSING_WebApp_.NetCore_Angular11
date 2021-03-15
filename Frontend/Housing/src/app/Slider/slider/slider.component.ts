import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  Slider1:string;
  Slider2:string;
  Slider3:string;
  Slider4:string;
  Slider5:string;
  Slider6:string;
  constructor() { 
    this.Slider1 = "assets/SliderHome/Slide1.jpg";
    this.Slider2 = "assets/SliderHome/Slide2.jpg";
    this.Slider3 = "assets/SliderHome/Slide3.jpg";
    this.Slider4 = "assets/SliderHome/Slide4.jpg";
    this.Slider5 = "assets/SliderHome/Slide5.jpg";
    this.Slider6 = "assets/SliderHome/Slide6.jpg";
  }

  ngOnInit(): void {
  }

}
