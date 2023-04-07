import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{
  registration: any;
  constructor(private service: RegistrationService,private router: Router){}
  // registrationform:any
  profileForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phonenumber:new FormControl('')
});
//on submit data post to "DB"
submit(){
  console.log("profileForm",this.profileForm.value)
  
    this.service.registration(this.profileForm.value).subscribe((data:any)=>{
      console.log("data",data)
      let resUsername =data.email;
      console.log("res",data);
      console.log("resUsername", resUsername);
      let navigationExtras: NavigationExtras = {
        queryParams: {
          user: resUsername
        }
      };
      this.router.navigate(['/login'], navigationExtras);
    });

 }
}



