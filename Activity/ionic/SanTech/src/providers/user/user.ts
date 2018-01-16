import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  public loginUrl: string = "http://localhost:8080/SanTechFlights/SanService/control/userLogin";
  public signupUrl: string = "http://localhost:8080/SanTechFlights/SanService/control/newUser";
  public historyUrl: string = "http://localhost:8080/SanTechFlights/SanService/control/bookingSearch";

  constructor(public _http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  login(loginCredentials){
    const dataContainer = new URLSearchParams();
    dataContainer.set('mail', loginCredentials.email);
    dataContainer.set('pwd', loginCredentials.password);
    const body = dataContainer.toString();
    return this._http.post(this.loginUrl, body, { headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded') });
  }
  signup(signupCredentials){
    const dataContainer = new URLSearchParams();
    dataContainer.set('name', signupCredentials.name);
    dataContainer.set('email', signupCredentials.email);
    dataContainer.set('pwd', signupCredentials.password);
    dataContainer.set('phone', signupCredentials.phone);
    const body = dataContainer.toString();
    return this._http.post(this.signupUrl, body, { headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded') });
  }
  bookingHistory(userCredentials){
    const dataContainer = new URLSearchParams();
    dataContainer.set('u_name', userCredentials.userName);
    dataContainer.set('u_mail', userCredentials.userMail);
    const body = dataContainer.toString();
    return this._http.post(this.historyUrl, body, { headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded') });
  }
}
