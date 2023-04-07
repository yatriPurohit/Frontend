import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable, map} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
  getproduct(){
    return this.http.get("http://localhost:4000/api/product/getdata");
   
  }
  getproductbyid(id:any){
    return this.http.get("http://localhost:4000/api/product/"+id,{});
  }
}
