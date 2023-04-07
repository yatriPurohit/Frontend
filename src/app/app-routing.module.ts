import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagComponent } from './homepag/homepag.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {path:"",redirectTo:'registration',pathMatch:'full'},
  //{path:"",redirectTo:'Registration',pathMatch:'full'},
  {path:"registration",component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'homepag',component:HomepagComponent},
  {path:'productdetail',component:ProductdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//   {path:"",redirectTo:'login',pathMatch:'full'},
//   {path:'login',component:LoginComponent},
//   {path:'dashboard',component:DashboardComponent},
//   {path:'product',component:ProductComponent},
//   {path:'dialog',component:DialogComponent}
// ];