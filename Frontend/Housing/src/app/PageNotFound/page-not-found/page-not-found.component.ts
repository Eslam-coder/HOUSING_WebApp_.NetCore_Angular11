import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  PageErrorImage :string;
  constructor() { 
    this.PageErrorImage = "assets/PageNotFound/errorPage.jpg"
  }

  ngOnInit(): void {
  }

}
