import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class UserService {
   public loginUrl:string="http://localhost:8080/SanTechFlights/SanService/control/userLogin";
   static userDetails:any;
  constructor(private _http:HttpClient) { }
  login(loginCredentials){
    const bodyHard = new URLSearchParams();
    bodyHard.set('mail',loginCredentials.email);
    bodyHard.set('pwd',loginCredentials.password);
    const body = bodyHard.toString();
    return this._http.post(this.loginUrl,body, { headers: new HttpHeaders().set('content-type','application/x-www-form-urlencoded')});

          // .map((response:Response) =>
          // {
          //     UserService.userDetails=response.json(),
          //        console.log(UserService.userDetails)});


  }
}
