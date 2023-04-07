import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Data, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-homepag',
  templateUrl: './homepag.component.html',
  styleUrls: ['./homepag.component.scss']
})
export class HomepagComponent {
  ProductService: any;
  constructor(private service: ProductService, private router: Router) { }
  sideBarOpen = true;
  all: any = [];
  filteredProductsList: any = [];
  name = 'Angular';

  ngOnInit(): void {
    this.service.getproduct().subscribe((res: any) => {
      this.all = res.newProduct;
      console.log("res-homepage",res);
      console.log("all",this.all);

      // console.log("allw",this.all);
    });
  }
  // fetchPeople() {
  //   this.peopleService.fetchPeople().pipe(
  //     .map(res => res.FarmerDetails)
  //   ).subscribe(people => {
  //     this.people = people;
  //   });
  // }
  applyFilter() {
    this.service.getproduct().subscribe((res: any) => {
      this.all = res.newProduct;
      // console.log("all",this.all);

      this.all = this.all.filter((x: any) => { return x.category == "WOMEN" });
      console.log("allw", this.all)
    });
  }
  applyFilterMen() {
    this.service.getproduct().subscribe((res: any) => {
      this.all = res.newProduct;
      // console.log("all",this.all);
      this.all = this.all.filter((x: any) => { return x.category == "Men" });
      console.log("allm", this.all);
    });
  }
  viewproduct(id: any) {
    // console.log("product",product);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
      }
    };
    this.router.navigate(['/productdetail'], navigationExtras);
  }

}




