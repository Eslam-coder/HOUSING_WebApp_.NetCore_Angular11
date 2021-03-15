import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HousesListService } from 'src/app/Services/HousesList/houses-list.service';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {
  response: {dbPath: ''};
  form:FormGroup;
  House:any;
  propertyType:string[];
  furnishingType:string[];
  constructor(private HousesListServ:HousesListService , 
    private fb:FormBuilder
    , private Toaster:ToastrService
    ,private http:HttpClient,
    private router:Router) { 
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

  
uploadFinished = (event) => {
  this.response = event;
}

onSubmit(){
  this.House={
  Name:this.form.get('Name').value,
  HouseeType: this.form.get('HouseeType').value,
  Furnishing: this.form.get('Furnishing').value,
  Price:this.form.get('Price').value,
  BuiltArea:this.form.get('BuiltArea').value,
  Address :this.form.get('Address').value,
  Description: this.form.get('Description').value,
  Image:this.response.dbPath,

  }
  this.HousesListServ.CreateHouse(this.House).subscribe(
    data=>{
      console.log(data)
    this.Toaster.success('New House added successfully','Congurats')
    this.router.navigateByUrl('AdminPanelDashboard')
  },
  
    error=>{
      console.log(error)
      this.Toaster.error('Failed :(')
    }

  )
  }

}
