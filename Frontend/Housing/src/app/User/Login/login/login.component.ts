import { ToasterNotificationService } from './../../../Services/ToasterNotifications/toaster-notification.service';
import { UserLoginService } from './../../../Services/UserLogin/user-login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/User/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:IUser;
  constructor(private route:Router,
             private UserLoginService:UserLoginService,
             private ToasterNotificationService:ToasterNotificationService
             ) {

    this.user={
      FirstName:"",
      LastName:"",
      Email:"",
      Password:""
      
    }
    
   }

  ngOnInit(): void {
  }
  
  onSubmit(f:NgForm):void{
    this.UserLoginService.LoginUser(this.user).subscribe(
      (data)=>{
        console.log("Login success")
        //Put userName in LocalStorage
        localStorage.setItem('token',this.user.Email)
        //Appear Toaster Success
         this.ToasterNotificationService.showSuccess("Login Successfully","Congurats")
        
         //add router navigate 
         this.route.navigateByUrl('Home');
      },

      (error)=> {
        console.log("Login fail")

         //Appear Toaster Success
        this.ToasterNotificationService.showError("There is no account registered with that email. Please enter a registered email or continue to Create an account","Welcome")
        //Return To RegisterComponent to Register 
        this.route.navigateByUrl('Register');
     
    }
    )
  }

}
