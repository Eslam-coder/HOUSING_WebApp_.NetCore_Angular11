import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/Interfaces/User/iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  
  constructor(private http:HttpClient) { }

  RegisterNewUser(user:IUser):Observable<IUser>{
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
      //debugger
     
      return this.http.post<IUser>(`${environment.ApiUrl}/Account/Register`,user,httpOptions);

  }
}
