import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Routes, Router } from '@angular/router';
import { DataService } from '../data-service/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  userName : any;
  userMail : any;
  userCredentials = { userName: '', userMail: '' };
  userTickets: any;
  constructor(private _userService: UserService, private route: Router, private _DataService: DataService) { }

  ngOnInit() {
    this.userName = (window.sessionStorage.getItem('user_Name'));
    this.userMail = (window.sessionStorage.getItem('user_Mail'));
    this.userCredentials =  { userName: this.userName, userMail: this.userMail};
  }

  bookingHistory(){
    console.log(this.userCredentials);
    this._userService.bookingHistory(this.userCredentials).subscribe(
      response => {
        if (response['status'] == 'success') {
          this._DataService.setUserTickets(response['bookings']);
          console.log(this._DataService.getUserTickets());
          // this.route.navigate(['/santech/user/history']);
          this.userTickets = response['bookings'];
          // this.userTickets = this._DataService.getUserTickets();
        }
      },
      err => {
        console.log("failed");
      }
    )
  }
}
