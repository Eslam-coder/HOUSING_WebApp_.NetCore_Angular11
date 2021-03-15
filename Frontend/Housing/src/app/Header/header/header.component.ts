import { AuthService } from './../../Services/AuthService/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserLoginService } from 'src/app/Services/UserLogin/user-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  UserName:string;
  appearAdmin:Boolean=true;
  constructor(private AuthService : AuthService,
    private toastr: ToastrService,
    private UserLoginServ:UserLoginService,
    private router:Router ) { }
   

  ngOnInit(): void {
  }

  isLogged(){
    this.UserName = localStorage.getItem('token')
    //Show & Hide Dashboard in dropdownlist
    if(localStorage.getItem('token')=='Admin'||localStorage.getItem('token')=='admin@admin.com')
    {
        this.appearAdmin = false;
    }
    else{
      this.appearAdmin = true;
    }
   // console.log(this.UserEamil);
    return this.AuthService.isLoggedIn;
    
  }

logOut(){
    localStorage.removeItem('token')
    this.toastr.success('GoodBye')
  }

  logout(){
    //debugger
    this.UserLoginServ.LogoutUser().subscribe(
      data=>{
        console.log(data)
        localStorage.removeItem('token')
        this.toastr.success('GoodBye')
        this.router.navigateByUrl('Home')
      },
      error=>console.log(error)
    )
   
  }
}
