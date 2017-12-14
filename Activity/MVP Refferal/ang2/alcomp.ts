import { Component, OnInit } from '@angular/core';
import {AppService } from '../appcomponent.service';
import { Routes,Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers:[AppService]
})
export class LoginComponentComponent implements OnInit {
     credentials = { email : '', password :''};
     userdetails : any;
     user_details : any;
     
  constructor(private _appservice : AppService,private route:Router) { }
  public router;
  
  ngOnInit() {
    //this.userdetails=AppService.userDetails;
    //console.log(this.userdetails,"awesome");
  }    
  //loginSubmit(loginData){
        // console.log(loginData)
      // this._appservice.loginSubmit(loginData).subscribe(
            //  data => {
                  
              //  console.log("success");
              //  this.route.navigate(['/aboutus']);
             // },
            //  err => {
             //   console.log("failed");
           //   }

     //  );
  //}
  loginSubmit(loginData){
    console.log(loginData)
  this._appservice.loginSubmit(loginData).subscribe(
         data => {
             
           console.log("success");
           this.userdetails=AppService.userDetails;
           console.log(this.userdetails,"awesome");
           window.sessionStorage.setItem('user_details',this.userdetails);
           this.user_details = JSON.parse(window.sessionStorage.getItem('userdetails'));
           
           this.route.navigate(['/aboutus']);
         },
         err => {
           console.log("failed");
         }

  );
}
}
