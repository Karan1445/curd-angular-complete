import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  apiUrl:any="https://65ded69bff5e305f32a09845.mockapi.io/karans";
  constructor(private _httpClient:HttpClient) {
    
   }
   GetAll(){
    return this._httpClient.get(this.apiUrl);
   }
   Deletes(id:any){
    return this._httpClient.delete(this.apiUrl+"/"+id);
   }
   Save(form:any){
    return this._httpClient.post(this.apiUrl,form);
   }
   GetById(id:any){
    return this._httpClient.get(this.apiUrl+"/"+id);
   }
   UpdateById(form:any,id:any){
    return this._httpClient.put(this.apiUrl+"/"+id,form);
   }
   posts(form:any){
    return this._httpClient.post(this.apiUrl,form);
   }
}

