import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { UserService } from '../user.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-san-tech',
  templateUrl: './san-tech.component.html',
  styleUrls: ['./san-tech.component.css'],
  providers: [UserService]
})
export class SanTechComponent implements OnInit {
  preSignin: boolean;
  postSignin: boolean;
  userName: string;
  loginCredentials = { email: '', password: '' };
  signupCredentials = { name: '', email: '', password: '', phone: '' };
  user_Name: any;
  user_Mail: any;
  user_Id: any;
  user_Phone: any;


  constructor(private translate: TranslateService, private _userService: UserService, private route: Router) {
    translate.addLangs(["en", "tamil"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|tamil/) ? browserLang : 'en');
  }

  login(loginCredentials) {
    console.log(loginCredentials.email);
    this._userService.login(loginCredentials).subscribe(
      response => {
        if (response['status'] == 'success') {
          this.preSignin = !this.preSignin;
          this.postSignin = !this.postSignin;
          console.log("success");
          console.log(response);
          this.user_Name = response['user'].name;
          this.user_Mail = response['user'].email;
          this.user_Id = response['user'].id;
          this.user_Phone = response['user'].phone;
          sessionStorage.setItem('user_Name', this.user_Name);
          sessionStorage.setItem('user_Mail', this.user_Mail);
          sessionStorage.setItem('user_ID', this.user_Id);
          sessionStorage.setItem('user_Phone', this.user_Phone);
        }
      },
      err => {
        console.log("failed");
      }
    )
  }
  signup(signupCredentials){
    console.log(signupCredentials);
    this._userService.signup(signupCredentials).subscribe(
      response => {
        if (response['status'] == 'success') {
          this.preSignin = !this.preSignin;
          this.postSignin = !this.postSignin;
          console.log("success");
          console.log(response);
          this.user_Name = response['user'].name;
          this.user_Mail = response['user'].email;
          this.user_Id = response['user'].id;
          this.user_Phone = response['user'].phone;
          sessionStorage.setItem('user_Name', this.user_Name);
          sessionStorage.setItem('user_Mail', this.user_Mail);
          sessionStorage.setItem('user_ID', this.user_Id);
          sessionStorage.setItem('user_Phone', this.user_Phone);
        }
      },
      err => {
        console.log("failed");
      }
    )
  }
  userAccount(){
    this.route.navigate(['/santech/user']);
  }
  signOut(){
    sessionStorage.clear();
    this.preSignin = !this.preSignin;
    this.postSignin = !this.postSignin;
    alert(this.translate.instant('We_Miss_You'));
    if(this.route.url == "/santech/user"){
      this.route.navigate(['santech/home']);
    }
  }
  ngOnInit() {
    this.userName = (sessionStorage.getItem('user_Name'));
    if(this.userName != null){
      this.preSignin = false;
      this.postSignin = true;
    }
    else{
      this.preSignin = true;
      this.postSignin = false;
    }
  }

}
