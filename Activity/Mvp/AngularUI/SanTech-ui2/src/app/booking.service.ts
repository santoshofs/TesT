import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookingService {
  public bookingUrl: string = "http://localhost:8080/SanTechFlights/SanService/control/booking";
  constructor(private _http: HttpClient) { }
  bookTicket(bookingCredentials){
    const bodyHard = new URLSearchParams();
    bodyHard.set('u_name', bookingCredentials.userName);
    bodyHard.set('u_mail', bookingCredentials.userMail);
    bodyHard.set('p_name', bookingCredentials.passengerDetail.passengerName);
    bodyHard.set('p_age', bookingCredentials.passengerDetail.passengerAge);
    bodyHard.set('t_date', bookingCredentials.travelDate);
    bodyHard.set('f_name', bookingCredentials.flightDetail.flight_name);
    bodyHard.set('f_from', bookingCredentials.flightDetail.flight_from);
    bodyHard.set('f_to', bookingCredentials.flightDetail.flight_to);
    bodyHard.set('f_departure_time', bookingCredentials.flightDetail.flight_depature_time);
    bodyHard.set('f_arrival_time', bookingCredentials.flightDetail.flight_arrival_time);
    bodyHard.set('f_price', bookingCredentials.flightDetail.flight_price);
    const body = bodyHard.toString();
    return this._http.post(this.bookingUrl, body, { headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded') });
  }
}
