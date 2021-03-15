import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PropertListService {

  constructor(private httpClient: HttpClient) { }
  getPropertyList(){
   return this.httpClient.get('Data/PropertyList.json')
    
  }
 
}
