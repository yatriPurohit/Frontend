import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {
  id:any;
  public all:any=[];
  public abc:any;
constructor(public activeRoute: ActivatedRoute,private service:ProductService){}
ngOnInit():void{
  this.id=this.activeRoute.snapshot.queryParams['id'];
  console.log(this.id);
  this.service.getproductbyid(this.id).subscribe((res:any)=>{
    console.log("res-productdetail",res);
    this.all.push(res.product);
 

// const mapped = Object.keys(res).map(key => ({type: key, value: res}));
// const mapped = Object.keys(res).map(key => ({res}));
// this.all=mapped;
// console.log("all",this.all);
// console.log("mapped",mapped.ProductName);
  });
}
}
