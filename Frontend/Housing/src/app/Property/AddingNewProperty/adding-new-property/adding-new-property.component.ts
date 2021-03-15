import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IHousee } from './../../../Interfaces/Housee/ihousee';
import { IProperty } from './../../../Interfaces/Property/iproperty';
import { IPpropertyList } from 'src/app/Interfaces/PropertyList/ipproperty-list';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs/tabset.component';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HousesListService } from 'src/app/Services/HousesList/houses-list.service';
import { IHouse } from 'src/app/Interfaces/House/ihouse';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adding-new-property',
  templateUrl: './adding-new-property.component.html',
  styleUrls: ['./adding-new-property.component.css']
})
export class AddingNewPropertyComponent implements OnInit {
  @ViewChild('formTabs') formTabs: TabsetComponent;
  propertyType:string[];
  furnishingType:string[];
  response: {dbPath: ''};
  SERVER_URL = "https://localhost:44366/api/House/CreateNewHouse";
  House:any;
    
  form:FormGroup
   constructor(private HousesListServ:HousesListService , 
    private fb:FormBuilder
    , private Toaster:ToastrService
    ,private http:HttpClient) {
    this.propertyType = ['House','Apartment','Duplex'];
    this.furnishingType = ['Fully','Semi','Unfurnished'];
    
   }

  ngOnInit(): void {
    //Reactive Form 
    this.form = this.fb.group({
      Name: [''],
      HouseeType: [''],
      Furnishing: [''],
      Price: [''],
      Security: [''],
      BuiltArea: [''],
      Address: [''],
      PossesionDate: [''],
      HouseeAge: [''],
      Description: [''],
      Image: [''],
     File:['']
    })

   
  }
    
  //Ngx Tabset Angular ngx bootstrap 
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

uploadFinished = (event) => {
  this.response = event;
}
onSubmit(){
  this.House={
  Name:this.form.get('Name').value,
  HouseeType: this.form.get('HouseeType').value,
  Furnishing:this.form.get('Furnishing').value,
  Price:this.form.get('Price').value,
  Security: this.form.get('Security').value,
  BuiltArea:this.form.get('BuiltArea').value,
  // Address :this.form.get('Address').value,
  PossesionDate: this.form.get('PossesionDate').value,
  HouseeAge:this.form.get('HouseeAge').value,
  Description:this.form.get('Description').value,
  Image:this.response.dbPath,
  }
  this.HousesListServ.CreateHouse(this.House).subscribe(
    data=>{
      console.log(data)
    this.Toaster.success('Done :)')
  },
  
    error=>{
      console.log(error)
      this.Toaster.error('Failed :( ')
    }

  )
  }

  

}
