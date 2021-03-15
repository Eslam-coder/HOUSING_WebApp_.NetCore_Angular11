import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HousesListService } from 'src/app/Services/HousesList/houses-list.service';

@Component({
  selector: 'app-property-by-id',
  templateUrl: './property-by-id.component.html',
  styleUrls: ['./property-by-id.component.css']
})
export class PropertyByIdComponent implements OnInit {
houseId:number;
House:any;
response: {dbPath: ''};
  constructor(private route:ActivatedRoute,
    private HousesListServ:HousesListService,
    private toastr: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.houseId=this.route.snapshot.params['id'];
    this.HousesListServ.GetHouseById(this.houseId).subscribe(
      (data)=>{
        this.House=data,
        console.log(this.House)
      },
      (error)=>console.log(error)
    )
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44366/${serverPath}`;
  }
  public uploadFinished = (event) => {
    this.response = event;
  }

  submit(f:NgForm){
    this.House={
      name:this.House.name,
      HouseeType:this.House.houseeType,
      furnishing:this.House.furnishing,
      price:this.House.price,
      address:this.House.address,
      builtArea:this.House.builtArea,
      description:this.House.description,
      image: this.response.dbPath
    }
    console.log(this.House)
    this.HousesListServ.UpdateHouse(this.houseId,this.House).subscribe(
      (data)=>{
        console.log(data)
        this.toastr.success('House edited successfully','congrats')
        this.router.navigateByUrl('AdminPanelDashboard')
      },
      (error)=>{
        console.log(error),
        this.toastr.error('Edit house failed','Oops!')
      }
    )
  }
}
