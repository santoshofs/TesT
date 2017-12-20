import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { BookingService } from '../booking.service';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-payment-portal',
  templateUrl: './payment-portal.component.html',
  styleUrls: ['./payment-portal.component.css'],
  providers: [BookingService]
})
export class PaymentPortalComponent implements OnInit {
  userName : any;
  userMail : any;
  flightDetail: any;
  passengerDetail: any;
  travelDate: any;
  bookingCredentials = { userName: '', userMail: '',passengerDetail: '',travelDate: '',flightDetail: ''};
  constructor(private _bookingService: BookingService, private route: Router,private _DataService: DataService,private translate: TranslateService) {  }

  ngOnInit() {
    this.userName = (window.sessionStorage.getItem('user_Name'));
    this.userMail = (window.sessionStorage.getItem('user_Mail'));
    this.flightDetail = this._DataService.getSelectedFlight();
    this.passengerDetail = this._DataService.getPassengerDetail();
    this.travelDate = this._DataService.getTravelDate();
    this.bookingCredentials = {userName: this.userName, userMail: this.userMail,passengerDetail: this.passengerDetail,travelDate: this.travelDate,flightDetail: this.flightDetail};
  }
  paynow(){
    console.log(this.bookingCredentials);
    this._bookingService.bookTicket(this.bookingCredentials).subscribe(
      response => {
        if (response['status'] == 'success') {
          alert("Ticket Booked Successfully..! Check your mail or user account to view ticket.");
          this.route.navigate(['/santech']);
        }
      },
      err => {
        console.log("failed");
      }
    )
  }
}
