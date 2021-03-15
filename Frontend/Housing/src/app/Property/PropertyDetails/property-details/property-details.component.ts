import { Component, OnInit , TemplateRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { HousesListService } from 'src/app/Services/HousesList/houses-list.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { PurchaseService } from 'src/app/Services/Purchase/purchase.service';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  houseId:number;
  PropertyImage:string;
  HouseById:any;
  modalRef: BsModalRef;
  RightImage:string;
  HouseUser:any;
  //Ngx Gallery 
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route:ActivatedRoute , private router:Router,
              private HousesListServ:HousesListService,
              private modalService: BsModalService,
              private toastr: ToastrService,
              private PurchaseServ:PurchaseService
             ){
    this.PropertyImage="assets/PropertyCardPhotos/PC1.jpg"
    this.RightImage = "assets/Modal/Right.jpg"
   }

  

  ngOnInit(): void {
   this.houseId = Number(this.route.snapshot.params['id'])
   console.log(this.houseId);
 //Get House By Id 
   this.HousesListServ.GetHouseById(this.houseId).subscribe(
     data=>{
       this.HouseById=data,
       console.log(this.HouseById)
     },
     error=>console.log(error)
   )

   //Ngx Gallery 
   this.galleryOptions = [
    {
      width: '100%',
      height: '400px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
    }
  ]
  this.galleryImages = [
    {
      small: 'assets/PropertyDetails/Room2.jpg',
      medium: 'assets/PropertyDetails/Room2.jpg',
      big: 'assets/PropertyDetails/Room2.jpg'
    },
    {
      small: 'assets/PropertyDetails/Room3.jpg',
      medium: 'assets/PropertyDetails/Room3.jpg',
      big: 'assets/PropertyDetails/Room3.jpg'
    },
    {
      small: 'assets/PropertyDetails/Room4.jpg',
      medium: 'assets/PropertyDetails/Room4.jpg',
      big: 'assets/PropertyDetails/Room4.jpg'
    }
    ,
    {
      small: 'assets/PropertyCardPhotos/PC1.jpg',
      medium: 'assets/PropertyCardPhotos/PC1.jpg',
      big: 'assets/PropertyCardPhotos/PC1.jpg'
    }
  ]

  }

  onBack(){
    this.router.navigateByUrl('/PropertyList');
  }

  SelectNextPage(){
    this.houseId +=1;
     this.router.navigate(['Property-Details',this.houseId]);
  }

  Purchase(template: TemplateRef<any>,template2: TemplateRef<any>,HouseId){
   //debugger
    //console.log(HouseId)
    if(localStorage.getItem('token')){
       true;
       //this.toastr.success("Thank You. We will Contact with you.")
       this.modalRef = this.modalService.show(template2);
       
       this.HouseUser={
        ApplicationUserId:"356e389f-6ed0-419c-a8ae-2aa8ac7bea4d",
        HouseId: HouseId
      }
      this.PurchaseServ.PostPurchase(this.HouseUser).subscribe(
        (data)=>console.log(data),
        (error)=>console.log(error)
      )
    }
    else{
        this.modalRef = this.modalService.show(template);
     
      }
  }

  CloseModal(){
    this.modalRef.hide();
  }

  createImgPath = (serverPath: string) => {
    return `https://localhost:44366/${serverPath}`;
  }
}
