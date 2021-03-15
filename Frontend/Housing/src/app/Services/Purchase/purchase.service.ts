import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http : HttpClient) { }

  PostPurchase(HouseUser:any){
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
    //debugger
    return this.http.post(`https://localhost:44366/api/HouseUser/PostPurchase`,HouseUser,httpOptions)
    //return this.http.post(`${environment.ApiUrl}/HouseUser/PostPurchase`,HouseUser,httpOptions)
  } 
}
