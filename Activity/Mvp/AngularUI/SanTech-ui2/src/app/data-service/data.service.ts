import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  _travelDate: string;
  _availableFlights: any;
  _selectedFlight: any;
  _passengerDetail: any;
  _flightTo: string;

  constructor() {}
  getAvailableFlights(): any {
    return this._availableFlights;
  }
  setAvailableFlights(value: any){
    this._availableFlights = value;
  }
  getSelectedFlight(): any {
    return this._selectedFlight;
  }
  setSelectedFlight(value: any){
    this._selectedFlight = value;
  }
  getTravelDate(): string {
    return this._travelDate;
  }
  setTravelDate(value: string){
    this._travelDate = value;
  }
  getPassengerDetail(): string {
    return this._passengerDetail;
  }
  setPassengerDetail(value: string){
    this._passengerDetail = value;
  }
  get flightTo(): string {
    return this._flightTo;
  }
  set flightTo(value: string){
    this._flightTo = value;
  }
}
