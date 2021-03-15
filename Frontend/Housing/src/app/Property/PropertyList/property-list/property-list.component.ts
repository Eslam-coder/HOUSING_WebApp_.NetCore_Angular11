import { PropertListService } from './../../../Services/PropertyList/propert-list.service';
import { Component, OnInit } from '@angular/core';
import { IPpropertyList } from 'src/app/Interfaces/PropertyList/ipproperty-list';
import { HousesListService } from 'src/app/Services/HousesList/houses-list.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  PropertyList:any;
  PCImage1:string;
  HousesList:any[]
  constructor(private PropertListService:PropertListService,private HousesListServ :HousesListService) {
  
  this.PCImage1 = "assets/PropertyCardPhotos/PC1.jpg"
   }

  ngOnInit(): void {
    this.PropertListService.getPropertyList().subscribe(
      data =>  {this.PropertyList = data
      console.log(data)
      },
      error => console.log(error)
    ); 

    this.HousesListServ.GetAllHouses().subscribe(
      data=>{
        this.HousesList=data
        console.log(this.HousesList)
      },
      error=>console.log(error)
    )
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44366/${serverPath}`;
  }

}

