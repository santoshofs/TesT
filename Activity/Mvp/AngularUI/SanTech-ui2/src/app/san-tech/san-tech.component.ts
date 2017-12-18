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

  loginCredentials = { email: '', password: '' };
  user_Details: any;
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
        // console.log("success");
        // this.user_Details=UserService.userDetails;
        // console.log(this.user_Details,"awesome");
        // window.sessionStorage.setItem('user_details',this.user_Details);
        //
        //
        //
        //        //this.user_details = JSON.parse(window.sessionStorage.getItem('userdetails'));
        //
        //        this.route.navigate(['/booking']);
        if (response['status'] == 'success') {
          console.log("success");
          console.log(response);
          this.user_Details = JSON.stringify(response);
          console.log(this.user_Details, "awesome");
          // window.sessionStorage.setItem('user_details', (response['user']));
          sessionStorage.setItem('user_details', this.user_Details);
        }


      },
      err => {
        console.log("failed");
      }


    )
  }

  ngOnInit() {
  }

}
