import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FlightService {
  public flightsearchUrl: string = "http://localhost:8080/SanTechFlights/SanService/control/flightSearch";
  constructor(private _http: HttpClient) { }
  flightsearch(searchCredentials){
    const bodyHard = new URLSearchParams();
    bodyHard.set('flight_from', searchCredentials.from);
    bodyHard.set('flight_to', searchCredentials.to);
    const body = bodyHard.toString();
    return this._http.post(this.flightsearchUrl, body, { headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded') });
  }
}
