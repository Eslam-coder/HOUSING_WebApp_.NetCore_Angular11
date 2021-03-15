import { IHouse } from './../../Interfaces/House/ihouse';
import { environment } from 'src/environments/environment';
import { IProperty } from './../../Interfaces/Property/iproperty';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPpropertyList } from 'src/app/Interfaces/PropertyList/ipproperty-list';

@Injectable({
  providedIn: 'root'
})
export class HousesListService {
  //houseId:number;
 
  constructor(private http:HttpClient) { }

 

  GetAllHouses():Observable<IProperty[]>{
    return this.http.get<IProperty[]>('https://localhost:44366/api/House/GetHouses')
    //return this.http.get<IProperty[]>(`${environment.ApiUrl}/House/GetHouses`)

  }

  GetHouseById(houseId:number):Observable<IProperty>{
    return this.http.get<IProperty>('https://localhost:44366/api/House/GetHouseByID?ID='+`${houseId}`)
   // return this.http.get<IProperty>(`${{environment.ApiUrl}}/House/GetHouseByID?ID=`+4)
    
  }

  DeleteHouse(houseId:number):Observable<IProperty>{
    return this.http.delete<IProperty>(`${environment.ApiUrl}/House/Delete?ID=`+`${houseId}`)
  }

  UpdateHouse(houseId:number,houseUpdated:any){
    return this.http.put(`${environment.ApiUrl}/House/Update?ID=`+`${houseId}`,houseUpdated)
  }
 
  CreateHouse(newHouse:any){
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
 //debugger
 return this.http.post('https://localhost:44366/api/House/PostCreateNewHouse',newHouse,httpOptions)
    //return this.http.post(`${environment.ApiUrl}/House/CreateNewHouse`,newHouse,httpOptions)
  }

  

  
}
