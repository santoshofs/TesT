import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  _flightFrom: string;
  _flightTo: string;
  _travelDate: string;
  constructor() {}

  get flightFrom(): string {
    return this._flightFrom;
  }
  set flightFrom(value: string){
    this._flightFrom = value;
  }
  get flightTo(): string {
    return this._flightTo;
  }
  set flightTo(value: string){
    this._flightTo = value;
  }
  get travelDate(): string {
    return this._travelDate;
  }
  set travelDate(value: string){
    this._travelDate = value;
  }

}
