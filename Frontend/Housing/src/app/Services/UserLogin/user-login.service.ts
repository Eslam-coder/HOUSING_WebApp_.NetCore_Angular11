import { IauthToken } from './../../Interfaces/AuthToken/iauth-token';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/Interfaces/User/iuser';
import { Observable } from 'rxjs';

import { HttpHeaders,HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators"; 
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http:HttpClient) { }

LoginUser(user:IUser):Observable<IUser>{
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};

      return this.http.post<IUser>(`${environment.ApiUrl}/Account/Login`,user,httpOptions);
  }

  LogoutUser(){
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};

      return this.http.post(`${environment.ApiUrl}/Account/Logout`,httpOptions);
  }
  

 

}