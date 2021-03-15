import { ToasterNotificationService } from './../../../Services/ToasterNotifications/toaster-notification.service';
import { Router } from '@angular/router';
import { UserRegisterService } from './../../../Services/UserRegister/user-register.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/Interfaces/User/iuser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:IUser;
  RegisterImage:string;
  constructor(private UserRegister:UserRegisterService,
              private route :Router,
              private ToasterNotificationService:ToasterNotificationService,
              private toastr: ToastrService
              ) { 

    this.user={
      FirstName:"",
      LastName:"",
      Email:"",
      Password:""
      
    }

    
    this.RegisterImage = "assets/Register/Register.jpg";
  }

  ngOnInit(): void {
  }
  
  onSubmit(f:NgForm):void{
      //debugger
      this.UserRegister.RegisterNewUser(this.user).subscribe(
        (data)=>{
          console.log("Register Success")
           //Put userName in LocalStorage
        localStorage.setItem('token',this.user.FirstName)
          //appear notification to success register
          this.toastr.success("Register Successfully","Congratulation")
          //Return user to HomeComponent
          this.route.navigateByUrl('Home')
        },
        
        (error)=>{
          console.log("Register Failed")
          //appear notification to failed register 
          this.toastr.error("Complete Your Data","Unfortunality")
          //Return User to RegisterComponent
          //this.route.navigateByUrl('Register')
        }
        
      )
    }

}
