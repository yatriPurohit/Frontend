import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private service: RegistrationService,private router: Router){}
  profileForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
});

login(){
  console.log("profileForm",this.profileForm.value)
  this.service.login(this.profileForm.value).subscribe((data:any)=>{
    console.log("data msg",data);
    // let all={};
    // all=data.existingUser;
    // console.log("all",all);
    
    if(!data.success){
      console.log("invalid user pw");
    }
    else{
      // let navigationExtras: NavigationExtras = {
      //   queryParams: {
      //     user: data.existingUser.firstName
      //   }
      // };
      this.router.navigate(['/homepag']);
    }

  },
  error =>console.log("isdvd"));
}

}
