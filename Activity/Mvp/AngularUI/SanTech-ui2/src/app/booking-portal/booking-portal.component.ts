import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Routes, Router } from '@angular/router';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-booking-portal',
  templateUrl: './booking-portal.component.html',
  styleUrls: ['./booking-portal.component.css']
})
export class BookingPortalComponent implements OnInit {
  passengerCredentials = { passengerName: '', passengerAge: '' };
  flightDetail: any;
  travelDate: any;


  constructor(private translate: TranslateService, private route: Router,private _DataService: DataService) {
    translate.addLangs(["en", "tamil"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|tamil/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.flightDetail = this._DataService.getSelectedFlight();
    this.travelDate = this._DataService.getTravelDate();
    console.log("booking page la vantruchu"+this.flightDetail);
  }

  submitPassengerDetail(passengerCredentials){
    console.log(passengerCredentials);
    this._DataService.setPassengerDetail(passengerCredentials);
    this.route.navigate(['/payment']);
  }
}
