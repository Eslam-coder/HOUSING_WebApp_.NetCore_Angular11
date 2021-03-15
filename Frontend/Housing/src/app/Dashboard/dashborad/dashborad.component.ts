import { Component, OnInit } from '@angular/core';
import { HousesListService } from 'src/app/Services/HousesList/houses-list.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
HouseList:any;
  constructor(private HousesListServ:HousesListService , 
              private toastr:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
  this.HousesListServ.GetAllHouses().subscribe(
  (data)=>{
    this.HouseList = data
    console.log(this.HouseList)
  },
  (error)=>console.log(error)
)

  }
  createImgPath = (serverPath: string) => {
    return `https://localhost:44366/${serverPath}`;
  }

  Delete(houseId){
    this.HousesListServ.DeleteHouse(houseId).subscribe(
      (data)=>{
        console.log('Delete Success')
        console.log(data)
        this.toastr.success('Item deleted successfully','Done')
        this.router.navigateByUrl('AdminPanelDashboard')
      },
      (error)=>console.log(error)
    )
  }

}
