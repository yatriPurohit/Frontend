import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http:HttpClient) { }
  registration(data:any){
    return this.http.post("http://localhost:4000/api/user/adddata",data);
  }

  login(data:any){
    return this.http.post("http://localhost:4000/api/user/login",data);
  }
}



